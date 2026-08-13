# SMCareers - Job Application Portal

A responsive job application portal built using **only** HTML5, CSS3, and Vanilla JavaScript. No frameworks, no libraries.

## Project Description

SMCareers is a simple, clean, and professional job portal where users can browse job and internship opportunities, search and filter roles, view complete job details, and submit applications. Submitted applications are saved in the browser using LocalStorage.

## Features

- **Responsive Navigation Bar** with a mobile hamburger menu
- **Hero Section** with a working job search bar
- **Dynamic Job Listings** generated from a JavaScript array of objects (no hardcoded HTML cards)
- **Search** by job title, company name, skills, or location
- **Filters** for Category, Location, Job Type, and Experience Level (works together with search)
- **Job Details Modal** showing complete information about a selected job
- **Application Form Modal** with the selected job auto-filled
- **Form Validation** — required fields, valid email, 10-digit Indian mobile number, resume file, cover message minimum length
- **Application Submission** with a success message and applicant summary
- **LocalStorage** for applications, bookmarks, theme preference, and application counter
- **Bonus Features:**
  - Dark / Light Mode toggle
  - Bookmark / Favorite jobs (saved in LocalStorage)
  - Application counter in the hero stats
  - Character counter for the cover message
  - Back-to-Top button
  - Active navigation link highlighting on scroll

## Technologies Used

- HTML5
- CSS3 (Flexbox, Grid, Media Queries, CSS Variables)
- Vanilla JavaScript (ES5/ES6)
- LocalStorage (Web Storage API)

No external libraries or frameworks are used.

## Folder Structure

```
job-application-portal/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   └── images/
└── README.md
```

## How to Run the Project

1. Download or clone the project folder.
2. Open the `job-application-portal` folder.
3. Double-click `index.html` to open it in any modern browser (Chrome, Firefox, Edge, Safari).

That's it — no build step, no dependencies, no server required.

Alternatively, you can serve it locally with any static file server, for example:

```bash
# Using Python
python -m http.server 8000

# Using Node (npx)
npx serve
```

Then open `http://localhost:8000` in your browser.

## JavaScript Functionality

The JavaScript file (`js/script.js`) is organized into clearly commented sections:

| Section | Purpose |
|---|---|
| Job Data | An array of job objects with title, company, location, category, type, experience, salary, and skills |
| State Variables | `filteredJobs`, `bookmarks`, `currentJobId` |
| Initial Setup | Theme, navigation, filter dropdowns, stat counters |
| Render Functions | `renderJobs()` and `createJobCard()` build job cards using DOM manipulation |
| Search & Filter | `filterJobs()` combines search text with all filter dropdowns |
| Job Details Modal | `openDetailsModal()` shows full job information |
| Application Modal | `openApplicationModal()` opens the form with the selected job |
| Form Validation | `validateForm()` checks all fields and shows inline error messages |
| Application Submission | `handleApplicationSubmit()` saves the application and shows a success modal |
| Bonus Features | Bookmarks, back-to-top button, active nav highlighting |

### JavaScript Concepts Demonstrated

- Variables (`let`, `const`)
- Arrays and Array methods (`filter`, `map`, `find`, `forEach`, `indexOf`, `some`, `push`, `splice`)
- Objects (job objects, application objects)
- Functions (named functions for every feature)
- Loops (`forEach`)
- `if / else` conditions
- DOM manipulation (`document.getElementById`, `createElement`, `innerHTML`, `appendChild`)
- Event listeners (`click`, `input`, `change`, `submit`, `scroll`, `DOMContentLoaded`)
- Form validation
- LocalStorage (`JSON.stringify`, `JSON.parse`, `setItem`, `getItem`)

## LocalStorage Usage

SMCareers uses LocalStorage to persist data in the browser:

| Key | What it stores |
|---|---|
| `smcareers-applications` | Array of submitted application objects (name, email, mobile, qualification, job, etc.) |
| `smcareers-bookmarks` | Array of bookmarked job IDs |
| `smcareers-theme` | Current theme (`light` or `dark`) |

All objects/arrays are stored with `JSON.stringify()` and retrieved with `JSON.parse()`.

> Note: The resume file itself is not stored in LocalStorage. Only the resume **filename** is saved, as files cannot be persisted in LocalStorage.

## Screenshots

> Add your screenshots here after running the project.

```
screenshots/
├── home.png
├── jobs.png
├── job-details.png
├── apply-form.png
└── dark-mode.png
```

## GitHub Repository

> Add your GitHub repository link here.

```
https://github.com/<your-username>/smcareers-job-portal
```

## Live Deployment

> Add your live deployment link here once deployed (e.g., GitHub Pages, Netlify, Vercel).

```
https://your-deployment-link.netlify.app
```

---

Built with HTML5, CSS3, and Vanilla JavaScript.
