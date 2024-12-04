AOS.init();
function loadPage(pageId) {
    const pageContent = document.getElementById('page-content');
    const head = document.head;

    let cssPath = `styles/${pageId}.css`; // 每个页面都有独立的 CSS 文件
    let jsPath = `scripts/${pageId}_scripts.js`; // 每个页面都有独立的 JS 文件

    loadCss(cssPath);

    fetch(`pages/${pageId}.html`)
        .then(response => response.text())
        .then(html => {
            pageContent.innerHTML = html;

            loadScript(jsPath);
        })
        .catch(error => {
            console.error('Error loading the page:', error);
            pageContent.innerHTML = '<p>Failed to load content.</p>';
        });
}


function loadCss(src) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = src;
    document.head.appendChild(link);
}


function loadScript(src) {
    var script = document.createElement('script');
    script.src = src;
    script.type = 'text/javascript';
    script.async = true;
    script.onload = function() {
        console.log(src + ' loaded successfully');
    };
    script.onerror = function() {
        console.error('Error loading script: ' + src);
    };
    document.head.appendChild(script);
}
loadPage('home');

document.querySelector('.menu-item-home').addEventListener('click', function() {
    loadPage('home');
});

document.querySelector('.menu-item-platforms').addEventListener('click', function() {
    loadPage('platforms');

});

document.querySelector('.menu-item-rules').addEventListener('click', function() {
    loadPage('rules');
});

document.querySelector('.menu-item-results').addEventListener('click', function() {
    loadPage('results');
});




