'use strict';


$(document).ready(init);

function init(){
  randomizer();
  $('#timer').text('00:00');
  $('#board').on('click','.flip3D', selectCan);
}

var $can1;
var $can2;
var $can1data;
var $can2data;

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
    var $curTd = $('.back:nth('+ i + ')');

    $curTd.css('background-image',first + thisBeer + last);
  }
}


// HOW TO UNIQUELY IDENTIFY EACH CAN
function selectCan(){
  if ($can1) {
    $can2data = $(this);
    console.log($can2data);
    $can2 = $(this).find('.back')[0].style.cssText;
    checkMatch();
    }
  else {
    $can1data = $(this);
    $can1 = $(this).find('.back')[0].style.cssText;
    console.log($can1data);
  }
}

function checkMatch(){
  if ($can1 === $can2){
    console.log('fuck yea');
    showMatch();
  } else { console.log('false check');}
  clearChoice();
}

function showMatch(){
  console.log('showing match..');
  $can1data.removeClass('front');
  $can2data.removeClass('front');
}


function clearChoice(){
  $can1 = undefined;
  $can2 = undefined;
}
