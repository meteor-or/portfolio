
      // nav
      //gnb색상변경
      $("[data-mobile-app-filter-menu] li").click(function () {
        $(this).siblings().removeClass("is-active");
        $(".projectNav").removeClass("activeFlex");
        $(this).addClass("is-active");
      });

      //gnb페이지 변경
      $(".gnb li").eq(0).click(function(){
        $("main").children().removeClass("activePage");
        $(".statusPage").addClass("activePage")
      });
      
      $(".gnb li").eq(1).click(function(){
        $("main").children().removeClass("activePage");
        $(".projectPage").addClass("activePage")
      });
      $(".gnb li").eq(2).click(function(){
        $("main").children().removeClass("activePage");
        $(".skillsPage").addClass("activePage")
      });
      $(".gnb li").eq(3).click(function(){
        $("main").children().removeClass("activePage");
        $(".contactPage").addClass("activePage")
      });

      
      //project sub menu 호출
      $(".gnb li").eq(1).click(function(){
        $(".projectNav").addClass("activeFlex");
        $("main").siblings().removeClass("activePage");
        $(".projectPage").addClass("activePage")
      });
      //project sub menu color change
      $(".projectNav li").click(function () {
        $(this).siblings().removeClass("is-active");
        $(this).addClass("is-active");
      });
      //오른쪽 프레임 명 변경
      $(".projectNav li").click(function () {
        let frameName = $(this).text();
        $(".frameHeader h4").text(frameName);
      });
      // // activeProjectNav
      
      $(".projectNav .item01").click(function () {
        $(".process").addClass("activeProject");
        $(".githubLink").text("과정보기(노션)")
        $(".process").css("display","block")
      });
      $(".projectNav .item02").click(function () {
        $(".process").removeClass("activeProject");
        $(".githubLink").text("코드보기")
        $(".process").css("display","none")
      });
      $(".projectNav .item03").click(function () {
        $(".process").removeClass("activeProject");
        $(".githubLink").text("코드보기")
        $(".process").css("display","none")
      });


//프레임 창모드 전체화면

$(".windowedMode").on("click",function(){
  $(".frame").toggleClass("fullmode");
  $(".projectPage .leftSection").toggleClass("displayNone");
});
// 돌아가는 텍스트"

$.each($(".ezkorry-roller"), function(index, item) {

  const wrapper = $("<div />", { class:"ezkorry-roller-wrapper"});
  const roller = $(item);
  roller.append(wrapper);
  const span = roller.find("span").first();
  wrapper.append(span);
  const span_width = span.get(0).offsetWidth;
  const max_width = roller.width() + span_width;
  let inner_width = span_width;

  while(max_width > inner_width) {
  wrapper.append(span.clone());
  inner_width += span_width;
  }

  anime({
  targets: wrapper.get(0),
  translateX: {
    value: "-=" + span_width + "px",
    duration: 6000
  },
  loop: true,
  easing: "linear"
  });
});

// // json으로 프로젝트 컨텐츠 넣기
$.ajax({
  url: "project.json",
  dataType: "json",
  success : function(data){
    let hashtag = data[0].hashtag;
    let descOfContribution = data[0].descOfContribution;
    let descOfDetail = data[0].descOfDetail;
    let descOfProcess = data[0].descOfProcess;
    let descOfReview = data[0].descOfReview;
    let siteUrl = data[0].siteUrl;
    let gitUrl = data[0].gitUrl;

    //새로넣기
    $(".hashtag span").text(hashtag);
    $(".descOfContribution").text(descOfContribution);
    for ( let j = 0; j <= descOfDetail.length -1; j++ ){
      $(".descOfDetail ul").append("<li>"+descOfDetail[j]+"</li>");
    }
    for ( let j = 0; j <= descOfReview.length -1; j++ ){
      $(".descOfReview ul").append("<li>"+descOfReview[j]+"</li>");
    }
    for ( let j = 0; j <= descOfProcess.length -1; j++ ){
      $(".descOfProcess ul").append("<li>"+descOfProcess[j]+"</li>");
    }
    $(".siteLink").attr({href:siteUrl});
    $(".githubLink").attr({href:gitUrl});
    $(".contentInnerFrame").attr({src:siteUrl});
    }
  });

  
