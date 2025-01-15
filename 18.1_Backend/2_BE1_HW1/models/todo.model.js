// title (String): The title or name of the todo item. This field is required.
// description (String): Additional details or description of the todo item.
// priority (String): Priority level of the todo item. Choose from: 'Low', 'Medium', 'High'.
// dueDate (Date): The deadline or due date for completing the todo item.
// completed (Boolean): Indicates whether the todo item has been completed. Default is false.
// tags (Array of Strings): Tags or categories associated with the todo item.
// createdAt (Date): Date and time when the todo item was created. This field is automatically generated.
// updatedAt (Date): Date and time when the todo item was last updated. This field is automatically updated whenever the todo item is modified.

const mongoose = require("mongoose");

const todosSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    priority: [
      {
        type: String,
        enum: ["Low", "Medium", "High"],
      },
    ],
    dueDate: Date,
    completed: {
      type: Boolean,
      default: false,
    },
    tags: [
      {
        type: String,
      },
    ],
    createdAt: {
      type: Date,
    },
    updatedAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

const Todos = mongoose.model("Todos", todosSchema);

module.exports = Todos;