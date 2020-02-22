
$.ajax({
    type: "GET",
    url: url,
    setTimeout: 200,
    Beforesend:function(){
        $content.append('<div id="load">loading</div>');
    },
    complete:function()
    {
        $('#load').remove();
    },
    Success: function(data){
        $content.html($(data).find('#container')).hide().fadeIn(400);

    }

});