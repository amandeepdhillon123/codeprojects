// import React from 'react'
// import {Navigate} from 'react-router-dom';

// const PrivateRoute = ({isLoggedIn, children}) => {
//   if(isLoggedIn) {
//     return children;
//   }
//   else {
//     return <Navigate to="/login"/>
//   }
// }

// export default PrivateRoute

import React from 'react'

function PrivateRoute() {
  return (
    <div>PrivateRoute</div>
  )
}

export default PrivateRoute
