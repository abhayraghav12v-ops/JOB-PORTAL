
/* ---------- 1. JOB DATA ---------- */
const jobs = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    company: "SM Global Tech Solutions",
    location: "Noida",
    category: "Web Development",
    type: "Internship",
    experience: "Fresher",
    salary: "₹10,000 - ₹15,000",
    skills: ["HTML", "CSS", "JavaScript"],
    description: "Join our frontend team to build responsive user interfaces using modern web technologies. Great opportunity for freshers."
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "TechNova Solutions",
    location: "Bengaluru",
    category: "Web Development",
    type: "Full-time",
    experience: "1-3 years",
    salary: "₹6,00,000 - ₹9,00,000",
    skills: ["Node.js", "Express", "MongoDB", "REST API"],
    description: "Design and maintain server-side logic, build APIs, and work with databases for scalable web applications."
  },
  {
    id: 3,
    title: "UI/UX Designer Intern",
    company: "Creative Minds Studio",
    location: "Pune",
    category: "Design",
    type: "Internship",
    experience: "Fresher",
    salary: "₹8,000 - ₹12,000",
    skills: ["Figma", "Photoshop", "UI Design", "Wireframing"],
    description: "Create user-friendly designs, wireframes, and prototypes for web and mobile applications."
  },
  {
    id: 4,
    title: "Data Analyst",
    company: "Insight Analytics Pvt Ltd",
    location: "Hyderabad",
    category: "Data Science",
    type: "Full-time",
    experience: "1-2 years",
    salary: "₹4,50,000 - ₹7,00,000",
    skills: ["Python", "SQL", "Excel", "Power BI"],
    description: "Analyze business data, create dashboards, and support decision-making with actionable insights."
  },
  {
    id: 5,
    title: "Digital Marketing Intern",
    company: "GrowthHub Marketing",
    location: "Remote",
    category: "Marketing",
    type: "Internship",
    experience: "Fresher",
    salary: "₹7,000 - ₹10,000",
    skills: ["SEO", "Social Media", "Content Writing", "Google Ads"],
    description: "Assist the marketing team with SEO, social media campaigns, and content creation for clients."
  },
  {
    id: 6,
    title: "Python Developer",
    company: "CodeCraft Labs",
    location: "Bengaluru",
    category: "Web Development",
    type: "Full-time",
    experience: "2-4 years",
    salary: "₹7,00,000 - ₹12,00,000",
    skills: ["Python", "Django", "PostgreSQL", "REST API"],
    description: "Develop backend services and APIs using Python and Django. Work on scalable enterprise applications."
  },
  {
    id: 7,
    title: "Mobile App Developer",
    company: "AppSphere Technologies",
    location: "Mumbai",
    category: "Mobile Development",
    type: "Full-time",
    experience: "1-3 years",
    salary: "₹5,00,000 - ₹8,00,000",
    skills: ["React Native", "JavaScript", "Android", "iOS"],
    description: "Build cross-platform mobile applications using React Native for Android and iOS platforms."
  },
  {
    id: 8,
    title: "HR Intern",
    company: "PeopleFirst HR Services",
    location: "Delhi",
    category: "Human Resources",
    type: "Internship",
    experience: "Fresher",
    salary: "₹8,000 - ₹12,000",
    skills: ["Communication", "Recruitment", "MS Office"],
    description: "Support the HR team with recruitment, onboarding, and employee engagement activities."
  },
  {
    id: 9,
    title: "Full Stack Developer",
    company: "SM Global Tech Solutions",
    location: "Noida",
    category: "Web Development",
    type: "Full-time",
    experience: "2-5 years",
    salary: "₹8,00,000 - ₹15,00,000",
    skills: ["JavaScript", "React", "Node.js", "MongoDB"],
    description: "Work across the full stack to build and maintain web applications from front to back."
  },
  {
    id: 10,
    title: "Graphic Designer",
    company: "Creative Minds Studio",
    location: "Pune",
    category: "Design",
    type: "Full-time",
    experience: "1-3 years",
    salary: "₹3,50,000 - ₹6,00,000",
    skills: ["Photoshop", "Illustrator", "Branding", "Typography"],
    description: "Create visual content for digital and print media including branding, social media, and marketing materials."
  },
  {
    id: 11,
    title: "QA Tester Intern",
    company: "TechNova Solutions",
    location: "Remote",
    category: "Quality Assurance",
    type: "Internship",
    experience: "Fresher",
    salary: "₹9,000 - ₹13,000",
    skills: ["Manual Testing", "Bug Reporting", "SQL"],
    description: "Learn software testing by performing manual testing, writing test cases, and reporting bugs."
  },
  {
    id: 12,
    title: "Content Writer",
    company: "GrowthHub Marketing",
    location: "Remote",
    category: "Marketing",
    type: "Full-time",
    experience: "0-2 years",
    salary: "₹3,00,000 - ₹5,00,000",
    skills: ["Content Writing", "SEO", "Research", "Editing"],
    description: "Write engaging blog posts, articles, and website content for a variety of clients and industries."
  }
];

