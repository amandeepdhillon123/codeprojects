import { BASE_URL } from "../helper";
import { commonrequest } from "../Commonrequest";



// admin login api
export const AdminloginApi = async(data,header)=>{
    return await commonrequest("POST",`${BASE_URL}/adminauth/api/login`,data,header,"admin");
}




  