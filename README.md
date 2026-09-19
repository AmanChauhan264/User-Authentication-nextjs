# 🔐 User Authentication System

A full-stack **User Authentication System** built using **Next.js, React, MongoDB, JWT, Mailtrap, and Tailwind CSS**.

This project implements user registration, login, logout, protected routes, JWT-based authentication, email verification, and user profile functionality.

## 🚀 Live Demo

https://user-authentication-nextjs-eight.vercel.app/

---

## ✨ Features

- 🔐 User Registration
- 🔑 User Login
- 🚪 User Logout
- 🔒 JWT-based Authentication
- 🍪 HTTP-only Authentication Cookies
- 📧 Email Verification
- 📬 Mailtrap Email Testing
- 🛡️ Protected Routes using Next.js Middleware
- 👤 User Profile
- 🆔 Get Logged-in User Details
- 🔗 Dynamic User Profile Route
- 🗄️ MongoDB Database Integration
- 🔑 Password Hashing
- ⚠️ Error Handling
- 🔔 Toast Notifications
- 📱 Responsive UI
- ☁️ Vercel Deployment

---

## 🛠️ Tech Stack

### Frontend
- Next.js
- React.js
- TypeScript
- Tailwind CSS
- Axios

### Backend
- Next.js API Routes
- Node.js
- MongoDB
- Mongoose

### Authentication & Security
- JWT
- HTTP-only Cookies
- bcrypt
- Next.js Middleware

### Email
- Mailtrap

### Deployment
- Vercel

---

## 📂 Project Structure

```text
User-Authentication-nextjs/
│
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── users/
│   │   │       ├── login/
│   │   │       │   └── route.ts
│   │   │       ├── logout/
│   │   │       │   └── route.ts
│   │   │       ├── me/
│   │   │       │   └── route.ts
│   │   │       └── signup/
│   │   │           └── route.ts
│   │   │
│   │   ├── login/
│   │   │   └── page.tsx
│   │   │
│   │   ├── signup/
│   │   │   └── page.tsx
│   │   │
│   │   ├── profile/
│   │   │   ├── [id]/
│   │   │   └── page.tsx
│   │   │
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── dbConfig/
│   │   └── dbConfig.ts
│   │
│   ├── helpers/
│   │   └── getDataFromToken.ts
│   │
│   ├── models/
│   │   └── userModels.js
│   │
│   └── middleware.ts
│
├── public/
├── .env
├── .gitignore
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md

