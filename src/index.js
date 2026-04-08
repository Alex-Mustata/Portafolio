$(document).ready(function() {
    $('#mas_informacion').hide();
     $('#oscurecer').hide();
	$('.ver').click(function(){
        $("#mas_informacion").css({top: 1000});
        $('#mas_informacion').show();
        $('#mas_informacion').css('display', 'flex');

        $("#mas_informacion").animate({top: 96}, 500);
    });

    //Hacer que se esconda el div al pulsar fuera de el.
    $(document).mouseup(function(e) 
    {
        var container = $("#mas_informacion");

        if (!container.is(e.target) && container.has(e.target).length === 0) 
        {
            container.hide();
        }
    });


    $('#mas_informacion2').hide();
     $('#oscurecer').hide();
	$('.ver2').click(function(){
        $("#mas_informacion2").css({top: 1000});
        $('#mas_informacion2').show();
        $('#mas_informacion2').css('display', 'flex');

        $("#mas_informacion2").animate({top: 96}, 500);
    });
    

    $(document).mouseup(function(e2) 
    {
        var container = $("#mas_informacion2");
        
        if (!container.is(e2.target) && container.has(e2.target).length === 0) 
        {
            container.hide();
        }
    });

});