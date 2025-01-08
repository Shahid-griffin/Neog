import { useState } from "react"
import useFetch from "../hooks/useFetch"

export default function App(){
  const [showdata ,setdata] =useState(false)
  const {data} =useFetch("https://jsonplaceholder.typicode.com/todos/4")
  console.log(data)
  return (
    <div  className="container py-4">
    <h1 >Todo API</h1>
    <button onClick={()=>setdata(true)}>GetData</button>
    {showdata && (
        <div>
          {data ? <p>{JSON.stringify(data)}</p> : <p>Unable to fetch data</p>}
        </div>
      )}
    </div>
  )
}