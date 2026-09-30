# Recipe Book

A full-stack Recipe Book application built to practice building a RESTful CRUD API and connecting it with a React frontend.

## Tech Stack

### Backend

- Node.js
- Express
- TypeScript
- MongoDB
- Mongoose

### Frontend

- React
- TypeScript
- TanStack Query
- Tailwind CSS

### Development

- Docker
- Docker Compose

## Features

### Recipes API

- Create a recipe
- Get all recipes
- Get a single recipe
- Update a recipe
- Delete a recipe

### API Endpoints

| Method | Endpoint           | Description        |
| ------ | ------------------ | ------------------ |
| POST   | `/api/recipes`     | Create a recipe    |
| GET    | `/api/recipes`     | Get all recipes    |
| GET    | `/api/recipes/:id` | Get a recipe by ID |
| PATCH  | `/api/recipes/:id` | Update a recipe    |
| DELETE | `/api/recipes/:id` | Delete a recipe    |

## Project Structure

```text
recipe-book/
├── client/
├── server/
│   ├── src/
│   │   ├── controllers/
│   │   ├── db/
│   │   ├── models/
│   │   ├── routes/
│   │   └── server.ts
│   ├── .env
│   ├── package.json
│   └── tsconfig.json
├── docker-compose.yml
└── README.md
```
