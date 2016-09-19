;(function (global) {
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

        },
        _render: function (option) {

        },
        _evenHandler: function (option) {

        }

    }
    global.Dialog=Dialog;
})(window)
