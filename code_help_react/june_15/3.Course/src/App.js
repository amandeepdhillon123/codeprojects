

// import React, { useEffect, useState } from "react";
// import Navbar from "./components/Navbar";

// import Cards from "./components/Cards";
// import Filter from "./components/Filter";
// import Spinner from "./components/Spinner";
// import { apiUrl, filterData } from "./data";
// import { toast } from "react-toastify";
// function App() {
//   const [courses, setCourses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const[category,setCategory]=useState(filterData[0].title)
//   async function fetchData() {
//     setLoading(true);

//     try {
//       let response = await fetch(apiUrl);
//       let output = await response.json();
//       setCourses(output.data);
//     } catch (error) {
//       toast.error("dikkat hai bhai kuch na kuch ");
//     }
//     setLoading(false);
//   }

//   useEffect(() => {
//     fetchData(fetchData);
//   }, []);
//   return (
//     <div className="min-h-screen flex flex-col bg-bgDark2">
//       <div>
//         <Navbar />
//       </div>
//       <div className="bg-bgDark2">

//       <div >
//         <Filter filterData={filterData} category={category} setCategory={setCategory} />
//       </div>
//       <div className="w-11/12 max-w-[1200px]
//         mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">{loading ? <Spinner /> : <Cards courses={courses}  category={category}/>}</div>
//     </div>
//       </div>
     
//   );
// }

// export default App;

// -------------------------------------

import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Filter from './components/Filter'
import Cards from './components/Cards'
import Spinner from './components/Spinner'
import { toast } from "react-toastify";
import {apiUrl ,filterData } from './data'
function App() {
     const[courses,setCourses]= useState(null)
     const[loading,setLoading]=useState(true)
     async function fetchData(){
      setLoading(true)
      try {
           let response = await fetch(apiUrl)
           let output= await response.json();

           setCourses(output.data)
      } 
      catch (error) {
          toast.error("network mein problem hai bhai")
      }
      setLoading(false)
    }

    useEffect(()=>{
      fetchData()
    },[])

  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div>
        <Filter filterData={filterData}/>
      </div>
      <div>
        {
          loading ? (<Spinner/>) : (<Cards courses={courses}/>)
        }
      </div>
    </div>
  )
}

export default App
