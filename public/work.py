
import xlwings as xw
import numpy as np
# 峰种类
# r_count = ['SjSjSc','SjSjSl','SjSjSj','SjSjT12']
# 碳种类
# c_count = ['','C6','C8','[5.40..5.68]','C10','C12','C14','C16:0','C16:1','C18:0','C18:1']
# 间隔
col_gap = 2
# 系数
coe = 0.1333
def transfer_row(row):
    k = row[0]
    ary = []
    ary.append(k)
    i = 1
    while i < len(row):
        ary.append(row[i] * coe / k)
        i = i + 1
    return ary
app = xw.App(visible=True,add_book=False)
workbook=app.books.open(r'D:\xls\test.xls')
# 数据处理
for sheet in workbook.sheets:
    tyd_mean = []
    tyd_std = []
    # 起始点 默认为B5
    start_point = 5
    current = 0
    rows = sheet.range('B'+str(start_point)).expand('table').rows
    while len(rows) > 1:
        tyd_mean.append([])
        tyd_std.append([])
        print(rows,len(rows))
        i = 0
        while i < len(rows):
            rows[i].value = transfer_row(rows[i].value)
            i = i + 1
        # col
        cols = sheet.range('B'+str(start_point)).expand('table').columns
        row_name = str(sheet.range('A'+str(start_point)).value).split('-')[0]
        print(row_name)
        tyd_mean[current].append(row_name)
        i = 1
        while i < len(cols):
            tyd_mean[current].append(np.mean(cols[i].value))
            tyd_std[current].append(np.std(cols[i].value))
            i = i + 1
        current = current + 1
        start_point = start_point + len(rows) + col_gap
        # row
        rows = sheet.range('B'+str(start_point)).expand('table').rows
    # 堆积表格
    c_count = []
    qwer = sheet.range('B4').expand('table').columns
    for qt in qwer:
        c_count.append(qt.value[0])
    tyd_mean.insert(0,c_count)
    sheet.range('A'+str(start_point)).value = tyd_mean
    stacked = sheet.charts.add(left=200,top=100,width=355,height=211)
    stacked.set_source_data(sheet.range('A'+str(start_point)).expand())
    stacked.chart_type = 'column_stacked'
    # 标准偏差
    for item in tyd_mean:
        start_point = start_point + 1
        # print(item,len(item))
    sheet.range('A'+str(start_point+1)).value = tyd_std
workbook.save(r'.\tydly.xls')
workbook.close()
app.quit()