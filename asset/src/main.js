
      // nav
      //gnb색상변경
      $('[data-mobile-app-filter-menu] li').click(function () {
        $(this).siblings().removeClass('is-active');
        $('.projectNav').removeClass('activeFlex');
        $(this).addClass('is-active');
      });

      //gnb페이지 변경
      $('.gnb li').eq(0).click(function(){
        $('main').children().removeClass('activePage');
        $('.statusPage').addClass('activePage')
      });
      
      $('.gnb li').eq(1).click(function(){
        $('main').children().removeClass('activePage');
        $('.projectPage').addClass('activePage')
      });
      $('.gnb li').eq(2).click(function(){
        $('main').children().removeClass('activePage');
        $('.skillsPage').addClass('activePage')
      });
      $('.gnb li').eq(3).click(function(){
        $('main').children().removeClass('activePage');
        $('.contactPage').addClass('activePage')
      });

      
      //project sub menu 호출
      $('.gnb li').eq(1).click(function(){
        $('.projectNav').addClass('activeFlex');
        $('main').siblings().removeClass('activePage');
        $('.projectPage').addClass('activePage')
      });
      //project sub menu color change
      $('.projectNav li').click(function () {
        $(this).siblings().removeClass('is-active');
        $(this).addClass('is-active');
      });
      //오른쪽 프레임 명 변경
      $('.projectNav li').click(function () {
        let frameName = $(this).text();
        console.log(frameName);
        $('.frameHeader h4').text(frameName);
      });
      // 프레임 에니메이션
      $('.projectNav li').click(function () {
      });
      //
      $('.projectNav .item01').click(function () {
        $('.project01').siblings().removeClass('activeProject');
        $('.project01').addClass('activeProject');
      });
      $('.projectNav .item02').click(function () {
        $('.project02').siblings().removeClass('activeProject');
        $('.project02').addClass('activeProject');
      });

      //statusPage 

      //changeTitle 
      $('.titleItem').click(function () {
        $(this).siblings().removeClass('equippedTitle');
        $(this).addClass('equippedTitle');
        let txta = $(this).children('.nameTitle').text();
        console.log(txta);
        $('.activeTitle').text(txta);
      });
      //levelUpAnimation
      $({ val : 1 }).animate({ val : 99 }, {
        duration:294000,
        easing:'linear',
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
  
    $('.ht').on({
      'click': function(){
        $('.descTxt').children().removeClass('activeDesc');
        $('.htTxt').addClass('activeDesc');
      },
    });
    $('.js').on({
      'click': function(){
        $('.descTxt').children().removeClass('activeDesc');
        $('.jsTxt').addClass('activeDesc');
      },
    });
    $('.ph').on({
      'click': function(){
        $('.descTxt').children().removeClass('activeDesc');
        $('.phTxt').addClass('activeDesc');
      },
    });
    $('.git').on({
      'click': function(){
        $('.descTxt').children().removeClass('activeDesc');
        $('.gitTxt').addClass('activeDesc');
      },
    });

  //타이핑
  
  const instance = new Typewriter('.taniScript', {
    strings: ['* 둘 다 자고 있다.'],// 출력 단어
    autoStart: true,// 자동 시작
    loop: false, // 반복
    pauseFor:30000
  });
  // 