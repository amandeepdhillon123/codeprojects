import React, { useState ,useEffect} from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { NavLink } from 'react-router-dom';
const Home = () => {

    const [getuserData,setuserData] = useState([])

    console.log(getuserData)

    // get data from api 

    const getpdata =async(e)=>{
        // e.preventDefault();

        const resp = await fetch("/getdata",{
            method:"GET",
            headers:{
                "Content-Type" :"application/json"
            }
        });
        const data = await resp.json();
        // console.log("amnai" ,data.data)

        if(resp.status === 500 || !data)
        {
            alert("error")
        }
        else{
         
            setuserData(data.data)
        }
    }
  useEffect(()=>{
    getpdata()
  }, []) ;


  return (
    <div className='mt-5'>
        <div className='container'>

            {/* create add btn  */}
            <div className='add_btn mt-2'>
                 <NavLink to="/register" className='btn btn-primary'><AddIcon /> add data</NavLink>
            </div>

            {/* create tables */}

    <table class="table  mt-2">
            <thead>
                    <tr className='table-dark'>
                    <th scope="col">id</th>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th scope="col">job</th>
                    <th scope="col">Number</th>
                    <th scope="col"></th>
                    </tr>
            </thead>
            <tbody>
                {
                     getuserData &&
                    getuserData.map((ele,id)=>(
                        <>
                           <tr>
                    <th scope="row">{id+1}</th>
                    <td>{ele.name}</td>
                    <td>{ele.email}</td>
                    <td>{ele.work}</td>
                    <td>{ele.number}</td>
                    <td className='d-flex justify-content-between'>
                        <button className='btn btn-success' title='read'><RemoveRedEyeIcon/></button>
                        <button className='btn btn-primary' title='update'><EditIcon/></button>
                        <button className='btn btn-danger' title='delete'><DeleteIcon/></button>
                    </td>
                </tr>
                        </>

                    ))
                } 

                {/* <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>1255</td>
                    <td className='d-flex justify-content-between'>
                        <button className='btn btn-success' title='read'><RemoveRedEyeIcon/></button>
                        <button className='btn btn-primary' title='update'><EditIcon/></button>
                        <button className='btn btn-danger' title='delete'><DeleteIcon/></button>
                    </td>
                </tr> */}
                
                    
            </tbody>
    </table>
      
        </div>
  
    </div>
  )
}

export default Home