import { useParams } from "react-router-dom";
import Header from "../components/Header"
import { employees } from "../utils/common"
import Footer from "../components/Footer";

 export default function EmployeeDetails (){

  const employeeId = useParams();

  const data = employees.find((movie) => movie.id == employeeId.employeeId);
    return (
        <>
        <Header/>
        <main className="container py-4">
            <h1>{data.name}</h1>

            <ul className="list-group">
                <li className="list-group-item"><strong>Name: </strong>{data.name}</li>
                <li className="list-group-item"><strong>Designation: </strong>{data.title}</li>
                <li className="list-group-item"><strong>Department: </strong>{data.department}</li>
            </ul>
            
        </main>
        <Footer/>
        </>

    )
 }