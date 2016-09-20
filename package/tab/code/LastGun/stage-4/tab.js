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
            $(config.triggers).on(config.triggerType,function () {
                $(this).addClass(config.activeTriggerClass).siblings().removeClass(config.activeTriggerClass);
                var $index=$(config.triggers).index($(this));
                $(config.contents).css('display','none').eq($index).css('display','block');
            })
        },
        defaultTrigger: function (config) {
            $(config.triggers).eq(config.activeIndex-1).trigger(config.triggerType);
        }
    }
    global.Tab=Tab;
})(jQuery,window)
