可配置点击切换时触发的函数

```js
tab(DOM, {
        triggers: ".ui-tab-triggers",           // 标签栏 的 CSS选择器
        content: ".ui-tab-content",             // 内容栏 的 CSS选择器
        triggerType: "mouseover",               // 触发方式事件类型,可切换为click
        activeIndex: 0,                         // 当前索引值
        activeTriggerClass: "triggers-active",  // 当前标签栏添加的 className
        activeContentClass: "content-active",   // 当前内容栏添加的 className


        directionControl: false,                // 前后按钮功能 默认关闭

        // 前后按钮插入位置选择, 1为contanier, 2为trigger的父级, 其他默认在content的父级
        dirControl_parent: 3,                   
        
        dir_pre: "ui-tab-pre",                  // 为“向前”按钮添加 className
        dir_next: "ui-tab-next",                // 为“向后”按钮添加 className

        auto: false,                            // 自动播放功能 默认关闭
        autoSpeed: 5000,                        // 自动播放速度 默认5秒
        delay: 200,                             // 鼠标离开后自动播放启动延迟时间 默认0.2秒


        // 切换功能函数  提供一个对象供调用参数
        // function({
        //  index: index,           提供当前标签栏索引值index
        //  count: count,           标签栏总数 count
        //  triggers: triggers,     标签栏DOM数组集合 triggers
        //  content: content        内容栏DOM数组集合 content
        // }) { body.........}
        // 
        // （非函数时 无效）
        onSwitch: null  
    }
})
```