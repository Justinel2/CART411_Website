

let index;
let projectOverviewSS = ["InitialSS_1.png","InitialSS_2.png", "InitialSS_3.png", "InitialSS_4.png", "InitialSS_5.png"];

$(document).ready(function(){

    index = 1;
    $('#slider-inner').css({
        backgroundImage : 'url(assets/InitialSS_1.png)'
    });

    console.log("hello");

	
    $('#slider-prev').hover(function(){
  		$(this).fadeTo( "slow", 1 );
  	},function(){
  		$(this).fadeTo( "fast", 0.3 );
    });

  $('#slider-next').hover(function(){
        $(this).fadeTo( "slow", 1 );
    },function(){
        $(this).fadeTo( "fast", 0.3 );
    });

    $('#slider-prev').on('click', handlePrevSlide);
    $('#slider-next').on('click', handleNextSlide);
});

function handlePrevSlide(){
    if (index > 1 && index < 6){
        index = index - 1;
        console.log("previous clicked, index: " + index);
        let pictureIndex = index+2;
        $('#slider-inner').css({
            backgroundImage : "url(assets/InitialSS_"+ index +".png)"
        });
    }
}

function handleNextSlide(){
    if (index > 0 && index < 5){
        index = index + 1;
        console.log("previous clicked, index: " + index);
        $('#slider-inner').css({
            backgroundImage : "url(assets/InitialSS_"+ index +".png)"
        });
    }
}