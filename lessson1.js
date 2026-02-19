let users = JSON.parse(localStorage.getItem("data")) || [];
let box = document.querySelector(".box")
let form = document.querySelector(".form")
let submit = document.querySelector(".submit")
let idx = null;


function DeletUser(id){
        users = users.filter((e) => e.id != id)
        localStorage.setItem("data",JSON.stringify(users))
        ShowUser()
};
function editUser(el){
        idx = el.id
        submit.innerHTML = "Edit"
        form["name"].value = el.name
        form["job"].value = el.job
}
form.onsubmit = (event)=>{
        event.prevenDefault();

        if(submit.innerHTML = "Edit"){
                users = users.map((el)=>{
                        if(el.id == idx){
                                return {
                        ...el,
                        name:form["name"].value,
                        job:form["job"].value,
                        }
                }
                return el;
                });
                idx = null;
                submit.innerHTML = "Add"
        }else{
                let obj = {
                        id:Date.now(),
                        name:form["name"].value,
                        job:form["job"].value,
                };
                users.push(obj)
        }
        localStorage.setItem("data",JSON.stringify(users))
        ShowUser();
        form.reset();
}
function ShowUser(){
        box.innerHTML = ""
        users.forEach((e,i) => {
   
           let tr = document.createElement("tr")     
           let tdid = document.createElement("td")     
           let tdname = document.createElement("td")     
           let tdaction = document.createElement("td")     
           let tdjob = document.createElement("td")
           let btndelete = document.createElement("button")  
           let btnedit = document.createElement("button")  
           btndelete.onclick=()=>{
               DeletUser(e.id)
           };
           btnedit.onclick=()=>{
                editUser(e)
           };
           btndelete.innerHTML = "Delete"
           btnedit.innerHTML = "Edit"
           tdid.innerHTML = i+1
           tdjob.innerHTML = e.tdjob
           tdname.innerHTML = e.name

          tdaction.append(btndelete,btnedit) 
          tr.append(tdid,tdname,tdjob,tdaction) 
          box.append(tr);
        })
}
ShowUser();







// const button = document.querySelector(".button")
// const message = document.querySelector(".message")
// let add = Math.floor( Math.random()*10)
// let promise = new Promise((resolve,reject)=>{
//         if(add%2==0){
//                 resolve("khonada rasid")
//         }else{
//                 reject("narasiday")
//         }
// });
// button.onclick = ()=>{
// add =Math.floor( Math.random()*10)
//         promise
//         .then((value) => {
//                 message.innerHTML =  value;
//         })
//       .catch((value) => {
//                 message.innerHTML = value;
//         });  
// }