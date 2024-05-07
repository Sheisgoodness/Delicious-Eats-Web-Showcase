document.addEventListener("DOMContentLoaded", function() {
    // Team member carousel functionality
    const teamMembers = document.querySelectorAll(".team-member");
    const totalTeamMembers = teamMembers.length;
    let currentIndex = 0;

    function showTeamMember(index) {
        teamMembers.forEach((member, i) => {
            member.style.display = i === index ? "block" : "none";
        });
    }

    function showNextTeamMember() {
        currentIndex = (currentIndex + 1) % totalTeamMembers;
        showTeamMember(currentIndex);
    }
    
    function showPrevTeamMember() {
        currentIndex = (currentIndex - 1 + totalTeamMembers) % totalTeamMembers;
        showTeamMember(currentIndex);
    }

    showTeamMember(currentIndex);

    setInterval(showNextTeamMember, 5000);

    // Dropdown menu functionality
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener('click', function(event) {
            event.preventDefault();  // Prevent the link from triggering a page load
            let dropdownContent = this.querySelector('.dropdown-content');

            dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';

            // Close other dropdowns if this one is opened
            dropdowns.forEach(function(otherDropdown) {
                if (otherDropdown !== dropdown) {
                    otherDropdown.querySelector('.dropdown-content').style.display = 'none';
                }
            });
        });
    });

    // Hamburger menu toggle
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('nav ul');
    hamburgerMenu.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close the navigation menu when a menu item is clicked
    navMenu.addEventListener('click', function(event) {
        if (navMenu.classList.contains('active') && event.target.tagName === 'A') {
            hamburgerMenu.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});

