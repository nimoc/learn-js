;(function(global){
    function $(element){
        if(element){
            return document.querySelectorAll(element)[0];
        }
    }
    function Dialog(option){
        this._init(option);
    }
    Dialog.prototype={
        _init: function (option) {
            this._eventHandler(option);
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
            $('.dialog-close').addEventListener('click', function () {
                $('.dialog-wrapper').style.display='none';
                $('.dialog-mask').style.display='none';
            })
            //$('.dialog-wrapper').style.display='none';
        },
        _eventHandler: function (option) {

            var that=this;
            $(option.trigger).addEventListener('click', function () {
                that._render(option);
                $('.dialog-wrapper').style.display='block';
                $('.dialog-mask').style.display='block';
            });
            //$('.dialog-close').addEventListener('click', function () {
            //    $('.dialog-wrapper').style.display='none';
            //    $('.dialog-mask').style.display='none';
            //})


        }
    }
    global.Dialog=Dialog;
})(window)
