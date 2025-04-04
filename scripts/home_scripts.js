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
      left: "calc(16.86vw)",
      img: "assets/img/AMD Austin Campus.jpg"
  },
  {
      main: "Outstanding Works",
      sub: "Discover groundbreaking solutions and cutting-edge designs",
      left: "calc(16.86vw + 3.34vw)",
      img: "assets/img/AMD Shanghai.jpg"
  },
  {
    main: "Recommended Platforms",
      sub: "Ryzen AI, selected AMD GPUS, and the following Academic boards, Alveo and partner platforms are recommended.",
      left: "calc(16.86vw + 6.68vw)",
      img: "assets/img/1119936_Raphael_02_0036_4K.png"
  }
];


let currentIndex = 0; 
window.onload = function() {
  // 元素选择器
  const textMain = document.getElementById("text-main");
  const textSub = document.getElementById("text-sub");
  const borderFg = document.getElementById("border-fg");
  const sliderImg = document.getElementById("slider-img");  // 图片元素选择器

  // 更新内容和线位置的函数
  function updateContent() {
    textMain.textContent = contents[currentIndex].main;
    textSub.textContent = contents[currentIndex].sub;
    borderFg.style.left = contents[currentIndex].left;
    sliderImg.src = contents[currentIndex].img;  // 更新图片路径
    sliderImg.style.opacity = 0;  // 淡出效果
    setTimeout(() => {
      sliderImg.style.opacity = 1;  // 淡入效果
    }, 100);
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

  // 初始化内容
  updateContent();
};


const faqAnswers = {
  "faq-0": `
      <h4>Global Competition</h4>
      <p><strong>New for 2025 - Open Hardware is now global!</strong> Participants from all around the world are welcome to participate.</p>
  `,
  "faq-1": `
      <h4>Tracks</h4>
      <ul>
          <li><strong>Adaptive Computing:</strong> Explore the power of FPGAs, Zynq, Zynq Ultrascale+, RFSoC, and Versal.</li>
          <li><strong>Coming soon - Accelerated Computing:</strong> Unleash the potential of AMD ROCm-supported Ryzen AI and Radeon/Instinct GPUs.</li>
      </ul>
      
  `,
  "faq-2":`
    <h4>Two Levels</h4>
      <ul>
          <li><strong>Student:</strong> Undergraduates</li>
          <li><strong>PhD:</strong> PhD candidates</li>
      </ul>
      <p>Enter individually or in teams of up to five people.</p>
  `,
  "faq-3": `
      <h4>Key Dates</h4>
      <ul>
          <li><strong>Register by:</strong> 31 March 2025</li>
          <li><strong>Submit your entry by:</strong> 31 August 2025</li>
      </ul>
  `,
  "faq-4": `
      <h4>Explore Past Successes</h4>
      <p >
          The 2024 edition of the competition is now over. Please see the <a href="results.html?year=2024" class="link">Results</a> page to see a gallery of the 2024 winners and finalists.
      </p>
  `,
  "faq-5": `
      <h4>Ready to Participate?</h4>
      <p>For detailed rules, eligibility criteria, and any questions, please visit our dedicated <a href="adaptive-computing.html" class="link">Rules</a>.</p>
  `
};


function toggleSelected(element) {
    // 移除其他选中的 .faq-item
    document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== element) {
            item.classList.remove('selected');
        }
    });

    // 切换当前点击的项的选中状态
    element.classList.toggle('selected');

    // 获取当前点击项的 data-id
    const faqId = element.getAttribute('data-id');
    const ansElement = document.getElementById("ans");

    // 手动控制淡出
    ansElement.style.transition = "opacity 0.3s";
    ansElement.style.opacity = 0;  // 先淡出

    setTimeout(() => {
        // 更新内容
        ansElement.innerHTML = faqAnswers[faqId] || "<p>Select a question to see the answer here.</p>";
        
        // 手动触发淡入
        ansElement.style.transition = "opacity 0.5s";  // 设置淡入速度
        ansElement.style.opacity = 1;                  // 淡入效果
    }, 300);  // 300ms 与淡出速度一致，确保内容更新时已完全淡出
}
