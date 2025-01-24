$(document).ready(function () {
    $(".card").on("mouseenter", function () {
      // 移除其他卡片的高亮
      $(".card").removeClass("highlight");
      // 给当前悬停的卡片添加高亮
      $(this).addClass("highlight");
    });
  
    $(".card").on("mouseleave", function () {
      // 移除当前卡片的高亮
      $(this).removeClass("highlight");
    });
  });