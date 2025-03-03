import express from "express";
import cors from "cors";
import setupSwagger from "./swaggerConfig.js";
import tasksRoutes from "./routes/tasks.js";

const app = express();
app.use(express.json());
app.use(cors());

// ✅ Redirect root URL `/` to Swagger UI `/api-docs`
app.get("/", (req, res) => {
    res.redirect("/api-docs/");
  });

// ✅ Register routes
app.use("/tasks", tasksRoutes);

// ✅ Setup Swagger
setupSwagger(app);

const PORT = 5001;
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
