
import Ram from "../components/Ram"
function Student(){
   
    function ram(){
        alert("jai ho")
    }
    return (
        <>
         <Ram  
         name ="amandeep"
         other={{name:"amandeep" , surName:"Dhillon"}}
          
         ram={ram}
         
         />
        </>
    )
}
export default Student;