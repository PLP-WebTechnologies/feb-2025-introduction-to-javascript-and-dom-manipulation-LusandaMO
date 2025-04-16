// Change text content dynamically
document.getElementById("change-text-btn").addEventListener("click", function() {
    const heroHeading = document.getElementById("hero-heading");
    const heroDescription = document.getElementById("hero-description");

    heroHeading.textContent = "Welcome to Lusanda's World!";
    heroDescription.textContent = "Explore my journey as a software developer and chemical engineer.";
});

// Add or remove an element when a button is clicked
document.getElementById("add-project-btn").addEventListener("click", function() {
    const projectsSection = document.getElementById("projects");
    const existingProject = document.getElementById("new-project");

    if (existingProject) {
        existingProject.remove();
    } else {
        const newProject = document.createElement("div");
        newProject.id = "new-project";
        newProject.classList.add("project-card");
        newProject.innerHTML = `
            <h3>Personal Project</h3>
            <p>This is a project that I have personaly worked on.</p>
            <a href="https://github.com/LusandaMO/personal-portfolio" target="_blank">View Project</a>
        `;
        projectsSection.appendChild(newProject);
    }
});

// Modify CSS styles via JavaScript
document.getElementById("add-project-btn").addEventListener("mouseover", function() {
    this.style.backgroundColor = "#007BFF";
    this.style.color = "white";
});

document.getElementById("add-project-btn").addEventListener("mouseout", function() {
    this.style.backgroundColor = "#28a745";
    this.style.color = "white";
});