function Dialog(opt){
    this.init(opt);
}

Dialog.prototype = {
    init: function(opt){
        var _this = this;
        console.log()
        _this.content();
        console.log(_this.dialog.name)
        var dialog = $('.'+_this.dialog.name);
        var dialogContent = dialog.find($('.'+_this.dialog.content));
        var close = $('.'+_this.dialog.close);
        _this.showDiglog(opt,dialog,dialogContent);
        _this.innerClose(opt,close);
        _this.keyClose(opt,dialog);
    },
    dialog: function(){
        return {
            name: 'm-dialog',
            close: 'm-dialog-hd-close',
            title: 'm-dialog-hd',
            content: 'm-dialog-bd'
        }
    }(),
    content: function(){
        var _this = this;
        var str = `
            <div class="${_this.dialog.name}" style="display: none">
                <span class="${_this.dialog.close}">X</span>
                <div class="${_this.dialog.title}">
                    标题
                </div>
                <div class="${_this.dialog.content}">
                    我是内容，内容
                </div>
            </div>
        `;
        $('body').append(str);

    },
    showDiglog: function(opt,dialog,dialogContent){
        var _this = this;
        var cnt = opt.content;
        $(opt.trigger).on('click', function(){
            opt.effectShow(dialog);
            dialogContent.html(cnt);
        })
    },
    innerClose: function(opt,close){
        close.on('click', function(e){
            e.preventDefault();
            e.stopPropagation();
            var closeObj = $(this).parent().get(0);
            opt.effectHide($(closeObj));
            opt.onClose();
        })
    },
    keyClose: function(opt,dialog){
        window.addEventListener('keydown', function(e){
            e.preventDefault();
            // console.log(e.code);
            if(e.code == 'Escape'){
                opt.effectHide(dialog);
                opt.onClose();
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