// 메뉴 클릭시 json으로 컨텐츠 내용 바꾸기
  let subNavlength = $(".projectNavItem").length

  for ( let i = 0; i <= subNavlength; i++) {
    $(".projectNavItem").eq(i).click(function(){
      $.ajax({
        url: "project.json",
        dataType: "json",
        success : function(data){
          if(data.length>0){
              let hashtag = data[i].hashtag;
              let descOfContribution = data[i].descOfContribution;
              let descOfDetail = data[i].descOfDetail;
              let descOfReview = data[i].descOfReview;
              let descOfProcess = data[i].descOfProcess;
              let siteUrl = data[i].siteUrl;
              let gitUrl = data[i].gitUrl;
      
              // 이전꺼 지우기
              $(".hashtag span").text();
              $(".descOfContribution").text();
              $(".descOfDetail ul").empty();
              $(".descOfReview ul").empty();
              $(".descOfProcess ul").empty();
              //새로넣기
              // function appendTxt(nameOfKey) {
              //   for ( let j = 0; j <= nameOfKey.length -1; j++ ){
              //     $(`.${nameOfKey} ul`).append("<li>"+nameOfKey[j]+"</li>");
              //   }
              // }
              // appendTxt(descOfDetail); 왜 안되는데...

              $(".hashtag span").text(hashtag);
              $(".descOfContribution").text(descOfContribution);
              for ( let j = 0; j <= descOfDetail.length -1; j++ ){
                $(".descOfDetail ul").append("<li>"+descOfDetail[j]+"</li>");
              }
              for ( let j = 0; j <= descOfReview.length -1; j++ ){
                $(".descOfReview ul").append("<li>"+descOfReview[j]+"</li>");
              }
              for ( let j = 0; j <= descOfProcess.length -1; j++ ){
                $(".descOfProcess ul").append("<li>"+descOfProcess[j]+"</li>");
              }
              $(".siteLink").attr({href:siteUrl});
              $(".githubLink").attr({href:gitUrl});
              $(".contentInnerFrame").attr({src:siteUrl});

            };
          }
        });
      });
    };

      //statusPage 

      //changeTitle 
      $(".titleItem").click(function () {
        $(this).siblings().removeClass("equippedTitle");
        $(this).addClass("equippedTitle");
        let title = $(this).children(".nameTitle").text();
        $(".activeTitle").text(title);
        $(".titleBox").text(title);
        
      });
      //levelUpAnimation
      $({ val : 1 }).animate({ val : 99 }, {
        duration:294000,
        easing:"linear",
        step: function() {
          let num = numberWithCommas(Math.floor(this.val));
          $(".levelNum").text(num);
        },
        complete: function() {
          let num = numberWithCommas(Math.floor(this.val));
          $(".levelNum").text(num);
        }
      });
      function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
      
  //changeDescriptionEvent
  
    $(".ht").on({
      "click": function(){
        $(".descTxt").children().removeClass("activeDesc");
        $(".htTxt").addClass("activeDesc");
      },
    });
    $(".js").on({
      "click": function(){
        $(".descTxt").children().removeClass("activeDesc");
        $(".jsTxt").addClass("activeDesc");
      },
    });
    $(".ph").on({
      "click": function(){
        $(".descTxt").children().removeClass("activeDesc");
        $(".phTxt").addClass("activeDesc");
      },
    });
    $(".git").on({
      "click": function(){
        $(".descTxt").children().removeClass("activeDesc");
        $(".gitTxt").addClass("activeDesc");
      },
    });

  //타이핑
  
  const instance = new Typewriter(".taniScript", {
    strings: ["* 둘 다 자고 있다."],// 출력 단어
    autoStart: true,// 자동 시작
    loop: false, // 반복
    pauseFor:30000
  });
  //button
  //
// ---Retro Button---
//
let buttons = document.querySelectorAll(".btn");

for(let i = 0; i < buttons.length; i++) {
  // Click
  buttons[i].addEventListener("mousedown", function() {
    this.classList.add("btn-active");
  });
  buttons[i].addEventListener("mouseup", function() {
    this.classList.remove("btn-active");
  });

  // Hover
  buttons[i].addEventListener("mouseleave", function() {
    this.classList.remove("btn-center", "btn-right", "btn-left", "btn-active");
  });

  buttons[i].addEventListener("mousemove", function(e) {
    let leftOffset = this.getBoundingClientRect().left;
    let btnWidth = this.offsetWidth;
    let myPosX = e.pageX;
    let newClass = "";
    // if on left 1/3 width of btn
    if(myPosX < (leftOffset + .3 * btnWidth) ) {
      newClass = "btn-left"
    } else {
      // if on right 1/3 width of btn
      if(myPosX > (leftOffset + .65 * btnWidth) ) {
        newClass = "btn-right";
      } else {
        newClass = "btn-center";
      }
    }
    // remove prev class
    let clearedClassList = this.className.replace(/btn-center|btn-right|btn-left/gi, "").trim();
    this.className = clearedClassList + " " + newClass;
  });
}


//
// // ---Retro Submit Button---
// //
// let pButton = document.querySelector(".loader-button");

// // Click
// pButton.addEventListener("mousedown", function() {
//   this.classList.add("btn-active");
// });
// pButton.addEventListener("mouseup", function() {
//   this.classList.remove("btn-active");
// });


// // Classie Helper Functions
// // https://github.com/desandro/classie

