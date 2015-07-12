# 弹出层

by 前端小武 @xuexb

## 第一阶段

[dmeo](1/index.html)

其实就是调用方法时创建一个容器，并输出模板，然后把这个容器设置看不到的状态用来获取宽高，当然也可以使用`visibility:hidden`，拿到宽高后你懂的。

## 第二阶段

[dmeo](2/index.html)

在1的基础上添加触发元素，思路是在构造函数里判断是否有触发元素，如果有则绑定事件，事件触发的时候调用`create`方法来弹层

## 第三阶段

[demo](3/index.html)

在2的基础上添加展现/隐藏回调，其实就是在弹层定位后执行下展现的方法

## 第四阶段

[demo](4/index.html)

在3的基础上添加`onClose`关闭回调，添加`esc`事件监听，这里需要注意的是自己绑定的私有事件，在不用的时候（插件被销毁）一定要注销了，比如常见的`resize`,`scroll`,`key*`事件，不用的时候一定要卸载，事件空间是个好东西～

## 扩展

其实弹层还要考虑窗口`resize`的时候、标题、按钮组、定时、宽高、遮罩、`fixed`等，还要提供一些常用的`API`，下面是我写的一个小弹层，欢迎[提bug](https://github.com/xuexb/demo/issues/new?title=dialog%20bug:)～

* [demo](http://github.xuexb.com/demo/dialog/)
* [dialog.js](http://github.xuexb.com/demo/dialog/mod/dialog.js)