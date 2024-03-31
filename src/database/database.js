import mysql from "@fastify/mysql";

export const connectToDatabase = (fastify) => {
    fastify.register(mysql, {
        connectionString: "mysql://root@localhost:3306/mytasks",
    });
};

export const queryPromise = (connection, sql, values) => {
    return new Promise((resolve, reject) => {
        connection.query(sql, values, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
};
