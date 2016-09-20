;(function($){
    var tab={
        init: function () {
            this.clickEvent();
            this._trigger();
        },
        clickEvent: function () {
            $('.tab-header')[0].addEventListener('click', function (e) {
                $('.mynav').removeClass('active');
                $('.myli').css('display','none');
                for(var i= 0,len=$('.mynav').length;i<len;i++){
                    $('.mynav')[i].index=i;
                    $('.myli')[i].index=i;
                }
                $('.mynav')[e.target.index].className='mynav active';
                $('.myli')[e.target.index].style.display='block';
            })
        },
        _trigger: function () {
            $('.mynav:first').trigger('click');
        }
    }
    tab.init();
})(jQuery)
