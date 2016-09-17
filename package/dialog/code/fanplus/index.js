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
            effectShow: function($e){$e.show()},
            effectHide: function($e){$e.hide()},
            // set Diglog
            title: '标题12321',
            content: '<strong>hello world</strong>',
        }
        // 合并默认及设置
        var settings = Object.assign({},defaults,opt);
        var _this = this;
        console.log(settings)
        _this.content(settings);
        console.log(_this.dialog.name)
        var dialog = $('.'+_this.dialog.name);
        _this.showDiglog(settings,dialog);

        _this.innerClose(settings,dialog);
        _this.keyClose(settings,dialog);
        _this.dialogOk(settings,dialog);
    },
    // dialog class设置
    dialog: function(){
        return {
            name: 'm-dialog',
            close: 'm-dialog-close',
            title: 'm-dialog-hd',
            content: 'm-dialog-bd',
            ok: 'm-dialog-ok',
        }
    }(),
    // 改变颜色
    changeColor: function(ele,color){
         $(ele).css('backgroundColor',color);
    },
    // dialog 内容
    content: function(settings){
        var _this = this;
        var str = `
            <div class="${_this.dialog.name}" style="display: none">
                <span class="${_this.dialog.close}">X</span>
                <div class="${_this.dialog.title}">
                    ${settings.title}
                </div>
                <div class="${_this.dialog.content}">
                    ${settings.content}
                </div>
                <div class="m-dialog-ft">
                    <span class="${_this.dialog.ok}">确定</span>
                </div>
            </div>
        `;
        $('body').append(str);
    },
    // 显示dialog
    showDiglog: function(settings,dialog){
        var _this = this;
        $(settings.trigger).on('click', function(){
            settings.effectShow(dialog);
            _this.changeColor(settings.bgEle,settings.bgColorGray);
            $(settings.trigger).prop('disabled',true);
        })
    },
    // 通用关闭行为
    commonClose: function(settings,dialog){
        var _this = this;
        settings.effectHide(dialog);
        _this.changeColor(settings.bgEle,settings.bgColorWhite);
        $(settings.trigger).prop('disabled',false);
    },
    // dialog 内部关闭按钮行为
    innerClose: function(settings,dialog){
        var _this = this;
        var close = dialog.find($('.'+_this.dialog.close));
        close.on('click', function(e){
            e.preventDefault();
            if(settings.onClose){
                settings.onClose();
            }
            _this.commonClose(settings,dialog);

        })
    },
    // 按键关闭行为
    keyClose: function(settings,dialog){
        var _this = this;
        window.addEventListener('keydown', function(e){
            if(!dialog.attr('style')){
                e.preventDefault();
                if(e.code === 'Escape'){
                    if(settings.onClose){
                        settings.onClose();
                    }
                _this.commonClose(settings,dialog);
                }
            }
        },true)
    },
    // dialog ok callback
    dialogOk: function(settings,dialog){
        var _this = this;
        dialog.find($('.'+_this.dialog.ok)).on('click',function(){
            if(settings.ok){
                settings.ok();
            }
            _this.commonClose(settings,dialog);
        })
    }
}

// 调用 Dialog
new Dialog({
    trigger:'#btn',
    title: '我是dialog',
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
        alert(this.content)
    },
    ok: function(){
        alert('3213')
    }
})
