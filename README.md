# SCMR Advogados - Frontend

This is the frontend project for SCMR Advogados, a law firm website built with React. The site presents information about the firm, its attorneys, practice areas, publications, blog posts, and contact details. It features a modern design, dark mode support, and responsive layout.

## Features

- **Homepage:** Overview of the firm and key statistics.
- **Attorneys:** Profiles of the firm's lawyers.
- **Practice Areas:** Information about legal services offered.
- **Blog:** Recent articles and legal news.
- **Publications:** List of published works.
- **Contact:** Contact form and details.
- **404 Page:** Custom not found page.

## Tech Stack

- **React** (with hooks and context)
- **React Router** (for navigation)
- **CSS Modules** (for component styling)
- **Gray-matter** (for blog post parsing)
- **Responsive Design** (mobile-friendly)

## Project Structure

```
src/
  components/         # Reusable UI components
  contexts/           # React context for color scheme
  image/              # Image assets
  pages/              # Main site pages
  posts/              # Markdown blog posts
  App.jsx             # Main app component
  main.jsx            # Entry point
  index.css           # Global styles
```

## Customization

- **Add blog posts:** Place Markdown files in `src/posts/`.
- **Edit attorney profiles:** Update `src/components/attorneys/Attorneys.jsx`.
- **Change practice areas:** Edit `src/components/practiceareas/PracticeAreas.jsx`.
- **Update contact info:** Modify `src/pages/contact/ContactPage.jsx`.

## License

This project is for SCMR Advogados. All rights included