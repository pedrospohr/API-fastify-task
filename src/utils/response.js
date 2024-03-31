export const sendResponse = (reply, error, result) => {
    if (error) {
        reply.send(error);
        return;
    }
    reply.send(result);
};
