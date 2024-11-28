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

// 给每个菜单项绑定点击事件
document.querySelector('.menu-item-home').addEventListener('click', function() {
    loadPage('home'); // 传入对应的页面ID（如 'home'）
});

document.querySelector('.menu-item-platforms').addEventListener('click', function() {
    loadPage('platforms');
});

document.querySelector('.menu-item-rules').addEventListener('click', function() {
    loadPage('rules');
});