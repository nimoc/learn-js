
;(function(){
    function $(element){
        if(element){
            return document.querySelectorAll(element)[0];
        }
    }
    $('#toggle-dialog').addEventListener('click', function () {
        $('.dialog-wrapper').style.display='block';
        $('.dialog-mask').style.display='block';
    })
    $('.dialog-close').addEventListener('click', function () {
        $('.dialog-wrapper').style.display='none';
        $('.dialog-mask').style.display='none';
    })

})()
