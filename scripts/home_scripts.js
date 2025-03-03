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
            if (!item.video_url) return; // Ensure there is a video URL

            // Create card element
            const card = document.createElement("div");
            card.className = "card overlay text-white shadow-lg border-0";

            // Create video container
            const videoDiv = document.createElement("div");
            videoDiv.className = "pic";

            // Create iframe as video player
            const iframe = document.createElement("iframe");
            iframe.style.zIndex = "1000";
            iframe.style.position = "relative";
            iframe.className = "card-img";
            iframe.allowFullscreen = true;
            iframe.setAttribute("allow", "fullscreen");

            // Modify URL to hide controls
            const videoURL = item.video_url;
            iframe.src = videoURL;
            iframe.frameBorder = "0";
            iframe.src = videoURL;
            iframe.frameBorder = "0";
            iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
            iframe.allowFullscreen = true;
            iframe.width = '100%';
            iframe.style.aspectRatio = "16 / 9";

            // Assemble card
            videoDiv.appendChild(iframe);
            card.appendChild(videoDiv);
            container.appendChild(card);
        });
    } catch (error) {
        console.error("Error loading JSON:", error);
    }
});



const contents = [
  {
      main: "Our Latest Competition",
      sub: "Registration is now open for the 2025 Adaptive Computing Track!",
      left: "calc(14.86vw)"
  },
  {
      main: "New Challenges Await",
      sub: "Join us in exploring the latest in adaptive computing!",
      left: "calc(14.86vw + 3.34vw)"
  }
];

let currentIndex = 0; 
window.onload = function() {
  // 元素选择器
  const textMain = document.getElementById("text-main");
  const textSub = document.getElementById("text-sub");
  const borderFg = document.getElementById("border-fg");

  // 更新内容和线位置的函数
  function updateContent() {
    textMain.textContent = contents[currentIndex].main;
    textSub.textContent = contents[currentIndex].sub;
    borderFg.style.left = contents[currentIndex].left;
  }

  // 左箭头点击事件
  document.getElementById("left-arrow").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + contents.length) % contents.length;
    updateContent();
  });

  // 右箭头点击事件
  document.getElementById("right-arrow").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % contents.length;
    updateContent();
  });


}
