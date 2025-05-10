import express from "express";

const router = express.Router();
const tasks = [];

// Get all tasks
router.get("/", (req, res) => {
  res.json(tasks);
});

// Create a new task
router.post("/", (req, res) => {
  const newTask = {
    id: Date.now(),
    description: req.body.description,
    isCompleted: false,
    createdOn: new Date().toISOString(),
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Edit task description
router.patch("/:id", (req, res) => {
  const task = tasks.find((t) => t.id == req.params.id);
  if (!task) return res.status(404).json({ message: "Task not found" });

  task.description = req.body.description || task.description;
  res.json(task);
});

// Mark task as complete
router.put("/:id/complete", (req, res) => {
  const task = tasks.find((t) => t.id == req.params.id);
  if (!task) return res.status(404).json({ message: "Task not found" });

  task.isCompleted = true;
  res.json(task);
});

// Delete a task
router.delete("/:id", (req, res) => {
  const index = tasks.findIndex((t) => t.id == req.params.id);
  if (index === -1) return res.status(404).json({ message: "Task not found" });

  const deletedTask = tasks.splice(index, 1);
  res.json({ message: "Task deleted", task: deletedTask[0] });
});

export default router;
