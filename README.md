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

### 3. Add environmental variables

Get the `.env` file from the repository owner.

### 4. Setup Primsa ORM

```bash
npx prisma init --datasource-provider sqlite
```

This creates a new prisma directory with a schema.prisma file and configures SQLite as your database. You're now ready to model your data and create your database with some tables.

### 5. Run a migration to create your database tables with Prisma Migrate

At this point we have Prisma schema but no database yet. Run the following command in your terminal to create the SQLite database and the User and Post tables represented by your models:

```bash
npx prisma migrate dev --name init
```

This command did three things:

It created a new SQL migration file for this migration in the prisma/migrations directory.
It executed the SQL migration file against the database.
It ran prisma generate under the hood (which installed the @prisma/client package and generated a tailored Prisma Client API based on your models).

### 6. Run the project

We can now run the project with:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Setup Stripe integration

## Access Admin pages
