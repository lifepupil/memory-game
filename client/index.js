'use strict';


$(document).ready(init);

function init(){
  $('#timer').text('00:00');
  randomizer();
}




var beerArray = ['carlsberg.png', 'duff.png', 'guiness.png', 'headytopper.png',
        'pbr.png','shiner.png','stowaway.png','tenfidy.png','westbrook.png',
        'carlsberg.png', 'duff.png', 'guiness.png', 'headytopper.png',
        'pbr.png','shiner.png','stowaway.png','tenfidy.png','westbrook.png', 'monkeys_av2.jpg', 'monkeys_av2.jpg'];

var first = "url('/assets/";
var last = "')";

function randomizer() {
  for (var i = 19; i>=0 ; i--) {
    var currentIndex = Math.floor(Math.random()*i);
    var thisBeer = beerArray.splice(currentIndex,1);
    console.log(first+thisBeer+last);
console.log(beerArray.length);
    // $('td').css({'background-image': 'url(' + id + ')',})
    $('td')[i].css({'background-image': first+thisBeer+last,});
  }

}
