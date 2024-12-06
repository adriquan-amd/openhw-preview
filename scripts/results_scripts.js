const urlParams = new URLSearchParams(window.location.search);
const year = urlParams.get('year');  // 获取 URL 中的 'year' 参数
const yearElement = document.getElementById('year-placeholder');

// 将当前年份填充到该元素
yearElement.textContent = year;
if (year) {
    // 根据 'year' 参数构造 JSON 文件的路径
    const jsonFilePath = `assets/results/europe/${year}.json`;  // 示例：'assets/results/2024.json'

    // 获取 JSON 文件
    fetch(jsonFilePath)
        .then(response => response.json())
        .then(data => {
            if (data === null) return;

            // 获取项目容器
            const projectsContainer = document.getElementsByClassName('main-container')[0];
            console.log(data);

            data.forEach(project => {
                // 创建父级 div
                const colDiv = document.createElement('div');
                colDiv.classList.add('col-md-6', 'col-lg-4');  // 使用 Bootstrap 的列类

                // 创建每个项目的卡片容器
                const projectDiv = document.createElement('div');
                projectDiv.classList.add('card', 'shadow-lg', 'border-0', 'mb-4');

                // 创建视频元素（替换图片为视频）
                const videoDiv = document.createElement('div');
                videoDiv.classList.add('pic');
                const iframe = document.createElement('iframe');
                iframe.src = project.video_url;
                iframe.width = '100%';
                iframe.height = '200';  // 可调整视频高度
                iframe.frameBorder = '0';
                videoDiv.appendChild(iframe);
                projectDiv.appendChild(videoDiv);

                // 创建卡片内容
                const cardBody = document.createElement('div');
                cardBody.classList.add('card-body');

                // 创建项目标题
                const title = document.createElement('h5');
                title.classList.add('card-title');
                title.textContent = project.title;
                cardBody.appendChild(title);

                // 创建作者和导师信息，换行显示
                const authorInfo = document.createElement('p');
                authorInfo.classList.add('card-text', 'text-muted');
                authorInfo.innerHTML = `${project.authors}<br>(supervisor: ${project.supervisor})`;
                cardBody.appendChild(authorInfo);

                // 创建 GitHub 仓库链接按钮
                const button = document.createElement('a');
                button.classList.add('btn', 'btn-dark', 'btn-round');
                button.href = project.project_link;
                button.target = '_blank';
                button.textContent = 'Project REPOSITORY';
                cardBody.appendChild(button);

                // 将卡片内容添加到卡片容器
                projectDiv.appendChild(cardBody);

                // 将整个项目卡片添加到父 div 中
                colDiv.appendChild(projectDiv);

                // 将包含卡片的父 div 添加到主容器中
                projectsContainer.appendChild(colDiv);
            });
        })
        .catch(error => console.error('加载 JSON 数据时出错:', error));
} else {
    console.error('URL 中缺少 year 参数。');
}
