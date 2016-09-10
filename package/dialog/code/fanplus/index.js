function Dialog(opt){
    this.init(opt);
}

Dialog.prototype = {
    // 调用内容和关闭等行为
    init: function(opt){
        // 添加默认
        var defaults = {
            trigger:'#btn',
            bgEle:'body',
            bgColorGray: 'rgba(12,12,12,.3)',
            bgColorWhite: '#ffffff',
            content: '<strong>hello world</strong>',
            effectShow: function($e){$e.show()},
            effectHide: function($e){$e.hide()},
        }
        // 合并默认及设置
        var settings = Object.assign({},defaults,opt);
        var _this = this;
        console.log(settings)
        _this.content();
        console.log(_this.dialog.name)
        var dialog = $('.'+_this.dialog.name);
        var dialogContent = dialog.find($('.'+_this.dialog.content));
        var close = $('.'+_this.dialog.close);
        _this.showDiglog(settings,dialog,dialogContent);
        _this.innerClose(settings,close,dialog);
        _this.keyClose(settings,dialog);
    },
    dialog: function(){
        return {
            name: 'm-dialog',
            close: 'm-dialog-hd-close',
            title: 'm-dialog-hd',
            content: 'm-dialog-bd'
        }
    }(),
    changeColor: function(ele,color){
         $(ele).css('backgroundColor',color);
    },
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
    showDiglog: function(settings,dialog,dialogContent){
        var _this = this;
        var cnt = settings.content;
        $(settings.trigger).on('click', function(){
            settings.effectShow(dialog);
            dialogContent.html(cnt);
            _this.changeColor(settings.bgEle,settings.bgColorGray);
            $(settings.trigger).prop('disabled',true);
        })
    },
    innerClose: function(settings,close,dialog){
        var _this = this;
        close.on('click', function(e){
            e.preventDefault();
            var closeObj = $(this).parent().get(0);
            settings.effectHide($(closeObj));
            if(settings.onClose){
                settings.onClose();
            }
            _this.changeColor(settings.bgEle,settings.bgColorWhite);
            $(settings.trigger).prop('disabled',false);
        })
    },
    keyClose: function(settings,dialog){
        var _this = this;
        window.addEventListener('keydown', function(e){
            e.preventDefault();
            if(e.code === 'Escape'){
                settings.effectHide(dialog);
                if(settings.onClose){
                    settings.onClose();
                }
            _this.changeColor(settings.bgEle,settings.bgColorWhite);
            $(settings.trigger).prop('disabled',false);
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
    // onClose:function(){
    //     alert(this.content)
    // }
})
