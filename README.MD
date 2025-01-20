# Casino Game App

This is a full-stack casino game application consisting of a React-based frontend and an Express.js backend. The app is designed to showcase casino games, user interactions, and dynamic data updates.

## Table of Contents
1. [Technologies Used](#technologies-used)
2. [Project Structure](#project-structure)
3. [Installation Instructions](#installation-instructions)
4. [ChatGPT Contribution](#chatgpt-contribution)

## Technologies Used

### Frontend:
- React
- TailwindCSS
- TypeScript

### Backend:
- Node.js
- Express.js

## Project Structure

```
casino-game/
│
├── backend/
│   ├── server.js       # Entry point for the backend
│   ├── package.json    # Backend dependencies and scripts
│   └── …             # Additional backend files
│
├── frontend/
│   ├── src/            # React components
│   ├── build/          # Production build files
│   ├── package.json    # Frontend dependencies and scripts
│   └── …             # Additional frontend files
│
├── package.json        # Root-level build and start scripts
└── README.md           # Project documentation
```

## Installation Instructions

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/vpadovsky/casino-game.git
   cd casino-game
   ```

2. **Install Dependencies:**

   For Backend:
   ```bash
   cd backend
   npm install
   cd ..
   ```

   For Frontend:
   ```bash
   cd frontend
   npm install
   cd ..
   ```

3. **Run Locally:**

   Backend:
   ```bash
   cd backend
   npm start
   ```

   Frontend:
   ```bash
   cd frontend
   npm start
   ```

Access the frontend at http://localhost:3000 and the backend at http://localhost:5000.

## ChatGPT Contribution

The following tasks were completed with the assistance of ChatGPT:
1. **Project Setup:** Guidance on integrating the frontend and backend in a single deployment structure.
2. **Deployment Instructions:** Step-by-step guide for deploying the app to Vercel and Railway with a combined frontend and backend.
3. **README.md Formatting:** Created this detailed and properly formatted README.md file.

