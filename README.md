# 🌿 Arogya Mind Wellness App

Arogya Mind is a modern, comprehensive MERN stack web application designed for mental wellness and health tracking. It features an interactive UI, chatbot integration with Google's Gemini AI, secure user authentication, and data-driven insights to manage personal wellbeing.

## ✨ Features

- **Personalized Dashboard:** Track your daily progress with beautiful analytics and streak tracking.
- **AI Chatbot:** Integrated AI-powered chatbot using Gemini AI for wellness advice.
- **Secure Authentication:** JWT-based user authentication and data protection.
- **Dynamic UI:** Smooth animations, responsive design, and glassmorphism elements built with Tailwind CSS.

## 🚀 Built With

- **MongoDB / Mongoose** (Database)
- **Express.js** (Backend Framework)
- **React & Vite** (Frontend Library & Build Tool)
- **Node.js** (Runtime Environment)
- **Tailwind CSS** (Styling)

---

## 🛠️ Local Setup Instructions

Follow these instructions to run the project on your local machine. 

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine. *(You do not need MongoDB installed locally, as it connects to a cloud database).*

### 1. Backend Setup (Server)
1. Open a terminal and navigate to the server folder:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file inside the `server` folder with the following variables:
   ```env
   PORT=5000
   MONGO_URI=<YOUR_MONGO_URI>
   JWT_SECRET=<YOUR_JWT_SECRET>
   GEMINI_API_KEY=<YOUR_GEMINI_API_KEY>
   ```
4. Start the server:
   ```bash
   npm run dev
   ```

### 2. Frontend Setup (Client)
1. Open a **second, separate terminal** and navigate to the client folder:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the application:
   ```bash
   npm run dev
   ```

### 3. Open the App
Vite will provide a link in your terminal completely setting up the app (usually **http://localhost:5173/**). Open it in your browser and enjoy!

---
*Created by Vishal Girase*
