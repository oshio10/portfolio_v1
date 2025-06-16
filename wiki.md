# Project Summary
This project aims to create a personal portfolio website for individuals, leveraging their CV data to showcase skills and experiences. The portfolio will be developed using Next.js and TypeScript, ensuring a modern and responsive design that can be deployed on GitHub.

# Project Module Description
The project consists of several functional modules:
- **CV Data Extraction**: Analyzes CVs to extract relevant information for portfolio creation.
- **Portfolio Development**: Utilizes Next.js and TypeScript to build the portfolio interface.
- **Deployment Configuration**: Prepares the portfolio for deployment on GitHub.

# Directory Tree
```
.
├── code.ipynb                     # Jupyter notebook for data processing
├── data/
│   └── cv_data.json               # JSON file containing CV data
├── portfolio/
│   ├── next.config.js             # Configuration file for Next.js
│   ├── package.json                # NPM package configuration
│   ├── postcss.config.js           # Configuration for PostCSS
│   ├── src/
│   │   ├── pages/
│   │   │   ├── _app.tsx            # Custom App component
│   │   │   ├── _document.tsx       # Custom Document component
│   │   │   └── index.tsx           # Main entry page
│   │   ├── styles/
│   │   │   └── globals.css         # Global styles for the portfolio
│   │   ├── types/
│   │   │   └── cv.ts               # Type definitions for CV data
│   │   └── utils/
│   │       ├── cv-data.json        # Local copy of CV data
│   │       └── data.ts             # Utility functions for data handling
│   ├── tailwind.config.js          # Configuration for Tailwind CSS
│   └── tsconfig.json               # TypeScript configuration
└── uploads/
    └── CV Patrick Chen-2.pdf       # Uploaded CV document
```

# File Description Inventory
- **code.ipynb**: Jupyter notebook for data processing tasks.
- **cv_data.json**: Contains structured data extracted from CVs.
- **next.config.js**: Configuration settings for the Next.js application.
- **package.json**: Lists dependencies and scripts for the portfolio.
- **postcss.config.js**: Configuration for PostCSS processing.
- **_app.tsx**: Main application component for Next.js.
- **_document.tsx**: Custom document for server-side rendering.
- **index.tsx**: Default landing page of the portfolio.
- **globals.css**: Styles that apply globally across the portfolio.
- **cv.ts**: TypeScript type definitions for CV data structure.
- **cv-data.json**: JSON file for local CV data storage.
- **data.ts**: Utility functions to manage and manipulate data.
- **tailwind.config.js**: Configuration file for Tailwind CSS styling.
- **tsconfig.json**: TypeScript compiler options.
- **CV Patrick Chen-2.pdf**: The CV document uploaded for processing.

# Technology Stack
- **Frontend**: Next.js, TypeScript, Tailwind CSS
- **Data Processing**: Jupyter Notebook
- **Data Format**: JSON

# Usage
To set up the project:
1. Install dependencies using npm or yarn.
2. Build the project using the appropriate command.
3. Run the development server to view the portfolio locally.
