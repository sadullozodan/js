import { EditUser,DeletUser} from "./api1.js";

let box = document.querySelector(".box")
let Form = document.querySelector(".Form")
let ADDmoddal = document.querySelector(".ADDmoddal")
let Close = document.querySelector(".Close")
let Submit = document.querySelector(".Submit")


Close.onclick=()=>{
    ADDmoddal.close()
}


let currentId = null;

Form.onsubmit = (event) => {
    event.preventDefault()
    let user = {
        id: currentId,
        name: Form["name"].value,
        data: Form["data"].value,
        role: Form["role"].value,
    }
  EditUser(user)
  ADDmoddal.close();
  Form.reset()
}





function ShowUser(data) {
    box.innerHTML = ""
    data.forEach((e, i) => {
        let tr = document.createElement("tr")
        let tdid = document.createElement("td")
        let tdname = document.createElement("td")
        let tddata = document.createElement("td")
        let tdrole = document.createElement("td")
        let tdaction = document.createElement("td")
        let btnDelete = document.createElement("button")
        let btnEdit = document.createElement("button")
        let tdstatus = document.createElement("td")

        btnEdit.onclick = () => {
            ADDmoddal.show()
            currentId = e.id
            Form["name"].value = e.name
            Form["data"].value = e.data
            Form["role"].value = e.role
        }
        btnDelete.onclick=()=>{
            DeletUser(e.id)
        }

        btnDelete.innerHTML = "DELETE"
        btnEdit.innerHTML = "EDIT"
        tdid.innerHTML = i + 1
        tdname.innerHTML = e.name
        tddata.innerHTML = e.data
        tdrole.innerHTML = e.role
        tdstatus.innerHTML = e.status ? "Active" : "Inactive"

        tdaction.append(btnDelete, btnEdit)
        tr.append(tdid, tdname, tddata, tdrole, tdstatus, tdaction)
        box.append(tr)
    })
}
export { ShowUser }