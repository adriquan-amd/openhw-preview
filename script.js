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
        event.preventDefault(); // 防止默认跳转
        
        // **🚀 检查是否已有 alert，避免重复创建**
        if (document.querySelector(".alert-box")) return;

        // **获取 nav 元素**
        let navbar = document.getElementById("top_nav_bar");
        let navbarRect = navbar.getBoundingClientRect(); // 获取导航栏位置

        // **创建 alert-box**
        let alertBox = document.createElement("div");
        alertBox.className = "alert alert-danger alert-box show";
        alertBox.setAttribute("role", "alert");
        alertBox.setAttribute("data-aos","fade-up")
        alertBox.innerHTML = `
            <strong>Coming Soon...</strong>
        `;


        alertBox.style.top = `${navbarRect.bottom + window.scrollY}px`; // 放在导航栏下方

   
        navbar.parentNode.insertBefore(alertBox, navbar.nextSibling);


        setTimeout(function() {
            alertBox.style.opacity = "0";
            setTimeout(() => alertBox.remove(), 500);
        }, 5000);

    });
