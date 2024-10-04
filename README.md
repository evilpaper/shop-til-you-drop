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

### 3. Add .env file for environmental variables

Create a `.env` file in the root of the project.

```bash
touch .env
```

This file will hold all of your environmental variables. We will populate it step by step below.

### 4. Setup database

#### 4.1 Setup Primsa ORM

```bash
npx prisma init --datasource-provider sqlite
```

This creates a new prisma directory with a schema.prisma file and configures SQLite as your database. You're now ready to model your data and create your database with some tables.

#### 4.2 Run a migration to create database tables

At this point we have Prisma schema but no database yet. Run the following command in your terminal to create the SQLite database and the User and Post tables represented by your models:

```bash
npx prisma migrate dev --name init
```

This command did three things:

It created a new SQL migration file for this migration in the prisma/migrations directory.
It executed the SQL migration file against the database.
It ran prisma generate under the hood (which installed the @prisma/client package and generated a tailored Prisma Client API based on your models).

We now have a database.

#### 4.3 Add database url to your environmental variables

1. `DATABASE_URL`: "file:./dev.db"

Our project can now access our database.

At this step you can run the project. But it won't contain any products. To add products we need to access the `/admin` pages. Let's do that next.

### 5. Setup HTTP authentication and access the admin pages

This one is a bit tricky. To access the admin pages we will add a username and hashed password to our environmental variables.

These are the values we will need:

1. `ADMIN_USERNAME`: Any username of you liking. Decide yourself.
1. `HASHED_ADMIN_PASSWORD`: A hased password. Check line 6 in the file isValidPassword for instructions on how create it.

Once added we can access the admin pages on url `/admin` and add products in the user interface.

### 6. Setup Stripe integration

Create a Stripe account. Use it in test mode. Update the values for the following environmental variables:

1. `STRIPE_SECRET_KEY`: Take the value from you Stripe account
1. `NEXT_PUBLIC_STRIPE_PUBLIC_KEY`: Take the value from you Stripe account
1. `NEXT_PUBLIC_SERVER_URL`: http://localhost:3000 when running locally

/////

DONE! You can now run the project locally with `pnpm dev`! Happy hacking!

/////

### Run locally

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
