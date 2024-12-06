const urlParams = new URLSearchParams(window.location.search);
const year = urlParams.get('year');  // 获取 URL 中的 'year' 参数
const yearElement = document.getElementById('year-placeholder');

// 将当前年份填充到该元素
yearElement.textContent = year + " RESULTS";

document.addEventListener("DOMContentLoaded", async () => {
    try {
        // 1. Get the 'year' parameter from the URL
        const urlParams = new URLSearchParams(window.location.search);
        const year = urlParams.get("year");

        if (year) {
            // Construct file names
            const fileNameEU = "assets/results/europe/"+`${year}.json`;
            //const fileNameAPAC = "assets/results/APAC/"+`${year}.json`;
            const fileNameAPAC = ""

            console.log(`Loading JSON files: ${fileNameEU}, ${fileNameAPAC}`);

            // 2. Fetch JSON files with error handling
            let jsonDataEU = "";
            let jsonDataAPAC = "";

            try {
                const responseEU = await fetch(fileNameEU);
                if (responseEU.ok) {
                    jsonDataEU = await responseEU.json();
                    renderProjects_eu(jsonDataEU)
                } else {
                    console.warn(`Failed to load ${fileNameEU}: ${responseEU.statusText}`);
                }
            } catch (err) {
                console.warn(`Error fetching ${fileNameEU}:`, err);
            }

            try {
                const responseAPAC = await fetch(fileNameAPAC);
                if (responseAPAC.ok) {
                    jsonDataAPAC = await responseAPAC.json();
                } else {
                    console.warn(`Failed to load ${fileNameAPAC}: ${responseAPAC.statusText}`);
                }
            } catch (err) {
                console.warn(`Error fetching ${fileNameAPAC}:`, err);
            }



        } else {
            console.error("Year parameter is missing in the URL.");
        }
    } catch (error) {
        console.error("Error loading JSON:", error);
    }
});



document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab");

    // Add click event listener to all tabs
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove("active"));

            // Add active class to the clicked tab
            tab.classList.add("active");

            // Execute logic based on the active tab
            const activeTabId = tab.id; // Get the ID of the active tab
            handleTabChange(activeTabId);
        });
    });
});

/**
 * Handles logic based on the active tab ID.
 * @param {string} tabId - The ID of the active tab.
 */
function handleTabChange(tabId) {
    switch (tabId) {
        case "tab-eu":
            console.log("Europe tab is active!");
            renderProjects_eu(jsonData);
            break;
        case "tab-apac":
            console.log("APAC tab is active!");
            // Add your logic for the "APAC" tab here
            renderProjects(jsonDataAPAC);
            break;
        default:
            console.log("Unknown tab is active!");
            break;
    }
}

/**
 * Renders project cards in the main container based on the given data.
 * @param {Array} data - Array of project data.
 */
function renderProjects_eu(data) {
    if (data === null || !Array.isArray(data)) return;

    // Get the project container
    const projectsContainer = document.getElementsByClassName('main-container')[0];

    // Clear existing content
    projectsContainer.innerHTML = "";

    // Iterate over the data and create project cards
    data.forEach(project => {
        if (project === null) return;

        // Create parent div
        const colDiv = document.createElement('div');
        colDiv.classList.add('col-md-6', 'col-lg-4'); // Using Bootstrap's column classes

        // Create project card container
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('card', 'shadow-lg', 'border-0', 'mb-4');

        // Create video element (replacing image with video)
        const videoDiv = document.createElement('div');
        videoDiv.classList.add('pic');
        const iframe = document.createElement('iframe');
        iframe.src = project.video_url;
        iframe.width = '100%';
        iframe.height = '200'; // Adjust video height
        iframe.frameBorder = '0';
        videoDiv.appendChild(iframe);
        projectDiv.appendChild(videoDiv);

        // Create card content
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        // Create project title
        const title = document.createElement('h5');
        title.classList.add('card-title');
        title.textContent = project.title;
        cardBody.appendChild(title);

        // Create author and supervisor info (new line display)
        const authorInfo = document.createElement('p');
        authorInfo.classList.add('card-text', 'text-muted');
        authorInfo.innerHTML = `${project.authors}<br>(supervisor: ${project.supervisor})`;
        cardBody.appendChild(authorInfo);

        // Create GitHub repository link button
        const button = document.createElement('a');
        button.classList.add('btn', 'btn-dark', 'btn-round');
        button.href = project.project_link;
        button.target = '_blank';
        button.textContent = 'View Repository';
        cardBody.appendChild(button);

        // Add card content to card container
        projectDiv.appendChild(cardBody);

        // Add the complete card to the parent div
        colDiv.appendChild(projectDiv);

        // Append the parent div to the main container
        projectsContainer.appendChild(colDiv);
    });
}