# Tab 选项卡

<img src="tab.png" >

## 阶段 1

实现上图 JS 效果，CSS样式随意。


## 阶段 2

封装成一个 `tab` 函数，提供如下 api ：

```js
tab({
    element: '.newtab',
    triggers: '.triggers',
    contents: '.contents'
})
```

```html
<div class="newtab">
    <span class="triggers">1</span>
    <span class="triggers">2</span>
    <span class="triggers">3</span>
    
    <div class="contents">a</div>
    <div class="contents">b</div>
    <div class="contents">c</div>
</div>
```

可通过参数指定父级DOM、触发DOM、内容DOM。

## 阶段 3

`activeIndex`

初始化时，自动切换到指定面板，默认为0，也就是第一个。

```js
tab({
    element: '.newtab',
    triggers: '.triggers',
    contents: '.contents',
    // 显示第二个 content
    activeIndex: 1
})
```
---

`activeTriggerClass`

triggers被选中时的class,默认 `ui-tab-active`

```js
tab({
    element: '.newtab',
    triggers: '.triggers',
    contents: '.contents',
	activeTriggerClass: 'ui-tab-active'
})
```


```css
.ui-tab-active{
	color: red;
}
```


## 阶段 4

添加触发类型

`triggerType`

默认是 `click` ，可选 `hover`

```js
tab({
    element: '.newtab',
    triggerType: 'hover',
    triggers: '.triggers',
    contents: '.contents'
})
```

## 阶段 5

可配置点击切换时触发的函数

```js
tab({
    element: '.newtab',
    triggerType: 'click',
    triggers: '.triggers',
    contents: '.contents',
    // click 或 hover trigger 时 onSwitch 会执行
    onSwitch: function (index, count) {
        /*
        index 是当前 trigger 的索引
        count 是 trigger 的总数
        */
    }
})
```

## 完成挑战

还有更多 API 可以实现，但以上五个阶段已经足够提高你 Tab 类型组件开发的经验。

如果你将以上所有阶段都完成了， Tab 的挑战就结束了。但我们希望你继续完善这个组件增加更多的 API。
