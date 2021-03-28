var imgSrc=["pen.jpg","shock.jpg","bs.jpg","cac.png","ccc.jpg","cub.jpg","itv.jpg","itv2.jpg","os.png","tdc.png","bbl.png","cn.png","krt.jpg","noh.jpg"];
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
    if(winWidth>480){
      $('aside').animate({width:"85vw"},1200,'jswing');
    }else{
      $('aside').animate({width:"95vw"},1200,'jswing');
    }
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
    if(winWidth>480){
      $('aside').animate({width:"85vw"},1200,'jswing');
    }else{
      $('aside').animate({width:"95vw"},1200,'jswing');
    }
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
    if(winWidth>480){
      $('aside').animate({width:"85vw"},1200,'jswing');
    }else{
      $('aside').animate({width:"95vw"},1200,'jswing');
    }
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
    if(winWidth>480){
      $('aside').animate({width:"85vw"},1200,'jswing');
    }else{
      $('aside').animate({width:"95vw"},1200,'jswing');
    }
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
    if(winWidth>480){
      $('aside').animate({width:"85vw"},1200,'jswing');
    }else{
      $('aside').animate({width:"95vw"},1200,'jswing');
    }
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
    if(winWidth>480){
      $('aside').animate({width:"85vw"},1200,'jswing');
    }else{
      $('aside').animate({width:"95vw"},1200,'jswing');
    }
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
    if(winWidth>480){
      $('aside').animate({width:"85vw"},1200,'jswing');
    }else{
      $('aside').animate({width:"95vw"},1200,'jswing');
    }
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
    if(winWidth>480){
      $('aside').animate({width:"85vw"},1200,'jswing');
    }else{
      $('aside').animate({width:"95vw"},1200,'jswing');
    }
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
    if(winWidth>480){
      $('aside').animate({width:"85vw"},1200,'jswing');
    }else{
      $('aside').animate({width:"95vw"},1200,'jswing');
    }
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
    if(winWidth>480){
      $('aside').animate({width:"85vw"},1200,'jswing');
    }else{
      $('aside').animate({width:"95vw"},1200,'jswing');
    }
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
    if(winWidth>480){
      $('aside').animate({width:"85vw"},1200,'jswing');
    }else{
      $('aside').animate({width:"95vw"},1200,'jswing');
    }
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
    if(winWidth>480){
      $('aside').animate({width:"85vw"},1200,'jswing');
    }else{
      $('aside').animate({width:"95vw"},1200,'jswing');
    }
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
    if(winWidth>480){
      $('aside').animate({width:"85vw"},1200,'jswing');
    }else{
      $('aside').animate({width:"95vw"},1200,'jswing');
    }
    isChanging=false;
    isWorkViewing=true;
    console.log("workClick");
    setTimeout(function(){
      $('.tdcWorkImg').fadeIn(800);
      $('.tdcWorkCap').fadeIn(800);
    },1200)
  });

  $(".back").on('click',function(){
    close();
    asideElm.src="image/aside/"+asideChoice();
    time=setInterval(asideMove,50);
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
  if(winWidth>480){
    $('aside').animate({width:"15vw"},800,'jswing');
  }else{
    $('aside').animate({width:"0"},800,'jswing');
  }
    $('.ecWorkImg').fadeOut(300);
    $('.ecWorkCap').fadeOut(300);
   $('.bblWorkImg').fadeOut(300);
   $('.bblWorkCap').fadeOut(300);
   $('.nohWorkImg').fadeOut(300);
   $('.nohWorkCap').fadeOut(300);
    $('.tcWorkImg').fadeOut(300);
    $('.tcWorkCap').fadeOut(300);
   $('.krtWorkImg').fadeOut(300);
   $('.krtWorkCap').fadeOut(300);
   $('.itvWorkImg').fadeOut(300);
   $('.itvWorkCap').fadeOut(300);
   $('.cccWorkImg').fadeOut(300);
   $('.cccWorkCap').fadeOut(300);
    $('.bsWorkImg').fadeOut(300);
    $('.bsWorkCap').fadeOut(300);
   $('.cubWorkImg').fadeOut(300);
   $('.cubWorkCap').fadeOut(300);
   $('.cacWorkImg').fadeOut(300);
   $('.cacWorkCap').fadeOut(300);
    $('.cnWorkImg').fadeOut(300);
    $('.cnWorkCap').fadeOut(300);
    $('.osWorkImg').fadeOut(300);
    $('.osWorkCap').fadeOut(300);
   $('.tdcWorkImg').fadeOut(300);
   $('.tdcWorkCap').fadeOut(300);
    isChanging=true;
    isWorkViewing=false;
    setTimeout(function(){
      $('#asideImg').fadeIn(800);
    },500)
    console.log("close");
}


time=setInterval(asideMove,50);
scroll = $(this).scrollTop();
window.onload = function() {
  start();
}



