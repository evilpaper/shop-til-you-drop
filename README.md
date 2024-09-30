# Full Stack Ecommerce Store With Admin Dashboard From Scratch

This is a copy of Kyle Cooks (Web Dev Simplified) project `next-js-ecommerce-mvp` with a more elaborate README.
Intended purely for educational purposes.

## Features

- Ecommerce landing page (`/`) with products
- Products detail page (`/products`)
- Admin pages (`/admin`) with HTTP authentication (email/password)
- Global middleware to protect logged-in routes

## Tech Stack

- Framework: Next.js
- Database: SQLite
- ORM: Prisma
- Payments: Stripe
- UI Library: shadcn/ui

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/evilpaper/shop-til-you-drop
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Setup database

#### 3.1 Create a .env file and add database url

```bash
touch .env
```

Create a `.env` file in the root of the project. Get the content for the file from the repository maintainer. Copy and paste it into your file. It should simply contain a url to the database.

#### 3.2. Setup Primsa ORM

```bash
npx prisma init --datasource-provider sqlite
```

This creates a new prisma directory with a schema.prisma file and configures SQLite as your database. You're now ready to model your data and create your database with some tables.

#### 3.3. Run a migration to create database tables

At this point we have Prisma schema but no database yet. Run the following command in your terminal to create the SQLite database and the User and Post tables represented by your models:

```bash
npx prisma migrate dev --name init
```

This command did three things:

It created a new SQL migration file for this migration in the prisma/migrations directory.
It executed the SQL migration file against the database.
It ran prisma generate under the hood (which installed the @prisma/client package and generated a tailored Prisma Client API based on your models).

We now have a database. At this step you can run the project. But it won't contain any products. To add products we need to access the `/admin` pages. Let's do that next.

### 4. Setup HTTP authentication and access the admin pages

### 5. Setup Stripe integration

/////

DONE! You can now run the project locally!

/////

### Run locally

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Going to production
