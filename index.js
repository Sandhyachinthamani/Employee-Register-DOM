let id=1;
const form=document.querySelector("form");

function getnewid(){
    return id++;
}

const employeelist=document.querySelector("#employee-list");
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const employee={
        ID: getnewid(),
        Name: form.name.value,
        Profession: form.profession.value,
        Age: form.age.value
    };  
    if(employee["Name"]&&employee["Profession"] && employee["Age"]){
    addnewemployee(employee);
    document.querySelector("#added p").innerHTML="";
    document.querySelector("#error p").innerHTML="";
    document.querySelector("#success p").innerHTML="Success : Employee Added!";
    form.reset();
    document.querySelector("#success p").innerHTML="";
    }
    else{
        id--;
        document.querySelector("#success p").innerHTML="";
        document.querySelector("#error p").innerHTML="Error : Please Make sure All the fields are filled before adding in an employee !"; 
    }
})

function addnewemployee(employee){
    const record=document.createElement("div");
    record.className="employee-details"
    for(let key in employee){
        const cell=document.createElement("span");
        if(key==="ID"){
            cell.innerText=employee[key];
            record.appendChild(cell);
        }
        else{
            cell.innerText=key+': '+ employee[key];
            record.appendChild(cell);
        }
    }
    const del=document.createElement("div");
    del.className="delbutton";
    const delbutton=document.createElement("button");
    delbutton.innerText="Delete User";
    delbutton.className="Material-icons";
    delbutton.addEventListener("click", deleterecord);
    del.appendChild(delbutton);
    record.appendChild(del);
    employeelist.appendChild(record);
}

function deleterecord(e){
    e.target.parentNode.parentNode.remove();
}

