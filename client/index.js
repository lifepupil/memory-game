'use strict';


$(document).ready(init);

function init(){
  randomizer();
  $('#button').click(init2);
  $('#timer').text('60');
}

function init2(){
  countDown(60);
  $('#board').on('click','.flip3D', selectCan);
}

var $can1;
var $can2;
var $can1data;
var $can2data;
var int;

var beerArray = ['carlsberg.png', 'duff.png', 'guiness.png', 'headytopper.png',
        'pbr.png','shiner.png','stowaway.png','tenfidy.png','westbrook.png',
        'carlsberg.png', 'duff.png', 'guiness.png', 'headytopper.png',
        'pbr.png','shiner.png','stowaway.png','tenfidy.png','westbrook.png', 'monkeys_av2.jpg', 'monkeys_av2.jpg'];

var first = "url('/assets/";
var last = "')";

function countDown(i) {
  int = setInterval(function() {
    $("#timer").text(i);
    if (i === 0){alert('You Lose!!!!!!');}
    i-- || clearInterval(int); //if i is 0, then stop the interval
  }, 1000);
}


function randomizer() {
  for (var i = 19; i>=0 ; i--) {
    var currentIndex = Math.floor(Math.random()*i);
    var thisBeer = beerArray.splice(currentIndex,1);

    // var $curTd = $('td:nth('+ i + ')');
    var $curBk = $('.back:nth('+ i + ')');
    var $curHid = $('.hidden:nth('+ i + ')');

    // $curTd.css('background-image',first + thisBeer + last);
    $curBk.css('background-image',first + thisBeer + last);
    $curHid.css('background-image',first + thisBeer + last);
    // $curHid.hide();
  }
}

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
  $can1data.append()
  $can1data.children().removeClass('front');
  $can2data.children().removeClass('front');

  $can1data.find('.hidden').show();
  $can2data.find('.hidden').show();

  $can1data.addClass('matched');
  $can2data.addClass('matched');

  checkWin();
}


function clearChoice(){
  $can1 = undefined;
  $can2 = undefined;
}

function checkWin(){
  if ($('.matched').length === 20) {
    alert('YOU WIN');
  };
}