/* ---------- 2. STATE VARIABLES ---------- */
let filteredJobs = [];
let bookmarks = loadBookmarks();
let currentJobId = null;

/* ---------- 3. DOM REFERENCES ---------- */
const navLinks = document.getElementById("navLinks");
const hamburger = document.getElementById("hamburger");
const themeToggle = document.getElementById("themeToggle");

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

const filterCategory = document.getElementById("filterCategory");
const filterLocation = document.getElementById("filterLocation");
const filterType = document.getElementById("filterType");
const filterExperience = document.getElementById("filterExperience");
const clearFiltersBtn = document.getElementById("clearFilters");

const jobsGrid = document.getElementById("jobsGrid");
const noResults = document.getElementById("noResults");
const resultsCount = document.getElementById("resultsCount");

const detailsModal = document.getElementById("detailsModal");
const detailsBody = document.getElementById("detailsBody");
const detailsApplyBtn = document.getElementById("detailsApplyBtn");

const applyModal = document.getElementById("applyModal");
const appliedJobInfo = document.getElementById("appliedJobInfo");
const applicationForm = document.getElementById("applicationForm");

const successModal = document.getElementById("successModal");
const successBody = document.getElementById("successBody");

const backToTop = document.getElementById("backToTop");



/* Apply saved theme on page load */
function initTheme() {
  const savedTheme = localStorage.getItem("smcareers-theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
  }
}

/* Toggle between dark and light mode */
function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("smcareers-theme", next);
}

/* Mobile hamburger menu */
function toggleMenu() {
  navLinks.classList.toggle("open");
  hamburger.classList.toggle("active");
  const isOpen = navLinks.classList.contains("open");
  hamburger.setAttribute("aria-expanded", isOpen);
}

/* Close mobile menu when a link is clicked */
function closeMenuOnNav() {
  navLinks.classList.remove("open");
  hamburger.classList.remove("active");
  hamburger.setAttribute("aria-expanded", "false");
}

/* Populate filter dropdowns from the jobs array (no duplicates) */
function populateFilters() {
  const categories = [...new Set(jobs.map((job) => job.category))];
  const locations = [...new Set(jobs.map((job) => job.location))];
  const types = [...new Set(jobs.map((job) => job.type))];
  const experiences = [...new Set(jobs.map((job) => job.experience))];

  appendOptions(filterCategory, categories);
  appendOptions(filterLocation, locations);
  appendOptions(filterType, types);
  appendOptions(filterExperience, experiences);
}

/* Helper: add <option> elements to a <select> */
function appendOptions(selectEl, values) {
  values.forEach(function (value) {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    selectEl.appendChild(option);
  });
}

/* Update the hero stat counters */
function updateStats() {
  document.getElementById("statJobs").textContent = jobs.length;
  document.getElementById("statApplied").textContent = getApplications().length;
  document.getElementById("statBookmarks").textContent = bookmarks.length;
}


/* Render an array of job objects into the jobs grid */
function renderJobs(list) {
  jobsGrid.innerHTML = "";

  if (list.length === 0) {
    noResults.hidden = false;
    resultsCount.textContent = "0 jobs found";
    return;
  }

  noResults.hidden = true;
  resultsCount.textContent = list.length + " job" + (list.length === 1 ? "" : "s") + " found";

  list.forEach(function (job) {
    jobsGrid.appendChild(createJobCard(job));
  });
}

