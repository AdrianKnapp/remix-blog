# Welcome to Remix Blog!
## Initial setup
1. Clone the project.

2. Run npm install in your project folder.
```bash
npm install
```

3. Create a Mongo DB instance (https://www.mongodb.com/)

4. Enable your current IP to connect to Mongo DB.

4. Connect your cluster with "Connect your application" option, that generates an url.

5. Use that url in your `.env` file, if you have not, create it.
```bash
DATABASE_URL="url"
```

6. Push the prisma model to your Mongo DB cluster.
```bash
npx prisma db push
```

7. Run the app
```bash
npm run dev
```

### Voilà, that is all!