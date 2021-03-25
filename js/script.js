var imgSrc=["pen.jpg","shock.jpg","bs.jpg","cac.png","ccc.jpg","cub.jpg","itv.jpg","itv2.jpg","os.png","tdc.png"];
var asideElm=document.getElementById("asideImg");


var asideX=10;
var time;
var scroll;
var winWidth=document.body.offsetWidth;
var isChanging=false;
var isWorkViewing=false;





$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 1000;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    if(isWorkViewing){
      close();
      asideElm.src="image/aside/"+asideChoice();
      time=setInterval(asideMove,50);
    }
    return false;
  });
});

function asideChoice(){
  var random=Math.floor(Math.random()*imgSrc.length);
  return imgSrc[random];
}
function delayStop(){
  isChanging=true;
  setTimeout(function(){
    clearInterval(time);
  },600)
}

$(window).on('load',function(){
  asideElm.src="image/aside/"+asideChoice();
});

function asideMove(){
  asideElm.style.left=-asideX+"px";
  asideX+=1.2;
  if(asideX>=asideElm.clientWidth-winWidth*0.2&&!isChanging){
    // console.log("stop");
    delayStop();
    $('#asideImg').fadeOut(800);
    setTimeout(function(){
      asideX=5;
      asideElm.style.left=-asideX+"px";
      asideElm.src="image/aside/"+asideChoice();
    },800)
    setTimeout(function(){
      isChanging=false;
      if(!isWorkViewing){
        $('#asideImg').fadeIn(1500);
        time=setInterval(asideMove,50);
      }
    },1200)
  }
}



$(function(){
  $(".woEC").on('click',function(){
    $('#asideImg').fadeOut(800);
    $('aside').animate({width:"85vw"},1200,'jswing');
    isChanging=false;
    isWorkViewing=true;
    console.log("workClick");
    setTimeout(function(){
      $('.ecWorkImg').fadeIn(800);
      $('.ecWorkCap').fadeIn(800);
    },1200)
  });
  $(".woBBL").on('click',function(){
    $('#asideImg').fadeOut(800);
    $('aside').animate({width:"85vw"},1200,'jswing');
    isChanging=false;
    isWorkViewing=true;
    console.log("workClick");
    setTimeout(function(){
      $('.bblWorkImg').fadeIn(800);
      $('.bblWorkCap').fadeIn(800);
    },1200)
  });
  $(".woNOH").on('click',function(){
    $('#asideImg').fadeOut(800);
    $('aside').animate({width:"85vw"},1200,'jswing');
    isChanging=false;
    isWorkViewing=true;
    console.log("workClick");
    setTimeout(function(){
      $('.nohWorkImg').fadeIn(800);
      $('.nohWorkCap').fadeIn(800);
    },1200)
  });
  $(".woTC").on('click',function(){
    $('#asideImg').fadeOut(800);
    $('aside').animate({width:"85vw"},1200,'jswing');
    isChanging=false;
    isWorkViewing=true;
    console.log("workClick");
    setTimeout(function(){
      $('.tcWorkImg').fadeIn(800);
      $('.tcWorkCap').fadeIn(800);
    },1200)
  });
  $(".woKRT").on('click',function(){
    $('#asideImg').fadeOut(800);
    $('aside').animate({width:"85vw"},1200,'jswing');
    isChanging=false;
    isWorkViewing=true;
    console.log("workClick");
    setTimeout(function(){
      $('.krtWorkImg').fadeIn(800);
      $('.krtWorkCap').fadeIn(800);
    },1200)
  });
  $(".woITV").on('click',function(){
    $('#asideImg').fadeOut(800);
    $('aside').animate({width:"85vw"},1200,'jswing');
    isChanging=false;
    isWorkViewing=true;
    console.log("workClick");
    setTimeout(function(){
      $('.itvWorkImg').fadeIn(800);
      $('.itvWorkCap').fadeIn(800);
    },1200)
  });
  $(".woCCC").on('click',function(){
    $('#asideImg').fadeOut(800);
    $('aside').animate({width:"85vw"},1200,'jswing');
    isChanging=false;
    isWorkViewing=true;
    console.log("workClick");
    setTimeout(function(){
      $('.cccWorkImg').fadeIn(800);
      $('.cccWorkCap').fadeIn(800);
    },1200)
  });
  $(".woBS").on('click',function(){
    $('#asideImg').fadeOut(800);
    $('aside').animate({width:"85vw"},1200,'jswing');
    isChanging=false;
    isWorkViewing=true;
    console.log("workClick");
    setTimeout(function(){
      $('.bsWorkImg').fadeIn(800);
      $('.bsWorkCap').fadeIn(800);
    },1200)
  });
  $(".woPU").on('click',function(){
    $('#asideImg').fadeOut(800);
    $('aside').animate({width:"85vw"},1200,'jswing');
    isChanging=false;
    isWorkViewing=true;
    console.log("workClick");
    setTimeout(function(){
      $('.cubWorkImg').fadeIn(800);
      $('.cubWorkCap').fadeIn(800);
    },1200)
  });
  $(".woCAC").on('click',function(){
    $('#asideImg').fadeOut(800);
    $('aside').animate({width:"85vw"},1200,'jswing');
    isChanging=false;
    isWorkViewing=true;
    console.log("workClick");
    setTimeout(function(){
      $('.cacWorkImg').fadeIn(800);
      $('.cacWorkCap').fadeIn(800);
    },1200)
  });
  $(".woCN").on('click',function(){
    $('#asideImg').fadeOut(800);
    $('aside').animate({width:"85vw"},1200,'jswing');
    isChanging=false;
    isWorkViewing=true;
    console.log("workClick");
    setTimeout(function(){
      $('.cnWorkImg').fadeIn(800);
      $('.cnWorkCap').fadeIn(800);
    },1200)
  });
  $(".woOS").on('click',function(){
    $('#asideImg').fadeOut(800);
    $('aside').animate({width:"85vw"},1200,'jswing');
    isChanging=false;
    isWorkViewing=true;
    console.log("workClick");
    setTimeout(function(){
      $('.osWorkImg').fadeIn(800);
      $('.osWorkCap').fadeIn(800);
    },1200)
  });
  $(".woTDC").on('click',function(){
    $('#asideImg').fadeOut(800);
    $('aside').animate({width:"85vw"},1200,'jswing');
    isChanging=false;
    isWorkViewing=true;
    console.log("workClick");
    setTimeout(function(){
      $('.tdcWorkImg').fadeIn(800);
      $('.tdcWorkCap').fadeIn(800);
    },1200)
  });
});

