$('button span').parent().click(function(){
    if($('button span').hasClass('glyphicon-chevron-down')){
        $('button').html('<span class="glyphicon glyphicon-chevron-up"></span>');
    }
    else
    {
        $('button').html('<span class="glyphicon glyphicon-chevron-down"></span>');
    }
});
