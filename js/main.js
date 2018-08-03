function show_content(){
 $('.loading_page').hide();
 $('#cb-slideshow').show();
 $('.services').show();
 $('.about_us').show();
 $('.gallery').show();
 $('.demo-vedio').show();
 $('.counter').show();
 $('.Team').show();
 $('.price').show();
 $('.contact_us').show();
 $('.menu_mobile').show();
}

$(window).load(function(){
	setTimeout(show_content, 2000);
});


$(window).scroll(function(){
	if($(window).scrollTop()>300){
       $('.smallheader').css('display','none');
       $('.fullheader').addClass('display_fullheader');
	}
	else{
       $('.smallheader').css('display','block');
       $('.fullheader').removeClass('display_fullheader');
	}
});


//function about circle progress bar

$('#circle').circleProgress({
    value: 0.75,
    size: 105,
    fill: {
      gradient: ["#f3474b"]
    }
  });

$('#circle2').circleProgress({
    value: 0.50,
    size: 105,
    fill: {
      gradient: ["#f3474b"]
    }
  });

$('#circle3').circleProgress({
    value: 0.90,
    size: 105,
    fill: {
      gradient: ["#f3474b"]
    }
  });

//script to make gallery
var totalRows = 3,
    itemCol = 0;
for(var rowCount = 0; rowCount < totalRows; rowCount++){
  newCol = document.createElement('div');
  newCol.className = 'col';
  document.getElementsByClassName('wrapper')[0].appendChild(newCol);
}

for(var itemCount = 0; itemCount < document.getElementsByClassName('x').length; itemCount++){
  document.getElementsByClassName('col')[itemCol].appendChild(document.getElementsByClassName('x')[0]);
  if(itemCol < totalRows - 1){
    itemCol++; 
  } else {
    itemCol = 0;
  }
}

//function to make counter 1

var start=20;


var myVar = setInterval(function(){ myTimer() }, 200);

function myTimer(){
  var end=start++;

  $('#demo').text(end);

  if(start==143){
    clearInterval(myVar);
  }

}

//function to make counter 2

var start1=380;


var myVar1 = setInterval(function(){ myTimer1() }, 200);

function myTimer1(){
  var end1=start1++;

  $('#demo1').text(end1);

  if(start1==453){
    clearInterval(myVar1);
  }

}

//function to make counter 3

var start2=2256;


var myVar2 = setInterval(function(){ myTimer2() }, 200);

function myTimer2(){
  var end2=start2++;

  $('#demo2').text(end2);

  if(start2==2345){
    clearInterval(myVar2);
  }

}

//function to make counter 4

var start3=55577;


var myVar3 = setInterval(function(){ myTimer3() }, 200);

function myTimer3(){
  var end3=start3++;

  $('#demo3').text(end3);

  if(start3==55677){
    clearInterval(myVar3);
  }

}


$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,

    singleItem : true,
          dots : true,
          loop: true,
          navText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>"
          ],
          autoPlay : true,
          //stopOnHover : true,
         


    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
});





$('.open_action').click(function(){

  //$('.menu_mobile').css('background-color','red');

  if ($(".menu_mobile").hasClass("open")) {
            $(".menu_mobile").removeClass("open");

        } else {
            $(".menu_mobile").addClass("open");

        }

});


