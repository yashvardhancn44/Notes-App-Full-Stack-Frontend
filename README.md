# 📝 Notes App

- 🚀 This project is designed to provide a fully functional Notes app.
- It’s powered by **React**, **Express.js**, **Prisma ORM** and **PostgreSQL**. Let's dive into the details! 😎
- ▶️ [**_Demo-video_**](https://www.youtube.com/watch?v=iCJOGEtGtWo)

---

## 🛠️ **Tech Stack**

- **Frontend:** React
- **Backend:** Express.js, Node.js
- **Database:** PostgreSQL with Prisma ORM
- **Tools used:** VSCode, Thunder Client extention.

---

## 💡 **Project Features**

- **Add Notes** ➕  
  Users can easily create new notes and save them to the database.

- **Edit Notes** ✏️  
  Modify existing notes to keep information up-to-date.

- **Delete Notes** ❌  
  Remove notes that are no longer needed.

- **Data Persistence** 💾  
  All notes are fetched from the database, ensuring that data is saved and available.

---

## 🚀 **Project in Action:**

Check out ▶️ [**_Demo-video_**](https://www.youtube.com/watch?v=iCJOGEtGtWo).

<p align="left">
  <a href="https://www.youtube.com/watch?v=iCJOGEtGtWo" target="_blank">
  <img src="https://res.cloudinary.com/dxvafakmn/image/upload/v1727318093/notes-app-files/sjcqr7cuhpq8aaqviaei.png" alt="add-notes-image" width="400" />
  </a>
  <a href="https://www.youtube.com/watch?v=iCJOGEtGtWo" target="_blank">
  <img src="https://res.cloudinary.com/dxvafakmn/image/upload/v1727318093/notes-app-files/rcu6ynwjdktvrwhbtvtu.png" alt="edit-notes-image" width="400" />
  </a>
</p>

---

## 🔍 **Project Architecture:**

<p align="left">
  <img src="https://res.cloudinary.com/dxvafakmn/image/upload/v1727321664/system-diagrams/im1b0dchisexdponi5qc.png" alt="notes-sd-image" width="500" />
</p>

- **React (Frontend)**: : The user interface is built using React, providing a dynamic and responsive experience.Users can create, read, update, and delete notes seamlessly
- **Express, Prims ORM and PostgreSQL (Backend)**: The backend API is powered by Express.js. The express app listens to `/api/notes` endpoint and performs the necessary req operations. Utilized Prisma ORM as an abstraction layer to facilitate seamless interactions with our PostgreSQL database.

---

## 🚀 **Getting Started**

### 1. **Clone the Repository**

In the root, create two folder with the below names, navigate and clone the repo:

```bash
cd notes-app-server
git clone https://github.com/yashvardhancn44/Notes-App-Fullstack-Backend.git

cd ../notes-app-ui
git clone https://github.com/yashvardhancn44/Notes-App-Full-Stack-Frontend.git
```

### 2. **Install Dependencies**

Install Dependencies in each directory.

```bash
npm install
```

### 3. **Environment Variables**

Create a `.env` file in the `notes-app-server` directory

```bash
DATABASE_URL="Add-your-postgresURL"
```

### 4. **Run the project**

Open seperate 2 Bash terminals, navigate to respective directories and run.

```bash
npm start
```