// function classReg( className ) {
//   return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
// }

// // classList support for class management
// // altho to be fair, the api sucks because it won"t accept multiple classes at once
// let hasClass, addClass, removeClass;

// if ( "classList" in document.documentElement ) {
//   hasClass = function( elem, c ) {
//     return elem.classList.contains( c );
//   };
//   addClass = function( elem, c ) {
//     elem.classList.add( c );
//   };
//   removeClass = function( elem, c ) {
//     elem.classList.remove( c );
//   };
// }
// else {
//   hasClass = function( elem, c ) {
//     return classReg( c ).test( elem.className );
//   };
//   addClass = function( elem, c ) {
//     if ( !hasClass( elem, c ) ) {
//       elem.className = elem.className + " " + c;
//     }
//   };
//   removeClass = function( elem, c ) {
//     elem.className = elem.className.replace( classReg( c ), " " );
//   };
// }

// function toggleClass( elem, c ) {
//   let fn = hasClass( elem, c ) ? removeClass : addClass;
//   fn( elem, c );
// }

// let classie = {
//   // full names
//   hasClass: hasClass,
//   addClass: addClass,
//   removeClass: removeClass,
//   toggleClass: toggleClass,
//   // short names
//   has: hasClass,
//   add: addClass,
//   remove: removeClass,
//   toggle: toggleClass
// };

// // transport
// if ( typeof define === "function" && define.amd ) {
//   // AMD
//   define( classie );
// } else {
//   // browser global
//   window.classie = classie;
// }


// // Loader Progress Functionality

// function extend( a, b ) {
//   for( let key in b ) { 
//     if( b.hasOwnProperty( key ) ) {
//       a[key] = b[key];
//     }
//   }
//   return a;
// }

// function LoaderButton( el, options ) {
//   this.button = el;
//   this.options = extend( {}, this.options );
//   extend( this.options, options );
//   this._init();
// }

// LoaderButton.prototype.options = {
//   statusTime : 1500
// };

// LoaderButton.prototype._init = function() {
//   this._create();
//   this._initEvents();
// };

// LoaderButton.prototype._create = function() {
//   let textEl = document.createElement( "span" );
//   textEl.className = "content";
//   textEl.innerHTML = this.button.innerHTML;
//   let progressEl = document.createElement( "span" );
//   progressEl.className = "progress";
  
//   let progressInnerEl = document.createElement( "span" );
//   progressInnerEl.className = "progress-inner";
//   progressEl.appendChild( progressInnerEl );
  
//   this.button.innerHTML = "";

//   this.button.appendChild( textEl );
//   this.button.appendChild( progressEl );

//   // element for progress bar
//   this.progress = progressInnerEl;

//   this.progressProp = "width";
//   this._enable();
// };

// LoaderButton.prototype._setProgress = function( val ) {
//   this.progress.style[ this.progressProp ] = 100 * val + "%";
// };

// LoaderButton.prototype._initEvents = function() {
//   let self = this;
//   this.button.addEventListener( "click", function() {
//     // disable button
//     self.button.setAttribute( "disabled", "" );
//     // add class state-loading to button
//     classie.remove( self.progress, "notransition" );
//     classie.add( this, "state-loading" );

//     setTimeout( function() {
//       if( typeof self.options.callback === "function" ) {
//         self.options.callback( self );
//       }
//       else {
//         self._setProgress( 1 );
//         let onEndTransFn = function( ev ) {
//           if( ev.propertyName !== self.progressProp ) { 
//             return; 
//           }
//           this.removeEventListener( "transitionend", onEndTransFn );
//           self._stop();
//         };

//         self.progress.addEventListener( "transitionend", onEndTransFn );
//       }
//     }, 
//     200 ); // 200ms timeout
//   } );
// };

// LoaderButton.prototype._stop = function( status ) {
//   let self = this;

//   setTimeout( function() {
//     // fade out progress bar
//     self.progress.style.opacity = 0;
//     let onEndTransFn = function( ev ) {
//       if( ev.propertyName !== "opacity" ) return;
//       this.removeEventListener( "transitionend", onEndTransFn );
//       classie.add( self.progress, "notransition" );
//       self.progress.style[ self.progressProp ] = "0%";
//       self.progress.style.opacity = 1;
//     };
    
//     self.progress.addEventListener( "transitionend", onEndTransFn );
    
//     // add class state-success to button
//     if( typeof status === "number" ) {
//       let statusClass = status >= 0 ? "state-success" : "state-error";
//       classie.add( self.button, statusClass );
//       // after options.statusTime remove status icon
//       setTimeout( function() {
//         classie.remove( self.button, statusClass );
//         self._enable();
//       }, self.options.statusTime );
//     }
//     else {
//       self._enable();
//     }

//     // remove class state-loading from the button
//     classie.remove( self.button, "state-loading" );
//   }, 100 );
// };