/* Create a single job card element */
function createJobCard(job) {
  const card = document.createElement("div");
  card.className = "job-card";

  const isBookmarked = bookmarks.indexOf(job.id) !== -1;

  // Skills tags
  const skillsHTML = job.skills
    .map(function (skill) {
      return '<span class="skill-tag">' + skill + "</span>";
    })
    .join("");

  card.innerHTML =
    '<div class="job-card-head">' +
      '<div><h3 class="job-title">' + job.title + "</h3>" +
      '<p class="job-company">' + job.company + "</p></div>" +
      '<button class="bookmark-btn ' + (isBookmarked ? "active" : "") + '" data-bookmark="' + job.id + '" aria-label="Bookmark job" title="Bookmark">★</button>' +
    "</div>" +
    '<div class="job-meta">' +
      '<span>📍 ' + job.location + "</span>" +
      '<span>💼 ' + job.type + "</span>" +
      '<span>📊 ' + job.experience + "</span>" +
      '<span>💰 ' + job.salary + "</span>" +
    "</div>" +
    '<div class="job-skills">' + skillsHTML + "</div>" +
    '<div class="job-card-actions">' +
      '<button class="btn btn-ghost" data-details="' + job.id + '">View Details</button>' +
      '<button class="btn btn-primary" data-apply="' + job.id + '">Apply Now</button>' +
    "</div>";

  return card;
}

/* =========================================================
   6. SEARCH & FILTER LOGIC
   ========================================================= */

/* Main filter function: combines search text + all filter dropdowns */
function filterJobs() {
  const query = searchInput.value.trim().toLowerCase();
  const category = filterCategory.value;
  const location = filterLocation.value;
  const type = filterType.value;
  const experience = filterExperience.value;

  filteredJobs = jobs.filter(function (job) {
    // Search match: title, company, skills, location
    const matchesSearch =
      query === "" ||
      job.title.toLowerCase().indexOf(query) !== -1 ||
      job.company.toLowerCase().indexOf(query) !== -1 ||
      job.location.toLowerCase().indexOf(query) !== -1 ||
      job.skills.some(function (skill) {
        return skill.toLowerCase().indexOf(query) !== -1;
      });

    // Filter matches
    const matchesCategory = category === "" || job.category === category;
    const matchesLocation = location === "" || job.location === location;
    const matchesType = type === "" || job.type === type;
    const matchesExperience = experience === "" || job.experience === experience;

    return matchesSearch && matchesCategory && matchesLocation && matchesType && matchesExperience;
  });

  renderJobs(filteredJobs);
}

/* Reset all filters and search */
function clearAllFilters() {
  searchInput.value = "";
  filterCategory.value = "";
  filterLocation.value = "";
  filterType.value = "";
  filterExperience.value = "";
  filterJobs();
}

/* =========================================================
   7. JOB DETAILS MODAL
   ========================================================= */

function openDetailsModal(jobId) {
  const job = jobs.find(function (j) {
    return j.id === jobId;
  });

  if (!job) return;

  currentJobId = jobId;

  detailsBody.innerHTML =
    '<div class="detail-row"><span class="detail-label">Title</span><span>' + job.title + "</span></div>" +
    '<div class="detail-row"><span class="detail-label">Company</span><span>' + job.company + "</span></div>" +
    '<div class="detail-row"><span class="detail-label">Location</span><span>' + job.location + "</span></div>" +
    '<div class="detail-row"><span class="detail-label">Category</span><span>' + job.category + "</span></div>" +
    '<div class="detail-row"><span class="detail-label">Type</span><span>' + job.type + "</span></div>" +
    '<div class="detail-row"><span class="detail-label">Experience</span><span>' + job.experience + "</span></div>" +
    '<div class="detail-row"><span class="detail-label">Salary/Stipend</span><span>' + job.salary + "</span></div>" +
    '<div class="detail-row"><span class="detail-label">Skills</span><span>' + job.skills.join(", ") + "</span></div>" +
    '<p style="margin-top:14px;">' + job.description + "</p>";

  openModal("detailsModal");
}

/* =========================================================
   8. APPLICATION MODAL & FORM VALIDATION
   ========================================================= */

function openApplicationModal(jobId) {
  const job = jobs.find(function (j) {
    return j.id === jobId;
  });

  if (!job) return;

  currentJobId = jobId;
  appliedJobInfo.textContent = "Applying for: " + job.title + " at " + job.company;
  applicationForm.reset();
  clearErrors();
  updateCharCount();
  openModal("applyModal");
}

