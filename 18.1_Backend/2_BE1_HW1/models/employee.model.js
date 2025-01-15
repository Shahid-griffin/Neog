const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  employeeId: String,
  employeeName: String,
  employeeDesignation: String,
  employeeDob: String,
  employeeEmail: String,
  employeeTelno: Number,
  employeeAddress: String,
  employeeImg: String,
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
