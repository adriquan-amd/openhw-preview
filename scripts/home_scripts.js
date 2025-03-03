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
      main: "Outstanding Works",
      sub: "Discover groundbreaking solutions and cutting-edge designs",
      left: "calc(14.86vw + 3.34vw)"
  },
  {
    main: "Outstanding Works",
      sub: "Discover groundbreaking solutions and cutting-edge designs",
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

  let lastScrollTop = 0;  // 记录上一次滚动位置
let currentSection = 0;  // 当前显示的 section (0, 1, 2)

const sections = [
    document.getElementById("section0"),
    document.getElementById("section1"),
    document.getElementById("section2")
];

window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;  // 当前滚动的像素值
    const windowHeight = window.innerHeight;

    // 计算滚动的相对 vh 值
    const scrollVh = currentScroll / windowHeight * 100;

    // 判断滚动方向: true 表示下滑, false 表示上滑
    const isScrollingDown = currentScroll > lastScrollTop;

    // 根据滚动方向和滚动位置切换 section
    if (isScrollingDown) {  // 下滑
        if (scrollVh >= 10 && currentSection === 0) {
            currentSection = 1;  // 切换到 section1
            sections[1].scrollIntoView({ behavior: "smooth" });
        } else if (scrollVh >= 110 && currentSection === 1) {
            currentSection = 2;  // 切换到 section2
            sections[2].scrollIntoView({ behavior: "smooth" });
        }
    } else {  // 上滑
        if (scrollVh < 190 && currentSection === 2) {
            currentSection = 1;  // 切换回 section1
            sections[1].scrollIntoView({ behavior: "smooth" });
        } else if (scrollVh < 90 && currentSection === 1) {
            currentSection = 0;  // 切换回 section0
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }

    // 更新上一次的滚动位置
    lastScrollTop = currentScroll;
});
}


