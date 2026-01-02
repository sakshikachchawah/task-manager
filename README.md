📝 Task Manager

A sleek, modern task management app built with the MERN stack. Create, organize, and conquer your daily tasks with style.

✨ What Makes It Special
This application demonstrates modern full-stack development with a beautiful gradient UI, smooth animations, and real-time task management. Built with clean code architecture and RESTful API design, it serves as an excellent portfolio piece for developers learning the MERN stack.

🚀 Quick Start

Prerequisites: Node.js and MongoDB installed on your system.

bash# Clone and setup backend

git clone <your-repo-url>

cd task-manager/backend

npm install

echo "PORT=5000\nMONGO_URI=mongodb://localhost:27017/taskmanager" > .env

npm run dev

## Setup frontend (new terminal)
cd ../frontend
npm install
echo "VITE_API_URL=http://localhost:5000/api" > .env
npm run dev
Open your browser to http://localhost:5173 and start managing tasks like a pro.

💡 Core Features

Complete CRUD Operations - Create, read, update, and delete tasks with instant feedback and smooth animations that make task management feel effortless.
Smart Task Status - Toggle between pending and completed states with a single click, and watch your progress with color-coded visual indicators.
Inline Editing - Edit tasks directly in the list without navigating away, keeping your workflow uninterrupted and efficient.
Modern UI/UX - Experience a beautiful gradient interface with responsive design that works seamlessly on desktop, tablet, and mobile devices.

🛠️ Built With

The frontend leverages React with Vite for lightning-fast development, while Axios handles all API communications with elegant error handling. The backend runs on Express.js with Mongoose providing robust MongoDB integration and schema validation. Environment variables keep sensitive data secure, and CORS enables smooth cross-origin requests between frontend and backend.

📚 Learning Value

This project teaches essential full-stack concepts including RESTful API design, database modeling with Mongoose schemas, React hooks for state management, asynchronous JavaScript with async/await, proper error handling patterns, and modern CSS techniques with gradients and animations.

🎯 API Endpoints

The application exposes five RESTful endpoints: GET /api/tasks retrieves all tasks, GET /api/tasks/:id fetches a single task, POST /api/tasks creates new tasks, PUT /api/tasks/:id updates existing tasks, and DELETE /api/tasks/:id removes tasks from the database.
