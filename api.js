import { showUser } from ".lesson4.js";

let api = "https://6993275d8f29113acd402959.mockapi.io/1234/add"


async function GetUser() {
    try {
        const resonse = await axios.get(api)
        showUser(resonse.data)
    } catch (error) {
        console.log(error);  
    } 
}

async function PostUser(user) {
    try {
        await axios.post(api,user);
        GetUser();
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
GetUser();
export {GetUser,PostUser,EditUser} 