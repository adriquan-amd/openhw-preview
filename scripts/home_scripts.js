$(document).ready(function () {
    $(".card").on("mouseenter", function () {
      // 移除其他卡片的高亮
      $(".card").removeClass("highlight");
      // 给当前悬停的卡片添加高亮
      $(this).addClass("highlight  overlay-black");
      const imgSrc = $(this).find(".card-img").attr("src"); 
      const pdfSrc = imgSrc.replace(".jpg", ".pdf"); 

      if ($(this).find(".hover-btn").length === 0) {
        $(this)
          .find(".card-body")
          .append(`<a href="${pdfSrc}" class="btn btn-outline-white btn-round mt-3 hover-btn" data-aos="slide-up">View</a>`);
      }
    });
  
    $(".card").on("mouseleave", function () {
      // 移除当前卡片的高亮
      $(this).removeClass("highlight overlay-black");
      $(this).find(".hover-btn").remove();
    });
  });