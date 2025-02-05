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


  document.addEventListener("DOMContentLoaded", async function () {
    const container = document.getElementById("grid-container");
    const fileNameEU = "assets/pdf/2024_video.json";

    try {
        const responseEU = await fetch(fileNameEU);
        const data = await responseEU.json();

        data.forEach(item => {
            if (!item.video_url) return; // 确保有视频 URL

            // 创建卡片元素
            const card = document.createElement("div");
            card.className = "card overlay text-white shadow-lg border-0";

            // 创建视频容器
            const videoDiv = document.createElement("div");
            videoDiv.className = "pic";

            // 创建 iframe 作为视频播放器
            const iframe = document.createElement("iframe");
            iframe.style.zIndex = "1000";
            iframe.style.position = "relative";
            iframe.className = "card-img";
            iframe.allowFullscreen = true;
            iframe.setAttribute("allow", "fullscreen");
            iframe.src = item.video_url.replace("watch?v=", "embed/"); // 确保 URL 格式正确
            iframe.frameBorder = "0";
            iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
            iframe.allowFullscreen = true;
            iframe.style.width = "100%";
            iframe.style.height = "200px";

            // 组装卡片
            videoDiv.appendChild(iframe);
            card.appendChild(videoDiv);
            container.appendChild(card);
        });
    } catch (error) {
        console.error("Error loading JSON:", error);
    }
});