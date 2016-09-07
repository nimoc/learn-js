function Dialog(opt){
    this.init(opt);
}

Dialog.prototype = {
    zIndex: 0,
    init: function(opt){
        var _this = this;
        _this.showDiglog(opt);
        _this.keyClose(opt);
    },
    content: function(){
        var _this = this;
        var str = `
            <div class="m-dialog" id="m-dialog-${_this.zIndex}" style="display: none">
                <span class="m-dialog-hd-close">X</span>
                <div class="m-dialog-hd m-dialog-${_this.zIndex}-hd">
                    标题
                </div>
                <div class="m-dialog-bd m-dialog-${_this.zIndex}-bd">
                    我是内容，内容
                </div>
            </div>
        `;
        $('body').append(str);

    },
    showDiglog: function(opt){
        var _this = this;
        var cnt = opt.content;
        $(opt.trigger).on('click', function(){
            _this.content();
            var dialog = $('#m-dialog-'+_this.zIndex);
            var dialogContent = dialog.find('.m-dialog-'+_this.zIndex+'-bd');
            var close = $('.m-dialog-hd-close');
            opt.effectShow(dialog);
            dialogContent.html(cnt);
            _this.zIndex ++;
            _this.innerClose(opt,close);
        })
    },
    innerClose: function(opt,close){
        var i = 0;
         close.on('click', function(e){
            var obj = $(this).parent().get(0);
            opt.effectHide($(obj));
            obj.remove();
            console.log(i++)
        })
    },
    keyClose: function(opt){
        window.addEventListener('keydown', function(e){
            e.preventDefault();
            // console.log(e.code);
            if(e.code == 'Escape'){
                opt.effectHide($('.m-dialog'));
                opt.onClose();
                $('.m-dialog').remove();
            }
        },true)
    }
}

new Dialog({
    trigger:'#btn',
    content:'<strong>哈啊哈</strong>',
    effectShow: function ($element) {
        // 淡入显示
        $element.fadeIn(500)
    },
    effectHide: function ($element) {
        // 淡出显示
        $element.fadeOut(500)
    },
    onClose:function(){
        alert(document.querySelector('.m-dialog-bd').innerHTML)
    }
})
