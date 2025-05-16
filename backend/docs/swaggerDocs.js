const swaggerJsdoc = {
  openapi: "3.0.0",
  info: {
    title: "To-Do List API",
    version: "1.0.0",
    description: "API documentation for the To-Do List application",
  },
  servers: [
    {
      url: "http://localhost:5001",
      description: "Local server",
    },
  ],
  paths: {
    "/tasks": {
      get: {
        summary: "Get all tasks",
        description: "Retrieve the full list of tasks.",
        responses: {
          200: {
            description: "A list of tasks.",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      id: { type: "integer", example: 1 },
                      description: { type: "string", example: "Buy groceries" },
                      isCompleted: { type: "boolean", example: false },
                      createdOn: {
                        type: "string",
                        format: "date-time",
                        example: "2024-05-10T14:48:00.000Z",
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      post: {
        summary: "Add a new task",
        description: "Create a new task.",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  description: {
                    type: "string",
                    example: "Learn Swagger",
                  },
                },
                required: ["description"],
              },
            },
          },
        },
        responses: {
          201: {
            description: "Task added successfully",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    id: { type: "integer", example: 1 },
                    description: { type: "string", example: "Learn Swagger" },
                    isCompleted: { type: "boolean", example: false },
                    createdOn: {
                      type: "string",
                      format: "date-time",
                      example: "2024-05-10T14:48:00.000Z",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    "/tasks/{id}": {
      patch: {
        summary: "Edit task description",
        description: "Update the description of a task by ID.",
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
            schema: { type: "integer" },
            description: "ID of the task to update.",
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  description: {
                    type: "string",
                    example: "Updated task description",
                  },
                },
              },
            },
          },
        },
        responses: {
          200: { description: "Task updated successfully." },
        },
      },
      delete: {
        summary: "Delete a task",
        description: "Removes a task by ID.",
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
            schema: { type: "integer" },
            description: "ID of the task to delete.",
          },
        ],
        responses: {
          200: { description: "Task deleted successfully." },
        },
      },
    },
    "/tasks/{id}/complete": {
      put: {
        summary: "Mark task as complete",
        description: "Updates a task's status to completed.",
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
            schema: { type: "integer" },
            description: "ID of the task to mark as complete.",
          },
        ],
        responses: {
          200: { description: "Task marked as complete successfully." },
        },
      },
    },
  },
};

export default swaggerJsdoc;
