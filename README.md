# Callix - Saas

This is a project that simulates the saas of [Callix](callix.com.br)

I intend to show some of my knowledge

## How to use

Run this command

```npm
npm i
```

Then you create a .env file and add this to it replacing the 
**password** and **database**

```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/database?schema=public"
```

Now you must create the docker container, you can use the following command
replacing **container-name** and **password**

```bash
docker run --name container-name -e POSTGRES_PASSWORD=password -d postgres
```

The next is run all migrations

```bash
npx prisma migrate deploy
```

The next step is populate the database with the following command

```bash
npx prisma db seed
```

And last but not least, run the api

```bash
npm run dev
```

Now you are ready to use the api with *insomnia* or *postman*

## Important

All routes with exception auth.routes needs 2 headers ***email*** filled with an user 
email and ***token*** filled with an user token.

I've never made an api documentation, that's why for now you need to look the routers 
to fill your *postman*, but I'm learning about this, as soon as possible I'll make it.

You can see the database with the following command
```bash
npx prisma studio
```