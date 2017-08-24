;(function ($,global) {
    function Dialog(option){
        this._init(option);
    }
    Dialog.prototype={
        _init: function (option) {
            this._evenHandler(option);
        },
        _render: function (option) {
            var _html= '<div class="dialog-mask"></div>' +
                '<div class="dialog-wrapper">' +
                '<div class="dialog-title">'
                +option.title
                +'<button class="dialog-close">X</button>' +
                '</div>' +
                '<div class="dialog-content">'
                +option.content
                +'</div>' +
                '</div>';
            var render=document.querySelector('#container');
            render.innerHTML=_html;
            $('.dialog-close')[0].addEventListener('click', function () {
                if(option||option.effectHide){
                    option.effectHide($('.dialog-mask,.dialog-wrapper'));
                }else{
                    $('.dialog-wrapper').style.display='none';
                    $('.dialog-mask').style.display='none';
                }
            })
        },
        _evenHandler: function (option) {
            var that=this;
            $(option.trigger)[0].addEventListener('click', function () {
                that._render(option);
                if(option||option.effectShow){
                    option.effectShow($('.dialog-mask,.dialog-wrapper'));
                }else{
                    $('.dialog-wrapper').style.display='block';
                    $('.dialog-mask').style.display='block';
                }

            });
        }
    }
    global.Dialog=Dialog;
})(jQuery,window)
