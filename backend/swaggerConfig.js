import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "To-Do List API",
      version: "1.0.0",
      description: "API documentation for the To-Do List application",
    },
    servers: [
      {
        url: "http://localhost:5001", // Update the port if changed
        description: "Local server",
      },
    ],
  },
  apis: ["./server.js"], // Specify files where API routes are documented
};

const swaggerSpec = swaggerJsdoc(options);

const setupSwagger = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

export default setupSwagger;
