import express from "express";
import cors from "cors";
import setupSwagger from "./swaggerConfig.js";

const app = express();
app.use(express.json());
app.use(cors());

const tasks = [];

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Get all tasks
 *     description: Retrieve the full list of tasks.
 *     responses:
 *       200:
 *         description: A list of tasks.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   text:
 *                     type: string
 *                     example: Buy groceries
 *                   completed:
 *                     type: boolean
 *                     example: false
 */
app.get("/tasks", (req, res) => {
    console.log("GET /tasks called");
    res.json(tasks);
  });
  
  /**
   * @swagger
   * /tasks:
   *   post:
   *     summary: Add a new task
   *     description: Add a new task to the to-do list.
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               text:
   *                 type: string
   *                 example: Learn Swagger
   *     responses:
   *       201:
   *         description: Task added successfully
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 id:
   *                   type: integer
   *                   example: 1711939489473
   *                 text:
   *                   type: string
   *                   example: Learn Swagger
   *                 completed:
   *                   type: boolean
   *                   example: false
   */
  app.post("/tasks", (req, res) => {
    const newTask = { id: Date.now(), text: req.body.text, completed: false };
    tasks.push(newTask);
    console.log("Task added:", newTask);
    res.status(201).json(newTask);
  });
  

// ✅ Now setup Swagger **after** all routes
setupSwagger(app);

const PORT = 5001;
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
