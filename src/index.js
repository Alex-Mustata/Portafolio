$(document).ready(function() {
    $('#mas_informacion').hide();
     $('#oscurecer').hide();
	$('.ver').click(function(){
        $("#mas_informacion").css({top: 1000});
        $('#mas_informacion').show();
        $('#mas_informacion').css('display', 'flex');

        $("#mas_informacion").animate({top: 96}, 500);

        $('#oscurecer').show();
        $('#oscurecer').css('position', 'absolute');


    });

    

    //Hacer que se esconda el div al pulsar fuera de el.
    $(document).mouseup(function(e) 
    {
        var container = $("#mas_informacion");

        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && container.has(e.target).length === 0) 
        {
            container.hide();
            $('#oscurecer').hide();
        }
    });

});