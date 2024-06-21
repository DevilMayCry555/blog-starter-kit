library(ggplot2)
library(readr)
library(tidyr)

# 读取 CSV 文件数据
data <- read_csv("./qwer.csv") # 请将 'path/to/qwer.csv' 替换为实际路径

# 将数据转化为长格式
data_long <- data %>%
    pivot_longer(cols = C6:`C18:1`, names_to = "Variable", values_to = "Value") # nolint

# 自定义堆积顺序 自上而下
data_long$Variable <- factor(data_long$Variable, levels = c("C6", "C8", "[5.40..5.68]", "C10", "C12", "C14", "C16:0", "C16:1", "C18:0", "C18:1")) # nolint

# 绘制堆积条形图
p <- ggplot(data_long, aes(x = C11, y = Value, fill = Variable)) +
    geom_bar(stat = "identity", width = 0.4) + # nolint
    labs(title = "堆积条形图示例", x = "C11", y = "值") +
    theme_bw() +
    theme(axis.text.x = element_text(angle = 45, hjust = 1)) +
    scale_fill_manual(values = c("#929fff", "#433e7c", "#ffa897", "#7dc3fe", "#f47a75", "#024b51", "#af87fe", "#765005", "#bb60b2", "#0780cf")) # 手动指定颜色 # nolint
# 打印出来
# print(p)
# 保存图表到当前文件夹
ggsave("堆积条形图示例.png", plot = p, width = 10, height = 6, dpi = 300)
