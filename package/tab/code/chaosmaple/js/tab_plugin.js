// add plugin
;(function($, win) {
    function plugin(options) {
        var defaults = {
            element: null,
            triggers: '.tab-trigger',
            contents: '.tab-pane',
            activeIndex: 0,
            triggerType: 'click',
            onSwitch: null
        }
        var settings = $.extend(defaults, options)
        var triggerTypeObj = {
            click: 'click',
            hover: 'mouseover'
        }

        initial(settings)

        $(settings.element).on(triggerTypeObj[settings.triggerType], settings.triggers, function(event) {
            event.preventDefault()
            var $this = $(this)
            var selector = $this.attr('href')
            $this.parent().addClass('active').siblings('li').removeClass('active')
            $(selector).show().siblings(settings.contents).hide()
            //count this
            var count = $this.parents('ul')[0].childElementCount
            var index = $this.prop('tabindex')
            //hooks
            if(settings.onSwitch && typeof settings.onSwitch === 'function') settings.onSwitch(index, count)
        })
    }
    function initial(settings) {
        var triggerElem = $(settings.element).find(settings.triggers).eq(settings.activeIndex)
        triggerElem.parent().addClass('active')
        $(triggerElem.attr('href')).show()
    }

    win.tab = plugin
}(jQuery, window))