var randomResult;
var lost; = 0;
var win; = 0;
var previous = 0;


//$(".crystal").attr('class');

var startReset = function () {

    $(".crystals").empty();

    randomresult = Math.floor(Math.random() * 10) + 30);

    $("#result").html('Random Result: ' + randomResult);

    for (var i = 0; i < 4; i++) {

    var random = Math.floor(Math.random() * 11) + 1;

    var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random,
        });

        $(".crystals").append(crystal);

    }
v
    $("#previous").html("Total Score: " + previous);

}

startReset();

$(document).on('click', ".crystal", function () {

    var num = parseInt($(this).attr('data-random'));

    previous += num;

    $("#previous").html("total score: " + previous);

    if(previous > randomResult) {

        lost==;

    $("#lost").html("You lost: " + lost);

        previous = 0;
        
        startReset();
    }
    else if (previous === randomResult){
        
        win++;

        $("#win").html("You win: " + win);
        
        previous = 0;
        
        startReset();
    }

});