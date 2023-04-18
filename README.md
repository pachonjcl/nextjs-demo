# Remix vs NextJS

Update this with your project details as you go.

# What is this demo?

Remix and NextJS are frameworks for building web applications with React both popular server-side rendering (SSR) both are supported for deploy on Vercel.

# How do you run it?

Use node at least v16

Install dependencies:
`npm install`

Create a .env file with the following values:

```
DATABASE_URL="file:dev.db"
SESSION_SECRET=something
```

Setup and Seed the database (We are using prisma with sqlite for simplicity)

```
npx prisma db push
npx prisma db seed
```

Run the application

```sh
npm run dev
```

# Understand
### What competitors are there?

- Gatsby
- Create React App (although it is no longer suggested)

### Why would this be any different than the competition?

- NextJS is backed up by Vercel and more than 2.6K contributors
- Remix has more than 500 contributors.

# Conclude
### Would you recommend using this technology in the future?

- Definitely both frameworks provide very useful features to run react components and are easy to understand once you got the basics.

### What situations would it be more useful than the competitors?

- Remix provides a more browser like experiences where you have the full control of the browser properties. While NextJS provides a more robust application structure for more complex projects.
