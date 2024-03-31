import { queryPromise } from "../database/database.js";
import { sendResponse } from "../utils/response.js";
export const defineRoutes = (fastify) => {
    fastify.get("/tasks/:id", async (request, reply) => {
        try {
            const id = Number(request.params.id);
            const result = await queryPromise(fastify.mysql, "SELECT * FROM tasks WHERE id = ?", [id]);
            sendResponse(reply, null, result);
        } catch (error) {
            sendResponse(reply, error, null);
        }
    });

    fastify.post("/tasks", async (request, reply) => {
        try {
            const { name, startDate, endDate, status } = request.body;
            const result = await queryPromise(
                fastify.mysql,
                "INSERT INTO tasks (name, startDate, endDate, status) VALUES (?, ?, ?, ?)",
                [name, startDate, endDate, status]
            );
            sendResponse(reply, null, result);
        } catch (error) {
            sendResponse(reply, error, null);
        }
    });

    fastify.put("/tasks/:id", async (request, reply) => {
        try {
            const id = Number(request.params.id);
            const { name, startDate, endDate, status } = request.body;
            const result = await queryPromise(
                fastify.mysql,
                "UPDATE tasks SET name = ?, startDate = ?, endDate = ?, status = ? WHERE id = ?",
                [name, startDate, endDate, status, id]
            );
            sendResponse(reply, null, result);
        } catch (error) {
            sendResponse(reply, error, null);
        }
    });
};
