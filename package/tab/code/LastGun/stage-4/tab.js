;(function ($,global) {
    function Tab(config){
        this._init(config)
    }
    Tab.prototype={
        _init: function (config) {
            this.switchTab(config);
            this.defaultTrigger(config);
        },
        switchTab: function (config) {
            if(config.triggerType === 'hover'){
                config.triggerType = 'mouseenter';
            } else if(config.triggerType === 'click'){
                config.triggerType = 'click';
            }
            $(config.triggers).on(config.triggerType,function () {
                $(this).addClass(config.activeTriggerClass).siblings().removeClass(config.activeTriggerClass);
                var $index=$(config.triggers).index($(this));
                $(config.contents).css('display','none').eq($index).css('display','block');
            })
        },
        defaultTrigger: function (config) {
            config.activeIndex=config.activeIndex||1;
            if(config.activeIndex<1||config.activeIndex>$(config.triggers).length){
                alert('activeIndex参数配置错误，索引越界,无法显示默认值');
                return
            }
            $(config.triggers).eq(config.activeIndex-1).trigger(config.triggerType);
        }
    }
    global.Tab=Tab;
})(jQuery,window)
