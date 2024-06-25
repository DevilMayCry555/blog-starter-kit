library(ggplot2)
library(readr)
library(tidyr)
library(dplyr)

# 读取 CSV 文件数据
data <- read_csv("./qwer.csv") # 请将 'path/to/qwer.csv' 替换为实际路径
errors <- read_csv("./wucha.csv")

# 检查数据框的前几行，以确保数据正确读取
print(head(data))
print(head(errors))

# 假设两份数据都有相同的列以进行合并，例如 'C11'
# 将误差数据与原始数据合并
data_combined <- data %>%
    inner_join(errors, by = "C11") # 假设用"C11"作为合并的关键列

# 将数据转化为长格式
data_long <- data_combined %>%
    pivot_longer(cols = C6:`C18:1`, names_to = "Variable", values_to = "Value")

# 创建误差的长格式数据
errors_long <- data_combined %>%
    pivot_longer(cols = ends_with("_error"), names_to = "Variable_error", values_to = "Value_error")

# 去掉错误列的后缀，以便匹配
errors_long <- errors_long %>%
    mutate(Variable = sub("_error$", "", Variable_error)) %>%
    select(-Variable_error)

# 合并长格式的原始数据和误差数据
data_long <- data_long %>%
    left_join(errors_long, by = c("C11", "Variable"))


# 自定义堆积顺序 自上而下
data_long$Variable <- factor(data_long$Variable, levels = c("C6", "C8", "[5.40..5.68]", "C10", "C12", "C14", "C16:0", "C16:1", "C18:0", "C18:1")) # nolint

# 计算每个堆积条的底部和顶部位置
data_long <- data_long %>%
    group_by(C11) %>%
    arrange(desc(Variable)) %>%
    mutate(
        cum_value_bottom = lag(cumsum(Value), default = 0), # 底部位置
        cum_value_top = cum_value_bottom + Value
    ) %>%
    ungroup()

# 绘制堆积条形图
p <- ggplot(data_long, aes(x = C11, y = Value, fill = Variable)) +
    geom_bar(stat = "identity", width = 0.4) +
    geom_errorbar(aes(ymin = cum_value_top - Value_error, ymax = cum_value_top + Value_error), width = 0.2, position = position_identity()) +
    labs(title = "堆积条形图示例", x = "C11", y = "值") +
    theme_bw() +
    theme(axis.text.x = element_text(angle = 45, hjust = 1)) +
    scale_fill_manual(values = c("#929fff", "#433e7c", "#ffa897", "#7dc3fe", "#f47a75", "#024b51", "#af87fe", "#765005", "#bb60b2", "#0780cf")) # 手动指定颜色 # nolint

# 保存图表到当前文件夹
ggsave("堆积条形图示例.png", plot = p, width = 10, height = 6, dpi = 300)