/* Validate every field, show messages, return true if all valid */
function validateForm() {
  let isValid = true;
  clearErrors();

  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const qualification = document.getElementById("qualification").value.trim();
  const experience = document.getElementById("experience").value.trim();
  const skills = document.getElementById("skills").value.trim();
  const resume = document.getElementById("resume").files;
  const coverMessage = document.getElementById("coverMessage").value.trim();

  // Full Name
  if (fullName === "") {
    showError("fullNameError", "Please enter your full name.", "fullName");
    isValid = false;
  }

  // Email
  if (email === "") {
    showError("emailError", "Please enter your email address.", "email");
    isValid = false;
  } else if (!isValidEmail(email)) {
    showError("emailError", "Please enter a valid email address.", "email");
    isValid = false;
  }

  // Mobile (10-digit Indian number)
  if (mobile === "") {
    showError("mobileError", "Please enter your mobile number.", "mobile");
    isValid = false;
  } else if (!/^[6-9]\d{9}$/.test(mobile)) {
    showError("mobileError", "Enter a valid 10-digit Indian mobile number.", "mobile");
    isValid = false;
  }

  // Qualification
  if (qualification === "") {
    showError("qualificationError", "Please enter your qualification.", "qualification");
    isValid = false;
  }

  // Experience
  if (experience === "") {
    showError("experienceError", "Please enter your experience.", "experience");
    isValid = false;
  }

  // Skills
  if (skills === "") {
    showError("skillsError", "Please enter your skills.", "skills");
    isValid = false;
  }

  // Resume
  if (resume.length === 0) {
    showError("resumeError", "Please select your resume file.", "resume");
    isValid = false;
  }

  // Cover Message (min 30 characters)
  if (coverMessage === "") {
    showError("coverMessageError", "Please write a cover message.", "coverMessage");
    isValid = false;
  } else if (coverMessage.length < 30) {
    showError("coverMessageError", "Cover message must be at least 30 characters.", "coverMessage");
    isValid = false;
  }

  return isValid;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showError(errorId, message, inputId) {
  document.getElementById(errorId).textContent = message;
  if (inputId) {
    document.getElementById(inputId).classList.add("input-invalid");
  }
}

function clearErrors() {
  const errors = document.querySelectorAll(".error");
  errors.forEach(function (el) {
    el.textContent = "";
  });
  const inputs = document.querySelectorAll(".input-invalid");
  inputs.forEach(function (el) {
    el.classList.remove("input-invalid");
  });
}

/* Character counter for cover message */
function updateCharCount() {
  const cover = document.getElementById("coverMessage");
  const count = cover.value.length;
  document.getElementById("charCount").textContent = count;
}

/* =========================================================
   9. APPLICATION SUBMISSION & LOCALSTORAGE
   ========================================================= */

function handleApplicationSubmit(event) {
  event.preventDefault();

  if (!validateForm()) {
    return;
  }

  const job = jobs.find(function (j) {
    return j.id === currentJobId;
  });

  const application = {
    id: Date.now(),
    jobId: currentJobId,
    jobTitle: job ? job.title : "",
    company: job ? job.company : "",
    name: document.getElementById("fullName").value.trim(),
    email: document.getElementById("email").value.trim(),
    mobile: document.getElementById("mobile").value.trim(),
    qualification: document.getElementById("qualification").value.trim(),
    experience: document.getElementById("experience").value.trim(),
    skills: document.getElementById("skills").value.trim(),
    resumeName: document.getElementById("resume").files[0]
      ? document.getElementById("resume").files[0].name
      : "",
    coverMessage: document.getElementById("coverMessage").value.trim(),
    appliedAt: new Date().toLocaleString()
  };

  saveApplication(application);

  closeModal("applyModal");

  // Show success modal with applicant summary
  successBody.innerHTML =
    '<div class="detail-row"><span class="detail-label">Name</span><span>' + application.name + "</span></div>" +
    '<div class="detail-row"><span class="detail-label">Email</span><span>' + application.email + "</span></div>" +
    '<div class="detail-row"><span class="detail-label">Mobile</span><span>' + application.mobile + "</span></div>" +
    '<div class="detail-row"><span class="detail-label">Qualification</span><span>' + application.qualification + "</span></div>" +
    '<div class="detail-row"><span class="detail-label">Applied Job</span><span>' + application.jobTitle + " at " + application.company + "</span></div>";

  openModal("successModal");
  updateStats();
}

/* LocalStorage helpers for applications */
function getApplications() {
  const data = localStorage.getItem("smcareers-applications");
  return data ? JSON.parse(data) : [];
}

function saveApplication(application) {
  const applications = getApplications();
  applications.push(application);
  localStorage.setItem("smcareers-applications", JSON.stringify(applications));
}

/* =========================================================
   10. BONUS FEATURES
   ========================================================= */

/* --- Bookmarks / Favorites --- */
function loadBookmarks() {
  const data = localStorage.getItem("smcareers-bookmarks");
  return data ? JSON.parse(data) : [];
}

function saveBookmarks() {
  localStorage.setItem("smcareers-bookmarks", JSON.stringify(bookmarks));
}

function toggleBookmark(jobId) {
  const index = bookmarks.indexOf(jobId);
  if (index === -1) {
    bookmarks.push(jobId);
  } else {
    bookmarks.splice(index, 1);
  }
  saveBookmarks();
  updateStats();
  // Update just the bookmark button state without full re-render
  const btn = document.querySelector('[data-bookmark="' + jobId + '"]');
  if (btn) {
    btn.classList.toggle("active");
  }
}

/* --- Back to Top button --- */
function handleScroll() {
  if (window.scrollY > 400) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }

  // Highlight active nav link based on scroll position
  highlightActiveNav();
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* --- Active nav link on scroll --- */
function highlightActiveNav() {
  const sections = document.querySelectorAll("section[id]");
  const navAnchors = document.querySelectorAll(".nav-link");
  let currentSection = "";

  sections.forEach(function (section) {
    const top = section.offsetTop - 100;
    if (window.scrollY >= top) {
      currentSection = section.getAttribute("id");
    }
  });

  navAnchors.forEach(function (link) {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + currentSection) {
      link.classList.add("active");
    }
  });
}

