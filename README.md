# 🚀 Netflix-GPT: AI-Powered Movie Discovery

[Netflix-GPT 😍](https://gpt-netflex.netlify.app/), is a modern, AI-powered movie search platform crafted from scratch using React and Vite. It seamlessly combines the familiar user interface of Netflix with the advanced intelligence of OpenAI's GPT, enabling users to discover movies through more intuitive and natural language queries.

The application also utilizes **Tailwind CSS** for a modern, responsive UI and integrates **Firebase Authentication** to ensure secure and seamless user sign-in and session management.


> 💡 _This project serves as a comprehensive demonstration of React development, integrating cutting-edge AI functionalities with a user-friendly design._


## 🌐 Live Demo

Experience Netflix-GPT in action:

🚀 **Try the app live:**  
[https://gpt-netflex.netlify.app/](https://gpt-netflex.netlify.app/)

📦 **API Proxy Server:**  
[https://tmdb-proxy-server-w1ng.onrender.com/](https://tmdb-proxy-server-w1ng.onrender.com)


## 🔧  Regional Blocking / ISP Issue Fix

During development, it was identified that certain Internet Service Providers (ISPs), particularly in regions like India (e.g., users on Jio networks), may block direct access to the TMDB API. This impediment prevents the application from fetching essential movie and TV show data.

To overcome this, a dedicated backend proxy server has been developed and deployed on Render. This proxy acts as an intermediary, securely fetching data from the TMDB API and relaying it to the client application, thereby bypassing any ISP-level restrictions.

🔗 [TMDB Proxy Server GitHub Repository](https://github.com/work-saddam/tmdb-proxy-server)  
🌐 Example API Endpoint: `https://tmdb-proxy-server-w1ng.onrender.com`


## 🔥 Features

- 🎬 **Smart Search with GPT**  
  Leverage the power of AI to search for movies in intelligent and flexible ways:
  - By Title 
  - By Genre (e.g., comedy, sci-fi, action) 
  - By Actor/Actress  
  - Through Natural Language Descriptions (e.g., "a movie where a guy dreams inside a dream" → Inception)

- 🔐 **Google Firebase Authentication**
  Provides secure and robust user authentication, allowing users to sign up, log in, and manage their sessions with ease.

- ⚡ **React + Vite**  
  Fast and modern frontend setup for a blazing-fast user experience.

- 🧠 **OpenAI Integration**  
  Converts natural language input into meaningful search queries.

- 📱 **Responsive Design**  
  Mobile-first and fully responsive for all devices.


## 💻  Technologies Used
- **React** – UI library  
- **Vite** – Lightning-fast frontend build tool  
- **OpenAI GPT** – Natural language movie search  
- **Tailwind CSS** – Utility-first responsive design  
- **Firebase Authentication** – Secure user auth and session handling  
- **TMDB API** – Movie data source  
- **Node.js + Express (Render)** – Proxy backend for API access  
- **Netlify** – Frontend deployment  
- **Render** – Hosting the TMDB proxy server

## 📁 Project Structure


```bash
netflix-gpt/
│
├── public/             # Static assets
├── src/
│   ├── components/     # Reusable UI components
│   ├── hooks/          # Custom hooks (e.g., useGPT)
│   ├── utils/          # Constants and helper functions
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── vite.config.js
└── README.md

```

## 🔗 Connect

👨‍💻 Open to collaborations and feedback!  Feel free to connect with me:

- [My LinkedIn Profile](https://www.linkedin.com/in/saddam-hussein786)
- [My GitHub Profile](https://github.com/work-saddam)