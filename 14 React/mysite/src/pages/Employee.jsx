import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { employees } from "../utils/common";
import { useState } from "react";

const Employee = () => {
  // const data = employees
  const [selectdata, setSelectData] = useState("All");

  const data =
    selectdata === "All"
      ? employees
      : employees.filter((fill) => fill.department === selectdata);

  return (
    <>
      <Header />
      <main className="container py-4">
        <h1>List of Employees</h1>
        <div className="py-4">
          <label htmlFor="employeeFilter">Filter by Department</label>
          <select
            id="employeeFilter"
            className="form-select"
            onChange={(e) => setSelectData(e.target.value)}
          >
            <option value="All">All</option>
            <option value="IT">IT</option>
            <option value="Management">Management</option>
            <option value="Design">Design</option>
          </select>
        </div>

        <div>
          <ul className="list-group">
            {data.map((employee) => (
              <li key={employee.id} className="list-group-item">
                <h5>{employee.name}</h5>
                <p>{employee.title}</p>
                <Link
                  className="btn btn-primary"
                  to={`/employee/${employee.id}`}
                >
                  View Details
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Employee;