/* =========================================================
   MODAL HELPERS
   ========================================================= */
function openModal(modalId) {
  document.getElementById(modalId).hidden = false;
  document.body.style.overflow = "hidden";
}

function closeModal(modalId) {
  document.getElementById(modalId).hidden = true;
  document.body.style.overflow = "";
}

/* Close any modal when clicking the overlay (not the modal itself) */
function handleOverlayClick(event) {
  if (event.target.classList.contains("modal-overlay")) {
    event.target.hidden = true;
    document.body.style.overflow = "";
  }
}

/* =========================================================
   EVENT LISTENERS (wired up on page load)
   ========================================================= */
function setupEventListeners() {
  // Navigation
  hamburger.addEventListener("click", toggleMenu);
  themeToggle.addEventListener("click", toggleTheme);
  navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenuOnNav);
  });

  // Search
  searchInput.addEventListener("input", filterJobs);
  searchBtn.addEventListener("click", filterJobs);

  // Filters
  filterCategory.addEventListener("change", filterJobs);
  filterLocation.addEventListener("change", filterJobs);
  filterType.addEventListener("change", filterJobs);
  filterExperience.addEventListener("change", filterJobs);
  clearFiltersBtn.addEventListener("click", clearAllFilters);

  // Delegated clicks on the jobs grid (View Details / Apply / Bookmark)
  jobsGrid.addEventListener("click", function (event) {
    const detailsId = event.target.getAttribute("data-details");
    const applyId = event.target.getAttribute("data-apply");
    const bookmarkId = event.target.getAttribute("data-bookmark");

    if (detailsId) {
      openDetailsModal(Number(detailsId));
    } else if (applyId) {
      openApplicationModal(Number(applyId));
    } else if (bookmarkId) {
      toggleBookmark(Number(bookmarkId));
    }
  });

  // Details modal -> Apply button
  detailsApplyBtn.addEventListener("click", function () {
    closeModal("detailsModal");
    openApplicationModal(currentJobId);
  });

  // Application form
  applicationForm.addEventListener("submit", handleApplicationSubmit);
  document.getElementById("coverMessage").addEventListener("input", updateCharCount);

  // Modal close buttons (data-close-modal attribute)
  document.querySelectorAll("[data-close-modal]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      closeModal(btn.getAttribute("data-close-modal"));
    });
  });

  // Close modal when clicking the overlay background
  document.querySelectorAll(".modal-overlay").forEach(function (overlay) {
    overlay.addEventListener("click", handleOverlayClick);
  });

  // Back to top
  window.addEventListener("scroll", handleScroll);
  backToTop.addEventListener("click", scrollToTop);

  // Contact form (simple success message)
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("contactSuccess").hidden = false;
    e.target.reset();
  });

  // Footer year
  document.getElementById("year").textContent = new Date().getFullYear();
}

/* =========================================================
   INITIALIZE APP
   ========================================================= */
function init() {
  initTheme();
  populateFilters();
  filterJobs(); // renders all jobs on first load
  updateStats();
  setupEventListeners();
}

document.addEventListener("DOMContentLoaded", init);
