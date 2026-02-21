import {GetUser,PostUser,EditUser} from "./api.js";
let box = document.querySelector(".box")
let Dialog = document.querySelector(".Dialog")
let Form = document.querySelector(".Form")



Form.onsubmit=(event)=>{
    event.preventDefault()
    let user ={
        Form:name["name"].value,
        Form:salary["salary"].value,
    }
    PostUser(user)
    Form.reset();
}


function showUser(user){
    box.innerHTML = ""
    user.forEach((e) => {
    let tr = document.createElement("tr")
    let h1 = document.createElement("th")
    let h2 = document.createElement("th")

    h1.innerHTML = e.name
    h2.innerHTML = e.salary
    
      tr.append(h1,h2)
      box.append(tr)
    })
}
export {showUser}