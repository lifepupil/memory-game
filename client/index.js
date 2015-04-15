'use strict';


$(document).ready(init);

function init(){
  randomizer();
  $('#timer').text('00:00');
  $('#board').on('click','.flip3D', selectCan);
}

var can1;


var beerArray = ['carlsberg.png', 'duff.png', 'guiness.png', 'headytopper.png',
        'pbr.png','shiner.png','stowaway.png','tenfidy.png','westbrook.png',
        'carlsberg.png', 'duff.png', 'guiness.png', 'headytopper.png',
        'pbr.png','shiner.png','stowaway.png','tenfidy.png','westbrook.png', 'monkey.png', 'monkey.png'];

var first = "url('/assets/";
var last = "')";

function randomizer() {
  for (var i = 19; i>=0 ; i--) {
    var currentIndex = Math.floor(Math.random()*i);
    var thisBeer = beerArray.splice(currentIndex,1);

    var $curTd = $('td:nth('+ i + ')');
    // var $curTd = $('.back:nth('+ i + ')');

    $curTd.css('background-image',first + thisBeer + last);
  }
}


// HOW TO UNIQUELY IDENTIFY EACH CAN
function selectCan(){

  $can2 = $(this).find('.back')[0].style.cssText.split('assets')[1];
  if


  // $source
  console.log($source);
  debugger;
}
