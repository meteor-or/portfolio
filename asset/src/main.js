// nav
//gnb색상변경
$("[data-mobile-app-filter-menu] li").click(function () {
  $(this).siblings().removeClass("is-active");
  $(".projectNav").removeClass("activeFlex");
  $(this).addClass("is-active");
});

//gnb페이지 변경
$(".gnb li")
  .eq(0)
  .click(function () {
    $("main").children().removeClass("activePage");
    $(".statusPage").addClass("activePage");
  });

$(".gnb li")
  .eq(1)
  .click(function () {
    $("main").children().removeClass("activePage");
    $(".projectPage").addClass("activePage");
  });
$(".gnb li")
  .eq(2)
  .click(function () {
    $("main").children().removeClass("activePage");
    $(".skillsPage").addClass("activePage");
  });
$(".gnb li")
  .eq(3)
  .click(function () {
    $("main").children().removeClass("activePage");
    $(".contactPage").addClass("activePage");
  });

//project sub menu 호출
$(".gnb li")
  .eq(1)
  .click(function () {
    $(".projectNav").addClass("activeFlex");
    $("main").siblings().removeClass("activePage");
    $(".projectPage").addClass("activePage");
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

//프레임 창모드 전체화면

$(".windowedMode").on("click", function () {
  $(".frame").toggleClass("fullmode");
  $(".projectPage .leftSection").toggleClass("displayNone");
  if ($(".frame").hasClass("moblie__mode") === true) {
    alert("모바일 모드를 해제하고 눌러주세요!");
    $(".frame").removeClass("fullmode");
    $(".projectPage .leftSection").removeClass("displayNone");
  }
});
$(".mobileBtn").on("click", function () {
  $(".frame").toggleClass("moblie__mode");
  if ($(".frame").hasClass("fullmode") === true) {
    alert("전체화면 모드를 해제하고 눌러주세요!");
    $(".frame").removeClass("moblie__mode");
  }
});

// json으로 프로젝트 컨텐츠 넣기
$.ajax({
  url: "project.json",
  dataType: "json",
  success: function (data) {
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
    for (let j = 0; j <= descOfDetail.length - 1; j++) {
      $(".descOfDetail ul").append("<li>" + descOfDetail[j] + "</li>");
    }
    for (let j = 0; j <= descOfReview.length - 1; j++) {
      $(".descOfReview ul").append("<li>" + descOfReview[j] + "</li>");
    }
    if (descOfProcess !== "") {
      for (let j = 0; j <= descOfProcess.length - 1; j++) {
        $(".descOfProcess ul").append("<li>" + descOfProcess[j] + "</li>");
      }
    } else {
      $(".process").css("display", "none");
    }
    $(".siteLink").attr({ href: siteUrl });
    $(".githubLink").attr({ href: gitUrl });
    $(".contentInnerFrame").attr({ src: siteUrl });
  },
});

// 메뉴 클릭시 json으로 컨텐츠 내용 바꾸기
let subNavlength = $(".projectNavItem").length;

for (let i = 0; i <= subNavlength; i++) {
  $(".projectNavItem")
    .eq(i)
    .click(function () {
      $.ajax({
        url: "project.json",
        dataType: "json",
        success: function (data) {
          if (data.length > 0) {
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

            $(".hashtag span").text(hashtag);
            $(".descOfContribution").text(descOfContribution);
            for (let j = 0; j <= descOfDetail.length - 1; j++) {
              $(".descOfDetail ul").append("<li>" + descOfDetail[j] + "</li>");
            }
            for (let j = 0; j <= descOfReview.length - 1; j++) {
              $(".descOfReview ul").append("<li>" + descOfReview[j] + "</li>");
            }
            for (let j = 0; j <= descOfProcess.length - 1; j++) {
              $(".descOfProcess ul").append(
                "<li>" + descOfProcess[j] + "</li>"
              );
            }
            $(".siteLink").attr({ href: siteUrl });
            $(".githubLink").attr({ href: gitUrl });
            $(".contentInnerFrame").attr({ src: siteUrl });
          }
        },
      });
    });
}

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
$({ val: 1 }).animate(
  { val: 99 },
  {
    duration: 294000,
    easing: "linear",
    step: function () {
      let num = numberWithCommas(Math.floor(this.val));
      $(".levelNum").text(num);
    },
    complete: function () {
      let num = numberWithCommas(Math.floor(this.val));
      $(".levelNum").text(num);
    },
  }
);
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//changeDescriptionEvent

$(".ht").on({
  click: function () {
    $(".descTxt").children().removeClass("activeDesc");
    $(".htTxt").addClass("activeDesc");
  },
});
$(".js").on({
  click: function () {
    $(".descTxt").children().removeClass("activeDesc");
    $(".jsTxt").addClass("activeDesc");
  },
});
$(".ph").on({
  click: function () {
    $(".descTxt").children().removeClass("activeDesc");
    $(".phTxt").addClass("activeDesc");
  },
});
$(".git").on({
  click: function () {
    $(".descTxt").children().removeClass("activeDesc");
    $(".gitTxt").addClass("activeDesc");
  },
});
$(".react").on({
  click: function () {
    $(".descTxt").children().removeClass("activeDesc");
    $(".reactTxt").addClass("activeDesc");
  },
});
//타이핑

const instance = new Typewriter(".taniScript", {
  strings: ["* 둘 다 자고 있다."], // 출력 단어
  autoStart: true, // 자동 시작
  loop: false, // 반복
  pauseFor: 30000,
});
//button
//
// ---Retro Button---
//
let buttons = document.querySelectorAll(".btn");

for (let i = 0; i < buttons.length; i++) {
  // Click
  buttons[i].addEventListener("mousedown", function () {
    this.classList.add("btn-active");
  });
  buttons[i].addEventListener("mouseup", function () {
    this.classList.remove("btn-active");
  });

  // Hover
  buttons[i].addEventListener("mouseleave", function () {
    this.classList.remove("btn-center", "btn-right", "btn-left", "btn-active");
  });

  buttons[i].addEventListener("mousemove", function (e) {
    let leftOffset = this.getBoundingClientRect().left;
    let btnWidth = this.offsetWidth;
    let myPosX = e.pageX;
    let newClass = "";
    // if on left 1/3 width of btn
    if (myPosX < leftOffset + 0.3 * btnWidth) {
      newClass = "btn-left";
    } else {
      // if on right 1/3 width of btn
      if (myPosX > leftOffset + 0.65 * btnWidth) {
        newClass = "btn-right";
      } else {
        newClass = "btn-center";
      }
    }
    // remove prev class
    let clearedClassList = this.className
      .replace(/btn-center|btn-right|btn-left/gi, "")
      .trim();
    this.className = clearedClassList + " " + newClass;
  });
}
