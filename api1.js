import { ShowUser } from "./lesson5.js";
let api = "https://6993275d8f29113acd402959.mockapi.io/1234/add"


async function GetUser() {
    try {
        let response = await axios.get(api)
         ShowUser(response.data)
    } catch (error) {
        console.log(error);
        
    }
    
}
async function EditUser(user) {
    try {
        await axios.put(`${api}/${user.id}`,user);
        GetUser();
    } catch (error) {
        console.log(error);  
    } 
}
async function DeletUser(id) {
     try {
        await axios.delete(`${api}/${id}`)
     } catch (error) {
        console.log(error);
     }    
     GetUser();
}



export {EditUser , DeletUser}
GetUser()
