import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import path from "path";
import swaggerDocs from "./docs/swaggerDocs.js";

const options = {
  definition: swaggerDocs,
  apis: [path.join(path.resolve(), "routes", "tasks.js")],
};

const swaggerSpec = swaggerJsdoc(options);

const setupSwagger = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

export default setupSwagger;
