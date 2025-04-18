```markdown
# Express + Node.js + PostgreSQL + Prisma Boilerplate

An industry‑grade, production‑ready backend template featuring:

- **Node.js** & **Express**
- **PostgreSQL** via **Prisma** ORM (and optional **Knex** migrations)
- **Joi** for validation
- **bcryptjs** & **jsonwebtoken** for auth
- **UUID** primary keys
- **dotenv**, **cors**, **helmet**, **morgan** for environment, CORS, security & logging
- **Global error handling**, standard JSON response format
- **Seed** support

---

## 📂 Project Structure
backend-boilerplate/
├── prisma/
│   ├── schema.prisma         # Prisma data model
│   └── seed.js               # Seed script
├── src/
│   ├── config/
│   │   ├── index.js          # Loads .env
│   │   └── database.js       # Initializes PrismaClient
│   ├── migrations/           # (Optional) Knex migration scripts
│   ├── seeders/              # (Optional) Knex seeders
│   ├── utils/
│   │   ├── ApiError.js       # Custom error class
│   │   └── responseHandler.js# Standard JSON responses
│   ├── middlewares/
│   │   ├── validate.js       # Joi validation wrapper
│   │   ├── notFound.js       # 404 handler
│   │   └── errorHandler.js   # Global error catcher
│   ├── validations/
│   │   └── user.validation.js# Joi schemas
│   ├── services/
│   │   └── user.service.js   # Business logic
│   ├── controllers/
│   │   └── user.controller.js# HTTP request handlers
│   ├── routes/
│   │   └── user.route.js     # Express routers
│   ├── app.js                # Express app setup
│   └── server.js             # Server launcher
├── .env                      # Environment variables
├── package.json              # Dependencies & scripts
└── README.md                 # ← You are here

---

## 🛠️ Prerequisites

- **Node.js** v16+  
- **npm** (or **yarn**)  
- **PostgreSQL** running locally  
- `npx` (bundled with npm)

---

## ⚙️ Installation

1. **Clone** the repo:
   ```bash
   git clone <your-repo-url> backend-boilerplate
   cd backend-boilerplate
   ```

2. **Install** dependencies:
   ```bash
   npm install
   ```

3. **Create** a `.env` file in the project root:
   ```dotenv
   PORT=3000
   DATABASE_URL=postgresql://<DB_USER>:<DB_PASS>@localhost:5432/<DB_NAME>?schema=public
   JWT_SECRET=your_jwt_secret
   ```
   > Replace `<DB_USER>`, `<DB_PASS>`, `<DB_NAME>` and `your_jwt_secret` with your values.

---

## 🗄️ Database Setup

1. **Ensure** PostgreSQL is running.
2. **Create** your database:
   ```bash
   createdb <DB_NAME>
   ```
3. **(Optional) Knex migrations**  
   If you prefer Knex for migrations/seeds:
   ```bash
   npx knex migrate:latest --env development
   npx knex seed:run       --env development
   ```
   > Check `knexfile.js`, `src/migrations/` and `src/seeders/`.

4. **Prisma Migrations**  
   Prisma will manage schema & client:
   ```bash
   # Generate client
   npx prisma generate

   # Dev migration
   npx prisma migrate dev --name init

   # Deploy migrations (e.g. CI / production)
   npx prisma migrate deploy
   ```

---

## 🌱 Seeding

### Prisma Seed

- **Script location**: `prisma/seed.js`
- **Configure** in `package.json`:
  ```jsonc
  "prisma": {
    "seed": "node prisma/seed.js"
  },
  "scripts": {
    "seed": "prisma db seed"
  }
  ```
- **Run**:
  ```bash
  npm run seed
  # or
  npx prisma db seed
  ```

### Knex Seed (Optional)

```bash
npx knex seed:run --env development
```

---

## 📜 NPM Scripts

| Script                | Command                                        | Description                           |
|-----------------------|------------------------------------------------|---------------------------------------|
| `npm run dev`         | `nodemon src/server.js`                        | Start in development with auto‑reload |
| `npm start`           | `node src/server.js`                           | Start in production                   |
| `npm run prisma:generate` | `prisma generate`                         | Generate Prisma client                |
| `npm run prisma:migrate`  | `prisma migrate deploy`                   | Apply Prisma migrations               |
| `npm run prisma:migrate:dev` | `prisma migrate dev --name init`      | Create & apply migrations (dev)       |
| `npm run seed`        | `prisma db seed`                               | Seed database via Prisma              |
| `npm run knex:migrate`| `knex migrate:latest --env development`        | (Optional) Run Knex migrations        |
| `npm run knex:seed`   | `knex seed:run --env development`              | (Optional) Run Knex seeds             |

---

## 🚀 Running the Server

```bash
# Development mode
npm run dev

# Production mode
npm start
```

Your API is now available at `http://localhost:<PORT>/api/users`  
- **POST** `/api/users` — create a new user  
- **GET**  `/api/users` — list all users  

---

## 📁 Folder Overview

- **`prisma/schema.prisma`**  
  Prisma data model and generator config.
- **`prisma/seed.js`**  
  Seed script for initial data.
- **`src/config/`**  
  App configuration: environment loader & Prisma client.
- **`src/migrations/`, `src/seeders/`**  
  (Optional) Knex migrations and seeders.
- **`src/utils/`**  
  Shared helpers: `ApiError` & `responseHandler`.
- **`src/middlewares/`**  
  Request validation, 404 handling, global error handler.
- **`src/validations/`**  
  Joi schemas for request payloads.
- **`src/services/`**  
  Business logic abstracted away from HTTP.
- **`src/controllers/`**  
  HTTP handlers that call services and send responses.
- **`src/routes/`**  
  Express routers, grouped by resource.
- **`src/app.js`**  
  Express app setup (middleware, routes, error handling).
- **`src/server.js`**  
  App entry point (starts the HTTP server).

---

## 🔒 Security & Best Practices

- **Validation** with Joi on every request.
- **Centralized error handling** returning consistent JSON.
- **UUID** primary keys for immutability.
- **Password hashing** with bcryptjs.
- **JWT auth** with `jsonwebtoken`.
- **Security headers** via Helmet.
- **CORS** enabled globally.
- **Request logging** with Morgan.

---

## 🤝 Contributing

1. Fork the repo  
2. Create a feature branch  
3. Commit your changes  
4. Open a pull request  

---

## 📄 License

MIT © Fadi960