const typing = (element, sentence) => {
  [...sentence].forEach((character, index) => {
    setTimeout(() => {
      document.querySelector(element).textContent += character;
    }, 150 * ++index);
  });
}

function start(){
  setTimeout(function(){
    typing('#typing', 'Portfolio_ShoShinoda_');
  },500)
}

function close(){
    $('aside').animate({width:"15vw"},600,'jswing');
    $('.ecWorkImg').fadeOut(800);
    $('.ecWorkCap').fadeOut(800);
   $('.bblWorkImg').fadeOut(800);
   $('.bblWorkCap').fadeOut(800);
   $('.nohWorkImg').fadeOut(800);
   $('.nohWorkCap').fadeOut(800);
    $('.tcWorkImg').fadeOut(800);
    $('.tcWorkCap').fadeOut(800);
   $('.krtWorkImg').fadeOut(800);
   $('.krtWorkCap').fadeOut(800);
   $('.itvWorkImg').fadeOut(800);
   $('.itvWorkCap').fadeOut(800);
   $('.cccWorkImg').fadeOut(800);
   $('.cccWorkCap').fadeOut(800);
    $('.bsWorkImg').fadeOut(800);
    $('.bsWorkCap').fadeOut(800);
   $('.cubWorkImg').fadeOut(800);
   $('.cubWorkCap').fadeOut(800);
   $('.cacWorkImg').fadeOut(800);
   $('.cacWorkCap').fadeOut(800);
    $('.cnWorkImg').fadeOut(800);
    $('.cnWorkCap').fadeOut(800);
    $('.osWorkImg').fadeOut(800);
    $('.osWorkCap').fadeOut(800);
   $('.tdcWorkImg').fadeOut(800);
   $('.tdcWorkCap').fadeOut(800);
    isChanging=true;
    isWorkViewing=false;
    setTimeout(function(){
      $('#asideImg').fadeIn(800);
    },500)
    console.log("close");
}


time=setInterval(asideMove,50);
scroll = $(this).scrollTop();
start();



