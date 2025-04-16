# NewsFeed – Fullstack Web App Project

---
Welcome to **NewsFeed**, a fullstack web application I developed as a part of the experience provided by the **Bloomberg Tech Lab**. The tech lab introduced me to key industry tools and practices, and I built upon that foundation to deepen my understanding of fullstack development using React, Flask, Redis, and Docker.

## Overview

NewsFeed is a news aggregation web app that pulls in articles, displays a featured story, and showcases a feed of headlines. The goal was to create a performant and maintainable system that mirrors production-grade architecture using widely adopted technologies.

---

## Tech Stack

- **React**: For building interactive UIs  
- **Flask**: Lightweight backend API built in Python  
- **Redis**: Used for caching to optimize performance  
- **Docker**: Containerizes both frontend and backend for easy deployment

---

## What I Learned

- **Frontend Development**: Built reusable UI components using React and TypeScript  
- **Backend Development**: Created RESTful APIs using Flask  
- **Caching Strategies**: Integrated Redis to reduce response times and offload database hits  
- **DevOps Fundamentals**: Used Docker and Docker Compose to orchestrate multi-service development environments

---

## Main Features

### Frontend (React)

- Displays featured article with image, author, and summary  
- News feed component shows latest articles  
- Responsive and styled with Tailwind CSS

### Backend (Flask + Redis)

- RESTful endpoints to serve article data  
- Redis used to cache popular endpoints

### Deployment with Docker

- Entire application runs in isolated containers  
- Simple setup using `make` commands and Docker Compose

---

## Getting Started

### Prerequisites

- [Docker](https://www.docker.com/)  
- [Git](https://git-scm.com/)  
- [VS Code](https://code.visualstudio.com/)  
- VS Code Dev Containers extension

### Clone & Run

```bash
git clone https://github.com/YOUR-USERNAME/newsfeed-app.git
cd newsfeed-app
```

## Credits
https://github.com/bloomberg/bbit-learning-labs/tree/main

# NewsFeed
