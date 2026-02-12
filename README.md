# 🚀 CourseGenie – AI-Powered Course Generator

is an intelligent AI-driven platform that generates personalized courses with structured learning paths. It dynamically creates chapters and fetches relevant educational resources to enhance learner engagement.

🔗 Live Demo: https://ai-course-gen-ruddy.vercel.app/  
📂 Repository: https://github.com/Anup-Gupta01/ai-course-gen


## ✨ Key Features

### 🧠 AI Course Generation
Powered by Gemini API  
Difficulty levels: Beginner / Medium / Hard  
Dynamically generated chapters  

### 🎥 Smart Resource Integration
Fetches relevant videos via YouTube Data API  

### 🗄️ Structured Data Management
PostgreSQL database  
Drizzle ORM for type-safe queries  

### 🎨 Modern UI/UX
Built with Next.js + Tailwind CSS  
Fully responsive & clean interface  

### ⚡ Performance Focused
Optimized rendering & API calls  
Scalable architecture  


## 🛠️ Tech Stack

### Frontend
Next.js  
Tailwind CSS  

### Backend / APIs
Next.js API Routes / Server Actions  
Gemini API  
YouTube Data API  

### Database
PostgreSQL  
Drizzle ORM  

### Deployment
Vercel  


## 🧠 How It Works

1️⃣ User selects topic & difficulty  
2️⃣ Gemini API generates course structure  
3️⃣ YouTube API fetches video resources  
4️⃣ Data stored via PostgreSQL  
5️⃣ UI renders dynamic course  


## 🏗️ Architecture Overview

User → Next.js Frontend → API Layer  
                         ↓  
          ┌──────── Gemini API (AI Generation)  
          │  
          ├──────── YouTube API (Video Resources)  
          │  
          └──────── PostgreSQL (Drizzle ORM)  


## ⚙️ Getting Started

### 1️⃣ Clone the Repository
git clone https://github.com/your-username/coursegenie.git  
cd coursegenie  

### 2️⃣ Install Dependencies
npm install  

### 3️⃣ Setup Environment Variables
Create `.env.local`  

### 4️⃣ Run Development Server
npm run dev  

Visit → http://localhost:3000  


## 📦 Available Scripts

npm run dev  
npm run build  
npm run start  
npm run lint  


## 🗄️ Database Design

Core entities:

Users  
Courses  
Chapters  
Resources  

Managed using Drizzle ORM for scalability & maintainability.


## 🔮 Future Enhancements

✨ Authentication system  
✨ Save & export courses  
✨ Progress tracking  
✨ AI-based quizzes  
✨ Dashboard analytics  
