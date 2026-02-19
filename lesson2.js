let users = JSON.parse(localStorage.getItem("data")) || []
let box = document.querySelector(".box")
let submit = document.querySelector(".submit")
let form = document.querySelector(".form")
let idx = null;


function DeletUser(id){
     users = users.filter((e) => e.id != id)
     localStorage.setItem("data",JSON.stringify(users));
     ShowUser();
}
function editUser(el){
    idx = el.id
    submit.innerHTML = "edit" 
    form["name"].value = el.name
    form["job"].value = el.job
}

form.onsubmit = (event)=>{
    event.preventDefault();


    
    if(submit.innerHTML == "edit"){
        users = users.map((el) => {
            if(el.id == idx){
                return {
                    ...el,
                    name: form["name"].value,
                    job: form["job"].value,
                    status: el.status
                }
            }
            return el;
        });

        idx = null;
        submit.innerHTML = "add"
    }else{
        let obj = {
            id: Date.now(),
            name: form["name"].value,
            job: form["job"].value,
            status: false,
        };
        users.push(obj)
    }

    localStorage.setItem("data",JSON.stringify(users))
    ShowUser();
    form.reset();
}


function ShowUser(){
    box.innerHTML = ""
    users.forEach((e,i)=>{
        let tr = document.createElement("tr")
        let tdid = document.createElement("td")
        let tdname = document.createElement("td")
        let tdjob = document.createElement("td")
        let tdaction = document.createElement("td")
        let tdstatus = document.createElement("td")
        let btndelet = document.createElement("button")
        let btnedit = document.createElement("button")
    

        let checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.checked = e.status

        checkbox.onchange=()=>{
            users = users.map((el) => {
                if(el.id == e.id){
                    el={...e,status:!e.status}
                }
                return el;
            })
            localStorage.setItem("data",JSON.stringify(users))
            ShowUser();
        }

        btndelet.onclick=()=>{
            DeletUser(e.id)
        };
        btnedit.onclick=()=>{
            editUser(e)
        };
       
        tdstatus.innerHTML = e.status?"Active":"inactive";
        btndelet.innerHTML = "Delete"
        btnedit.innerHTML = "Edit"
        tdid.innerHTML = i+1
        tdname.innerHTML = e.name
        tdjob.innerHTML = e.job
    
    
        tdaction.append(btndelet,btnedit,checkbox)
        tr.append(tdid,tdname,tdjob,tdstatus,tdaction)
        box.append(tr)
    })
}
ShowUser();






