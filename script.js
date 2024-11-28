function loadPage(pageId) {
    const pageContent = document.getElementById('page-content');

    // 使用 Fetch API 动态加载不同的 HTML 页面
    fetch(`pages/${pageId}.html`)
        .then(response => response.text())
        .then(html => {
            // 插入加载的 HTML 内容到页面
            pageContent.innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading the page:', error);
            pageContent.innerHTML = '<p>Failed to load content.</p>';
        });
}

// 默认加载 home 页
loadPage('home');