AOS.init();


fetch('assets/results/years.json')  // Assuming the JSON file is located in 'data/years.json'
    .then(response => response.json())
    .then(data => {
        // Get the dropdown menu container
        const dropdownMenu = document.getElementById('dropdownMenu');

        // Loop through the years and create the corresponding <a> elements
        data.years.forEach(year => {
            // Create a new <a> element for each year
            const dropdownItem = document.createElement('a');
            
            dropdownItem.classList.add('dropdown-item');
            dropdownItem.href = `results.html?year=${year}`;  // Dynamically set the href attribute
            dropdownItem.textContent = year;  // Set the text of the link

            // Append the dropdown item to the dropdown menu
            dropdownMenu.appendChild(dropdownItem);
        });
        console.log(data.years)
    })
    .catch(error => console.error('Error loading JSON data:', error));


    document.getElementById("showAlert").addEventListener("click", function(event) {
        event.preventDefault(); // 防止跳转
        document.getElementById("alert-Box").style.display = "block"; // 显示警告框
    });