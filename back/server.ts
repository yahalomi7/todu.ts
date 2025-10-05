import express from "express";
import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
// import { expressMiddleware } from "@apollo/server/express4";
import bodyParser from "body-parser";
import { typeDefs } from "./types";
import { resolvers } from "./resolvers";

dotenv.config();
const app = express();

const server = new ApolloServer({ typeDefs, resolvers });
await server.start();

// Attach Apollo server to /graphql
// app.use("/graphql", bodyParser.json(), expressMiddleware(server));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/graphql`);
});
