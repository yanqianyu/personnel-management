# Personnel Management System

A React-based personnel management application with CRUD functionality.

## Features

- View personnel list in a table format
- Add new personnel records
- Edit existing personnel information
- Delete personnel records
- Responsive UI with Ant Design components

## Tech Stack

- React.js
- Ant Design (UI Components)
- Axios (HTTP client)
- React Router

## Project Structure

```
src/
├── api/              # API service functions
├── components/       # Reusable UI components
├── pages/            # Page components
└── App.js           # Main application component
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. The application will be available at `http://localhost:3000`

## API Integration

The application is configured to work with a backend API. The base URL can be configured in the `src/api/personnel.js` file.

## Available Scripts

In the project directory, you can run:

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request