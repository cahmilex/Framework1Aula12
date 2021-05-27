$(document).ready(function(){
    setInterval(function(){
        if ($("#i1").is(":visible")) {
            $("#i1").fadeOut("slow");
            $("#i2").delay(1000);
            $("#i2").fadeIn("slow");
        } else if ($("#i2").is(":visible")){
            $("#i2").fadeOut("slow");
            $("#i3").delay(1000);
            $("#i3").fadeIn("slow");
        } else if ($("#i3").is(":visible")){
            $("#i3").fadeOut("slow");
            $("#i4").delay(1000);
            $("#i4").fadeIn("slow");
        } else if ($("#i4").is(":visible")){
            $("#i4").fadeOut("slow");
            $("#i1").delay(1000);
            $("#i1").fadeIn("slow");
        }
    }, 2000);
});