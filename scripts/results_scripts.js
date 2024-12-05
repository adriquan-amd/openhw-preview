const urlParams = new URLSearchParams(window.location.search);
const year = urlParams.get('year');  // Get the 'year' parameter from the URL
if (year) {
    // 2. Construct the JSON file URL based on the 'year' parameter
    const jsonFilePath = `assets/results/${year}.json`;  // Example: 'assets/results/2024.json'

    // 3. Fetch the JSON file based on the year
    fetch(jsonFilePath)
        .then(response => response.json())
        .then(data => {
            // Loop through each project and create corresponding HTML elements
            const projectsContainer = document.getElementsByClassName('main-container')[0];
            console.log(data)
            data.forEach(project => {
                // Create the main container for each project
                const projectDiv = document.createElement('div');
                projectDiv.classList.add('group');

                // Create video element
                const videoDiv = document.createElement('div');
                videoDiv.classList.add('pic');
                const iframe = document.createElement('iframe');
                iframe.src = project.video_url;
                iframe.width = '100%';
                iframe.height = '100%';
                iframe.frameBorder = '0';
                videoDiv.appendChild(iframe);
                projectDiv.appendChild(videoDiv);

                // Create the section for title and author information
                const sectionDiv = document.createElement('div');
                sectionDiv.classList.add('section');
                const section2Div = document.createElement('div');
                section2Div.classList.add('section-2');

                const titleSpan = document.createElement('span');
                titleSpan.classList.add('text');
                titleSpan.textContent = project.title;
                section2Div.appendChild(titleSpan);

                const subtitleSpan = document.createElement('span');
                subtitleSpan.classList.add('text-2');
                subtitleSpan.textContent = `${project.authors} (supervisor: ${project.supervisor})`;
                section2Div.appendChild(subtitleSpan);

                sectionDiv.appendChild(section2Div);
                projectDiv.appendChild(sectionDiv);

                // Create button linking to the GitHub repository
                const button = document.createElement('button');
                button.classList.add('Button');
                const buttonText = document.createElement('span');
                buttonText.classList.add('text-3');
                buttonText.textContent = 'Project REPOSITORY';
                button.appendChild(buttonText);

                const link = document.createElement('a');
                link.href = project.project_link;
                link.target = '_blank';
                link.appendChild(button);

                projectDiv.appendChild(link);

                // Append the entire project div to the main container
                projectsContainer.appendChild(projectDiv);
            });
        })
        .catch(error => console.error('Error loading JSON data:', error));
} else {
    console.error('Year parameter is missing in the URL.');
}