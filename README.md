# React + Vite

This template provides a minimal setup to get React working in Vite with HMR (Hot Module Replacement) and some ESLint rules.

## Project Description
This project serves as a template for building React applications using Vite. It aims to provide a fast and efficient development experience with modern tooling.

## File Descriptions

### App.jsx
- **Description**: The main component of the application that serves as the entry point. It contains personal information, skills, current projects, and future plans.
- **Technologies Used**: React, useState for managing component state.

### card.tsx
- **Description**: Defines a reusable Card component along with its subcomponents: CardContent, CardHeader, and CardTitle. It provides a structured way to display content.
- **Technologies Used**: React, Class Variance Authority (cva) for managing variants, Radix UI for flexible rendering.

### button.tsx
- **Description**: Defines a reusable Button component that can be styled with different variants and sizes. It serves as a customizable button for user interactions.
- **Technologies Used**: React, Class Variance Authority (cva) for managing variants, Radix UI for flexible rendering.

### main.jsx
- **Description**: The entry point of the application that renders the App component into the DOM. It uses StrictMode to activate additional checks and warnings.
- **Technologies Used**: React, ReactDOM for rendering the application.

- **Dependencies**: React, ReactDOM, StrictMode.


## Installation Instructions
To get started with this project, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd <repository-directory>
npm install
```

## Usage Instructions
To run the project in development mode, use the following command:

```bash
npm run dev
```

This will start the Vite development server, and you can view your application in the browser at `http://localhost:3000`.

## Contributing Guidelines
If you would like to contribute to this project, please fork the repository and submit a pull request with your changes.

## License
This project is licensed under the MIT License.
