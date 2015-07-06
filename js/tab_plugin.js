// add plugin
(function($, win) {
    function plugin(control) {
        var $elem = $(this);
        $control = $(control);

        $elem.on('click', 'a', function() {
            var tabName = $(this).attr('data-tab');
            $elem.trigger('change.tabs', tabName);
        });

        $elem.on('change.tabs', function(e, tabName) {
            $elem.find('[data-tab=' + tabName + ']')
                .parent('li').addClass('active')
                .siblings('li').removeClass('active');
        });

        $elem.on('change.tabs', function(e, tabName) {
            $control.find('[data-tab=' + tabName + ']')
                .show()
                .siblings('[data-tab]').hide();
        });

        $elem.on('change.tabs', function(e, tabName) {
            window.location.hash = tabName;
        });

        $(win).on('hashchange', function() {
            var tabName = window.location.hash.slice(1);
            $elem.trigger('change.tabs', tabName);
        });

        var firstName = $elem.find('a').eq(0).attr('data-tab');
        $elem.trigger('change.tabs', firstName);
    }

    $.fn.tabs = plugin;
}(jQuery, window));