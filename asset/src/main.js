

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

      //walking tani
      $('.statusPage img[alt="tani"]').animate({marginLeft:-200},3000)
      
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
          var num = numberWithCommas(Math.floor(this.val));
          $(".levelNum").text(num);
        },
        complete: function() {
          var num = numberWithCommas(Math.floor(this.val));
          $(".levelNum").text(num);
        }
      });
    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }