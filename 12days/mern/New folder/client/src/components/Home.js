import React from 'react'

const Home = () => {
  return (
    <div className='mt-5'>
        <div className='container'>

            {/* create add btn  */}
            <div className='add_btn mt-2'>
                 <button className='btn btn-primary'>add data</button>
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
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>1255</td>
                    <td className='d-flex justify-content-between'>
                        <button className='btn btn-success' title='read'><i class="fas fa-eye"></i></button>
                        <button className='btn btn-primary' title='update'><i class="fas fa-pen"></i></button>
                        <button className='btn btn-danger' title='delete'><i class="fas fa-trash"></i></button>
                    </td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>1255</td>
                    <td className='d-flex justify-content-between'>
                        <button className='btn btn-success' title='read'><i class="fas fa-eye"></i></button>
                        <button className='btn btn-primary' title='update'><i class="fas fa-pen"></i></button>
                        <button className='btn btn-danger' title='delete'><i class="fas fa-trash"></i></button>
                    </td>
                </tr>
                    
            </tbody>
    </table>
      
        </div>
  
    </div>
  )
}

export default Home