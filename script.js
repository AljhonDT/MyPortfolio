// Navbar

 // Select all section elements and navbar links
 const sections = document.querySelectorAll("section");
 const navLinks = document.querySelectorAll(".navbar ul li a");

 // Highlight the navbar link corresponding to the visible section
 const highlightNav = () => {
     let currentSection = "";

     // Get the section currently in the viewport
     sections.forEach((section) => {
         const sectionTop = section.offsetTop;
         const sectionHeight = section.offsetHeight;
         if (window.scrollY >= sectionTop - sectionHeight / 4) {
             currentSection = section.getAttribute("id");
         }
     });

     // Remove active class from all links and add it to the current link
     navLinks.forEach((link) => {
         link.classList.remove("active");
         if (link.dataset.link === currentSection) {
             link.classList.add("active");
         }
     });
 };

 // Attach the function to the scroll event
 window.addEventListener("scroll", highlightNav);
    



// Training data for each year
const trainingData = {
    2021: [
        { title: 'Web Development Training', month: 'March', description: 'Completed Web Development Training from MindTech Training Development Institute Inc.' },
    ],
    2022: [
        { title: 'WordPress Training', month: 'January', description: 'Completed WordPress from BPI Technical-Vocational Program.' },
        { title: 'Back-End Web Development', month: 'March', description: 'Participated in Back-end Web Development 101 from BPI Technical-Vocational Program.' },
    ],
    2023: [
        { title: 'Data Analytics 101', month: 'March', description: 'Completed Data Analytics 101 from BPI Technical-Vocational Program.' },
        { title: 'Introduction to Python', month: 'June', description: 'Completed Introduction to Python Programming from BPI Technical-Vocational Program.' },
        { title: 'Data Visualization with Power BI', month: 'August', description: 'Learned data visualization techniques using Power BI.' },
    ],
    2024: [
        { title: 'Data Analytics 101', month: 'January', description: 'Completed Data Analytics 101 from BPI Technical-Vocational Program.' },
        { title: 'Front-End Web Development 101', month: 'March', description: 'Completed Front-End Web Development 101 from BPI Technical-Vocational Program.' },

    ],
};

// Set the initial year (defaults to 2024)
let currentYear = 2024;

// Display the trainings based on the selected year
function displayTrainings(year) {
    const roadmapContainer = document.getElementById('training-roadmap');
    const yearDisplay = document.getElementById('selected-year');
    roadmapContainer.innerHTML = ''; // Clear any previous content

    // Display the selected year
    yearDisplay.textContent = `Training for ${year}`;

    const yearData = trainingData[year];

    if (yearData) {
        yearData.forEach(training => {
            const card = document.createElement('div');
            card.classList.add('training-card');
            card.innerHTML = `
                <h3>${training.title}</h3>
                <p class="month">${training.month}</p>
                <p>${training.description}</p>
            `;
            roadmapContainer.appendChild(card);
        });
    } else {
        roadmapContainer.innerHTML = '<p>No training available for this year.</p>';
    }
}

// Initialize the training data for the default year
displayTrainings(currentYear);

// Next Year Button
document.getElementById('next-year').addEventListener('click', () => {
    currentYear = (currentYear === 2024) ? 2021 : currentYear + 1;
    displayTrainings(currentYear);
});

// Previous Year Button
document.getElementById('prev-year').addEventListener('click', () => {
    currentYear = (currentYear === 2021) ? 2024 : currentYear - 1;
    displayTrainings(currentYear);
});
// Dynamic Projects Data
const projects = [
    {
        img: "https://placehold.co/300x200",
        title: "Portfolio Website",
        description: "Designed and developed a responsive portfolio website using HTML, CSS, and JavaScript.",
        link: "#"
    },
    {
        img: "https://placehold.co/300x200",
        title: "Sales Dashboard",
        description: "Created an interactive sales dashboard using Python, SQL, and Matplotlib for data visualization.",
        link: "#"
    },
    {
        img: "https://placehold.co/300x200",
        title: "E-commerce Website",
        description: "Developed a full-stack e-commerce application using Django and React.",
        link: "#"
    },
    {
        img: "https://placehold.co/300x200",
        title: "Blog CMS",
        description: "Built a content management system for blogging using Laravel.",
        link: "#"
    },
    {
        img: "https://placehold.co/300x200",
        title: "Weather App",
        description: "Developed a weather forecast application using Node.js and Express.",
        link: "#"
    }
];

const projectsSlider = document.getElementById("projects-slider");
const prevProjectButton = document.getElementById("prev-project");
const nextProjectButton = document.getElementById("next-project");

let currentProjectIndex = 0;
const projectsToShow = 3; // Number of projects visible at a time

function renderProjects() {
    projectsSlider.innerHTML = ""; // Clear current projects

    const visibleProjects = projects.slice(currentProjectIndex, currentProjectIndex + projectsToShow);

    visibleProjects.forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");
        projectCard.innerHTML = `
            <img src="${project.img}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" class="view-project">View Project</a>
        `;
        projectsSlider.appendChild(projectCard);
    });
}

function handleSlider(action) {
    if (action === "next" && currentProjectIndex + projectsToShow < projects.length) {
        currentProjectIndex++;
    } else if (action === "prev" && currentProjectIndex > 0) {
        currentProjectIndex--;
    }
    renderProjects();
}

prevProjectButton.addEventListener("click", () => handleSlider("prev"));
nextProjectButton.addEventListener("click", () => handleSlider("next"));

// Initial render
renderProjects();



// services script
// Array of services data
const servicesData = [
    {
        title: "Web Development",
        description: "From simple landing pages to complex websites, I create responsive, fast, and user-friendly web applications tailored to your needs.",
        imageUrl: "https://placehold.co/300x200", // Replace with actual image URL
        link: "contact.html"
    },
    {
        title: "Data Analytics",
        description: "Transform your raw data into actionable insights using Python, SQL, and data visualization tools to help you make better business decisions.",
        imageUrl: "https://placehold.co/300x200", // Replace with actual image URL
        link: "contact.html"
    },
    {
        title: "SEO Optimization",
        description: "Enhance your website's visibility on search engines, driving organic traffic and improving user engagement with proven SEO techniques.",
        imageUrl: "https://placehold.co/300x200", // Replace with actual image URL
        link: "contact.html"
    },
    {
        title: "Mobile App Development",
        description: "Develop custom mobile applications for both Android and iOS, ensuring seamless user experience and functionality across devices.",
        imageUrl: "https://placehold.co/300x200", // Replace with actual image URL
        link: "contact.html"
    }
];

// Function to generate service cards dynamically
function populateServices() {
    const servicesGrid = document.getElementById('services-grid');
    
    servicesData.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.classList.add('service-card');

        serviceCard.innerHTML = `
            <img src="${service.imageUrl}" alt="${service.title}">
            <h3>${service.title}</h3>
            <p>${service.description}</p>
            <a href="${service.link}" class="service-btn">Get in Touch</a>
        `;

        servicesGrid.appendChild(serviceCard);
    });
}

// Call the function to populate the services section when the page loads
document.addEventListener('DOMContentLoaded', populateServices);



