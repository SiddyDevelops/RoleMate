# RoleMate

[Add an eye-catching project logo or banner here]

## Introduction

Welcome to our Role-Based Access Control (RBAC) system built with Node.js, TypeScript, and Prisma! This project provides a robust and flexible solution for managing access control within your applications. With a focus on modular components and ease of customization, our RBAC system empowers developers to implement fine-grained access control tailored to their specific requirements.

## Key Features
- User CRUD: Manage user entities with ease, including creation, retrieval, update, and deletion operations.

- Role CRUD: Define and maintain user roles to establish clear hierarchies and responsibilities.

- Resource CRUD: Dynamically manage the entities or functionalities users can access within the system.

- AccessMode CRUD: Customize access modes to specify the actions users can perform on resources (e.g., read, write, delete).

- Role to User CRUD: Associate roles with users to control their access based on responsibilities.

- Resource to User CRUD: Link specific resources to individual users, defining their access rights.

- AccessMode to User Resource CRUD: Establish relationships between access modes, users, and resources for precise permission control.

## Tech Stack

- Node.js
- TypeScript
- Prisma
- EJS

## Installation

Get started with our RBAC system by following the simple installation steps below:

```
git clone https://github.com/SiddyDevelops/RoleMate.git

cd rolemate

npm install

npx primsa migrate dev --name Init

npm run

```

## Project Structure

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