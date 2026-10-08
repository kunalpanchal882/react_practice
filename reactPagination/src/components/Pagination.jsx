import React, { useEffect, useState } from 'react'

const Pagination = () => {
    const [page, setpage] = useState(1);
    const [limit, setlimit] = useState(4)
    const [search, setSearch] = useState("")
    const [filterrUser, setfilterrUser] = useState([])

    const userArr = [
  { id: 1, username: "Kunal", email: "kunal@gmail.com" },
  { id: 2, username: "Rahul", email: "rahul@gmail.com" },
  { id: 3, username: "Himanshu", email: "himanshu@gmail.com" },
  { id: 4, username: "Panchal", email: "panchal@gmail.com" },
  { id: 5, username: "Aman", email: "aman@gmail.com" },
  { id: 6, username: "Harsh", email: "harsh@gmail.com" },
  { id: 7, username: "Yash", email: "yash@gmail.com" },
  { id: 8, username: "Megha", email: "megha@gmail.com" },
  { id: 9, username: "Umang", email: "umang@gmail.com" },
  { id: 10, username: "Rohit", email: "rohit@gmail.com" },

  { id: 11, username: "Ankit", email: "ankit@gmail.com" },
  { id: 12, username: "Vikas", email: "vikas@gmail.com" },
  { id: 13, username: "Neha", email: "neha@gmail.com" },
  { id: 14, username: "Priya", email: "priya@gmail.com" },
  { id: 15, username: "Sahil", email: "sahil@gmail.com" },
  { id: 16, username: "Ravi", email: "ravi@gmail.com" },
  { id: 17, username: "Arjun", email: "arjun@gmail.com" },
  { id: 18, username: "Aditi", email: "aditi@gmail.com" },
  { id: 19, username: "Nikhil", email: "nikhil@gmail.com" },
  { id: 20, username: "Piyush", email: "piyush@gmail.com" },

  { id: 21, username: "Deepak", email: "deepak@gmail.com" },
  { id: 22, username: "Mohit", email: "mohit@gmail.com" },
  { id: 23, username: "Anjali", email: "anjali@gmail.com" },
  { id: 24, username: "Riya", email: "riya@gmail.com" },
  { id: 25, username: "Varun", email: "varun@gmail.com" },
  { id: 26, username: "Sakshi", email: "sakshi@gmail.com" },
  { id: 27, username: "Abhishek", email: "abhishek@gmail.com" },
  { id: 28, username: "Naveen", email: "naveen@gmail.com" },
  { id: 29, username: "Shubham", email: "shubham@gmail.com" },
  { id: 30, username: "Ayush", email: "ayush@gmail.com" },
];

let filtered = () =>{
    let filter = userArr.filter((value) => value.username.toLowerCase().includes(search.toLowerCase()))
    setfilterrUser(filter)
}


console.log("pages",page)


useEffect(() => {
    filtered()

    setpage(1)
},[search])



// calculate the totalpage
let totalPage = Math.ceil((filterrUser.length)/limit)

// calulation skip 
let skip = (page-1)*limit;

let newArr = filterrUser.slice(skip,skip+limit)

let totalButtons = Array.from({length:totalPage})


const handleNext = () => {
    setpage(prev => prev+1)
}

const handlePrev = () =>{
    setpage(prev => prev-1)
}


  return (
    <div >

 {/* SEARCH */}
      <div>
        <h1>Search</h1>

        <input
          style={{
            padding: "7px 20px",
            borderRadius: "20px",
            border: "1px solid black",
          }}
          type="text"
          placeholder="Search name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

         {/* USERS */}
      <div>
        {newArr.length > 0 ? (
          newArr.map((value) => (
            <div key={value.id}>
              <h1>{value.username}</h1>
              <p>{value.email}</p>
            </div>
          ))
        ) : (
          <h2>No users found</h2>
        )}



        {/* pagination */}
        <div style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
        marginTop:'10px'

        }}
>
        <button disabled={page===1}  onClick={handlePrev}  style={{padding:'7px', backgroundColor:"blue", borderRadius:"8px"}}>prev</button>
        <p>Page {totalPage===0?"0":page} of {totalPage}</p>

        {/* number in pagination */}
        <div
        style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
      
          }}>
            {totalButtons.map((_,index) => (
                <button onClick={() => setpage(index+1)} style={{backgroundColor:"black",padding:"1px 9px" , color:"white" ,cursor:"pointer"}}>{index+1}</button>
            ))}
        </div>
        <button disabled={page>=totalPage} onClick={handleNext} style={{padding:'7px', backgroundColor:"blue", borderRadius:"8px"}}>next</button>

        </div>
      </div>
    </div>
  )
}

export default Pagination