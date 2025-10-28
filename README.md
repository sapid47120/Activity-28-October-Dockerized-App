# Dockerized Node.js Web Application
---

## 🧾 **README.md**

```markdown
# 🚀 Dockerized Node.js Application

### 🏫 Riphah International University – I-14 Main Campus  
**Subject:** DevOps  
**Submitted to:** Sir Sherjeel Gilani  
**Submitted by:** Arslan Tahir  
**SAP ID:** 47120  

---

## 📘 **Project Overview**

This project demonstrates how to **containerize a Node.js web application using Docker** and manage it efficiently using **Docker Compose**.  
It shows how applications can be deployed in isolated containers, ensuring portability, scalability, and consistency across environments.

The web app displays a success message when running and provides API endpoints to check server functionality.

---

## ⚙️ **Project Features**

- 🧩 Simple Node.js Express server  
- 🐳 Dockerfile and docker-compose setup for containerization  
- 🌐 Static HTML frontend served through Express  
- ⚡ Basic API routes (`/api`, `/status`)  
- 📦 Organized folder structure with `src`, `public`, and `config` directories  
- ✅ Tested locally using Docker Desktop and VS Code terminal

---

## 📁 **Project Structure**

```

dockerized-nodejs-app/
│
├── public/               # Static frontend (HTML, CSS)
│   └── index.html
│
├── src/                  # Application source code
│   ├── app.js
│   └── server.js
│
├── config/               # Future configuration files
│
├── Dockerfile            # Docker image configuration
├── docker-compose.yml    # Docker Compose setup
├── package.json          # Node dependencies and scripts
├── package-lock.json
└── README.md

````

---

## 🐳 **Docker Setup**

### **1. Build the Docker Image**
```bash
docker build -t dockerized-nodejs-app .
````

### **2. Run the Container**

```bash
docker run -d -p 3000:3000 dockerized-nodejs-app
```

### **3. Or Use Docker Compose**

```bash
docker-compose up
```

Then open your browser and visit:
👉 [http://localhost:3000](http://localhost:3000)

---

## 🌍 **App Routes**

| Route     | Description                |
| --------- | -------------------------- |
| `/`       | Displays success HTML page |
| `/api`    | Returns sample JSON data   |
| `/status` | Returns server status info |

---

## 🧠 **Learning Outcomes**

* Understanding of **containerization concepts**
* Practical use of **Dockerfile** and **Docker Compose**
* Experience running and verifying **Node.js containers**
* Familiarity with **frontend-backend integration inside containers**
* Demonstration of **DevOps lifecycle basics**

---

## 🧰 **Technologies Used**

* **Node.js** – Backend runtime environment
* **Express.js** – Web framework for Node
* **Docker** – Containerization platform
* **Docker Compose** – Multi-container orchestration
* **VS Code** – Development environment

---

## 🧾 **Sample Output**

After running the container, visiting [http://localhost:3000](http://localhost:3000) displays:

```
🚀 Dockerized Node.js App Running Successfully!
Welcome to your Dockerized web application.
```

You can also test:

* `/api` → JSON response
* `/status` → Server uptime and message

---

## 🏁 **Conclusion**

This project successfully demonstrates the **DevOps pipeline’s first phase** — containerization.
It provides a base to extend further with CI/CD, monitoring, and Kubernetes integration.

---

© 2025 – Arslan Tahir (SAP ID: 47120)
Riphah International University – I-14 Campus

```

---

Would you like me to make this README **more report-style** (like for PDF submission) with section titles such as *Objective*, *Tools Used*, *Implementation*, *Results*, and *Conclusion*?  
I can convert it into a ready-to-submit `.pdf` version next.
```
