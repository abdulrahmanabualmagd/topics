import { IndexDB } from "./indexdb.js";

// Create Instance
const context = new IndexDB("Database", 1, ["students"]);

// Delete DB
let resetResult = await context.reset();

// Initialize DB
let initResut = await context.init();

// Add Data to [students]
let addResult = await context.add("students", { name: "Abdulrahman" });

// Get All data in [students]
let getAllResult = await context.getAll("students");

// Delete All data in [students]
let deleteAllResult = await context.deleteAll("students");
