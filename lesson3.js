const api = "https://6993275d8f29113acd402959.mockapi.io/1234/add"
let box = document.querySelector(".box")
let editmodel = document.querySelector(".editmodel")
let Form = document.querySelector(".Form")
let idx = null;



async function GetUser(){
    try {
        let response = await fetch(api)
        let data = await response.json()
        ShowUser(data)
    } catch (error) {
        console.log(error);
    }
}


async function DeletUser(id) {
     try {
        await fetch(`${api}/${id}`,{
            method:"DELETE"
        });
     } catch (error) {
        console.log(error);
     }    
     GetUser();
}


function FildField(e){
    idx = e.id
    editmodel.showModel()
    Form["name"].value = e.name
    Form["address"].value = e.address
}

async function EditUser(user) {
    try {
        await fetch (`${api}/${aid}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(user)
        })
        GetUser()
    } catch (error) {
        console.log(error);
        
    }
}

Form.onsubmit=(ev)=>{
    ev.preventDefault()
    let obj ={
        name:Form['name'].value,
        address:Form['address'].value,
    };
    EditUser(obj)
    Editmodal.closest()
    Form.reset();
}

function ShowUser(data){
    box.innerHTML = ""
    data.forEach((e) => {

        let tr = document.createElement("tr")
        let tdname = document.createElement("td")
        let tdaddress = document.createElement("td")
        let tdaction = document.createElement("td")
        let btndelet = document.createElement("button")
        let btnEdit = document.createElement("button")

        btndelet.onclick=()=>{
            DeletUser(e.id);
        }
        btnEdit.onclick=()=>{
            FildField(e)
        }
   
     btndelet.innerHTML = "Delete"
     btnEdit.innerHTML = "Edit"
     tdname.innerHTML = e.name
     tdaddress.innerHTML = e.address

     tdaction.append(btndelet,btnEdit)
     tr.append(tdname,tdaddress,tdaction)
     box.append(tr)
      })
}
GetUser()