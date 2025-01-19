document.addEventListener("DOMContentLoaded", function () {
    const imagePath = "/assets/pages/"; // 图片目录
    const totalImages = 9; // 图片数量，从 page_1.jpg 到 page_9.jpg
    const images = Array.from({ length: totalImages }, (_, i) => `page_${i + 1}.jpg`); // 动态生成文件名

    const indicatorsContainer = document.querySelector(".carousel-indicators");
    const carouselInner = document.querySelector(".carousel-inner");

    // 动态生成指示器和轮播项
    images.forEach((image, index) => {
        // 创建指示器
        const indicator = document.createElement("li");
        indicator.setAttribute("data-target", "#carouselExampleIndicators");
        indicator.setAttribute("data-slide-to", index);
        if (index === 0) indicator.classList.add("active");
        indicatorsContainer.appendChild(indicator);

        // 创建轮播项
        const carouselItem = document.createElement("div");
        carouselItem.classList.add("carousel-item");
        if (index === 0) carouselItem.classList.add("active");

        // 创建图片元素
        const imgElement = document.createElement("img");
        imgElement.src = `${imagePath}${image}`;
        imgElement.classList.add("d-block", "w-100"); // Bootstrap 样式
        imgElement.alt = `Slide ${index + 1}`; // 图片的可访问性描述

        // 将图片添加到轮播项
        carouselItem.appendChild(imgElement);
        carouselInner.appendChild(carouselItem);
    });
});