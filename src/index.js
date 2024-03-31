import Fastify from "fastify";
import { connectToDatabase } from "./database/database.js";
import { defineRoutes } from "./routes/routes.js";
const fastify = Fastify({ log: true });

connectToDatabase(fastify);
defineRoutes(fastify);

const startServer = async () => {
    try {
        await fastify.listen({ port: 3001 });
        console.log("Servidor rodando", fastify.server.address());
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

startServer();
