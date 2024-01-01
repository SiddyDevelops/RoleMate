# 🛡️ RoleMate

![rbac](https://github.com/SiddyDevelops/RoleMate/assets/72121163/6b92f875-edee-44c9-a7fb-b5d2c1aacc1f)

## 🚀🚀 Introduction

Welcome to our Role-Based Access Control (RBAC) system built with Node.js, TypeScript, and Prisma! This project provides a robust and flexible solution for managing access control within your applications. With a focus on modular components and ease of customization, our RBAC system empowers developers to implement fine-grained access control tailored to their specific requirements.

## 📍 Key Features
- User CRUD: Manage user entities with ease, including creation, retrieval, update, and deletion operations.
- Role CRUD: Define and maintain user roles to establish clear hierarchies and responsibilities.
- Resource CRUD: Dynamically manage the entities or functionalities users can access within the system.
- AccessMode CRUD: Customize access modes to specify the actions users can perform on resources (e.g., read, write, delete).
- Role to User CRUD: Associate roles with users to control their access based on responsibilities.
- Resource to User CRUD: Link specific resources to individual users, defining their access rights.
- AccessMode to User Resource CRUD: Establish relationships between access modes, users, and resources for precise permission control.

## ⚒️ Tech Stack

- Node.js
- TypeScript
- Prisma
- EJS

## 📖 API References
[<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">](https://god.gw.postman.com/run-collection/17353488-7aa98eb6-b9e0-4629-9834-1a36b975f6f1?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D17353488-7aa98eb6-b9e0-4629-9834-1a36b975f6f1%26entityType%3Dcollection%26workspaceId%3Db9a31822-6c13-4c69-ac25-9286501c8a13)

[![Postman API Docs](https://img.shields.io/badge/Postman%20API%20Docs-FF6C37?style=for-the-badge&logo=Postman&logoColor=white)](https://documenter.getpostman.com/view/17353488/2s9YsDkv2J)

## 🔧 Installation

Get started with our RBAC system by following the simple installation steps below:

```
git clone https://github.com/SiddyDevelops/RoleMate.git

cd rolemate

npm install

npx prisma init

npx primsa migrate dev --name Init

npm run

```

## 📂 Project Structure

```
RBAC
├─ .git
├─ .gitignore
├─ package-lock.json
├─ package.json
├─ prisma
│  ├─ dev.db
│  └─ schema.prisma
└─ src
   ├─ controllers
   │  ├─ accessModeController.ts
   │  ├─ resourceControllers.ts
   │  ├─ roleControllers.ts
   │  ├─ userController.ts
   │  ├─ userResourceAccessModeController.ts
   │  ├─ userResourceController.ts
   │  └─ userRoleController.ts
   ├─ index.ts
   ├─ middlewares
   ├─ public
   │  └─ styles
   │     └─ style.css
   ├─ routes
   │  ├─ accessModeRoutes.ts
   │  ├─ resourceRoute.ts
   │  ├─ roleRoutes.ts
   │  ├─ userResourceAccessModeRoutes.ts
   │  ├─ userResourceRoute.ts
   │  ├─ userRoleRoute.ts
   │  └─ userRoutes.ts
   ├─ utils
   │  └─ constants.ts
   └─ views
      └─ script.ejs

```

## 🗂️ Database Schema
![db schema](https://github.com/SiddyDevelops/RoleMate/assets/72121163/90ef2645-49a1-468b-a728-2919b3091c8a)

![prisma](https://github.com/SiddyDevelops/RoleMate/assets/72121163/13b66e1d-a0ac-4208-9825-14ccd6303f22)

## 👨‍💻 From the Developer:

✨ Connect With Me!! 🚀
- <a target="_blank" href="https://siddydevelops.netlify.app/">Siddharth Singh<a/>
