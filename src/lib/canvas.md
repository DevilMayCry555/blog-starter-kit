# 类型

## 2D 类型的参数有：

(1)、alpha 它的值为 Boolean 类型，如果设置为 false, 浏览器将认 Canvas 背景总是不透明的，这样可以做到一些性能提效。

(2)、willReadFrequently，值也为 Boolean 类型，用于表明是否要重复操作，频繁调用 getImageData()方法时能节省内存，但是仅 Gecko 内核浏览器支持。

(3)、storage 用于表明使用哪种方式存储，默认值 persisten，表示持久化存储。

## 3D 类型的参数有：

(1)、alpha 值为 Boolean 类型，指示画布是否包含 alpha 缓冲区。

(2)、antialias 值为 Boolean 类型，指示是否开启抗锯齿。

(3)、depth 值为 Boolean 类型，表示绘图缓冲区的深度缓冲区至少为 16 位。

(4)、failIfMajorPerformanceCaveat 值为 Boolean 类型，指示如果系统性能较低，是否创建上下文。

(5)、powerPreference：对用户代理的提示，指示 GPU 的哪种配置适合 WebGL 上下文。可能的值是：

default: 自动选择模式，自动决定哪种 GPU 配置最合适，为默认值。

high-performance: 高性能模式，优先考虑渲染性能而不是功耗。

low-power: 节能模式，优先考虑节能而不是渲染性能。

(6)、premultipliedAlpha 值为 Boolean 类型，表示页面合成器将假定绘图缓冲区包含具有预乘 alpha 的颜色。

(7)、preserveDrawingBuffer 值为 Boolean 类型，如果值为 true，则不会清除缓冲区并保留其值，直到被清除或被使用者覆盖。

(8)、stencil 值为 Boolean 类型，表示绘图缓冲区具有至少 8 位的模板缓冲区。

# ctx 2D

## 描边 stroke()

ctx.strokeStyle = '#000' 描边样式

## 填充 fill()

ctx.fillStyle = '#000' 填充样式

## 线

ctx.moveTo(x1,y1) 移动

ctx.lineTo(x2,y2) 直线

## 矩形

strokeRect(x, y, width, height) 绘制一个矩形的边框

fillRect(x, y, width, height) 绘制一个填充的矩形

clearRect(x, y, width, height) 清除指定矩形区域，让清除部分完全透明

## 圆弧或圆

arc(x, y, radius, startAngle, endAngle, anticlockwise)

x,y - 圆心坐标

radius - 半径

startAngle,endAngle - 起止角度（0 ~ Math.PI）

anticlockwise - 绘制方向 默认 false 顺时针

## 路径开启或闭合

beginPath 开启

closePath 闭合

关闭路径其实并不是必须的，对于新路径其实每次都开启新路径就 ok

## 二次贝塞尔

quadraticCurveTo(cp1x, cp1y, x, y)

cp1x, cp1y - 控制点（引力点）

x, y - 结束点

## 三次贝塞尔

bezierCurveTo(cp1x,cp1y, cp2x,cp2y, x, y)
