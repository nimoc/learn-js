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
            $(config.triggers).click(function () {
                $(this).addClass(config.activeTriggerClass).siblings().removeClass(config.activeTriggerClass);
                var $index=$(config.triggers).index($(this));
                $(config.contents).css('display','none').eq($index).css('display','block');
            })
        },
        defaultTrigger: function (config) {
            $(config.triggers).eq(config.activeIndex-1).trigger('click');
        }
    }
    global.Tab=Tab;
})(jQuery,window)
