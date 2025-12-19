# 🚀 QuickNote AI

![Docker](https://img.shields.io/badge/Docker-Ready-blue)
![Node](https://img.shields.io/badge/Node.js-20-green)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas%20%7C%20Local-brightgreen)
![License](https://img.shields.io/badge/License-MIT-yellow)

**QuickNote AI** is a modern full-stack note-taking application with authentication, real-time interactions, and AI-powered note summarization.  
Built with production-grade architecture, clean UX flow, and modern DevOps practices.

---

## ✨ Features

- 🔐 Secure authentication (Login / Register / Logout)
- 📝 Create, delete, and manage notes
- ⚡ Optimistic UI for instant interactions
- 🧠 AI-powered note summarization
- 📊 Dashboard with real user data
- 🛡️ Protected routes & session safety
- 🐳 Dockerized frontend, backend & database
- 🔄 CI/CD with GitHub Actions

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- TypeScript
- React Router
- GSAP (animations)
- Modern CSS (glassmorphism UI)

### Backend
- Node.js
- Express
- TypeScript
- MongoDB (Mongoose)
- JWT Authentication
- OpenAI API (AI features)

### DevOps & Tooling
- Docker & Docker Compose
- GitHub Actions (CI/CD)
- Environment-based configuration

---

## 🧠 AI Features

- **AI Note Summarizer**
  - Generate concise summaries for any note
  - Secure backend-only OpenAI integration
  - Per-user access control

> AI calls are handled securely on the backend — no API keys exposed on the frontend.

---


## ⚙️ Environment Variables

### Backend (`backend/.env`)
```env
PORT=4000
MONGO_URI=mongodb://mongodb:27017/quicknote-ai
JWT_SECRET=your_jwt_secret
OPENAI_API_KEY=your_openai_key
```

🐳 Run with Docker (Recommended)
```
docker compose up --build
```
Frontend → http://localhost:5173
Backend → http://localhost:4000
MongoDB → Docker volume

🧪 Run Locally (Without Docker)
```Backend
cd backend
npm install
npm run dev
```
Frontend
```
cd frontend
npm install
npm run dev
```

🔄 CI/CD

This project uses GitHub Actions to automatically:
Build backend & frontend
Typecheck TypeScript
Verify Docker builds
Every push and pull request is validated.

👤 Author
```
Lelien Panda
GitHub: https://github.com/lelixn
```

