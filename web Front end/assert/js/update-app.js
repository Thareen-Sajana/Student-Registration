
let previousNic = "";

function searchBtn(){

    const searchBar = document.getElementById("searchNIC").value.trim();

    setValues(searchBar);

}


function setValues(nicNumber){

    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const school = document.getElementById("school");
    const nic = document.getElementById("nic");
    const age = document.getElementById("age");
    const email = document.getElementById("email");
    const phoneNumber = document.getElementById("phoneNumber");

    let condition = false;

    fetch("http://localhost:8080/studentView")
        .then(res => res.json())
        .then(data => {

            data.forEach(student => {
                
                if(nicNumber === student.nic){
                    firstName.value = student.firstName;
                    lastName.value = student.lastName;
                    school.value = student.school;
                    nic.value = student.nic;
                    age.value = String(student.age);
                    email.value = student.email;
                    phoneNumber.value = student.phoneNumber;

                    condition = true;
                    previousNic = student.nic;
                }
                
            });
        })

    if(!condition){
        firstName.value = "";
        lastName.value = "";
        school.value = "";
        nic.value = "";
        age.value = String("");
        email.value = "";
        phoneNumber.value = "";
    }
}


function clear(){

    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const school = document.getElementById("school");
    const nic = document.getElementById("nic");
    const age = document.getElementById("age");
    const email = document.getElementById("email");
    const phoneNumber = document.getElementById("phoneNumber");

    firstName.value = "";
    lastName.value = "";
    school.value = "";
    nic.value = "";
    age.value = "";
    email.value = "";
    phoneNumber.value = "";

}

function getDetails(){

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const school = document.getElementById("school").value;
    const nic = document.getElementById("nic").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phoneNumber").value;

    let studentData  = {
        "firstName" : firstName,
        "lastName" : lastName,
        "age" : parseInt(age),
        "nic" : nic,
        "school" : school,
        "email" : email,
        "phoneNumber" : phoneNumber
    }

    return studentData;
   
}


function updateBtn(){

    let requstBody = getDetails();
    
    let url = "http://localhost:8080/studentUpdate/" + previousNic;
    
    fetch(url, {
        method: "PATCH",
        body: JSON.stringify(requstBody),
        headers : {
            "Content-Type": "application/json"
        }
    })
    .then(data => {

        const okayMsg = document.getElementById("okMsg");
        okayMsg.classList.remove("display-none");
        okayMsg.classList.add("display-block");

        const mainBody = document.getElementById("main-container");
        mainBody.classList.add("main-container");

    })
}


function okBtn(){

    const okayMsg = document.getElementById("okMsg");
    okayMsg.classList.remove("display-block");
    okayMsg.classList.add("display-none");

    const mainBody = document.getElementById("main-container");
    mainBody.classList.remove("main-container");

    clear();
    const searchBar = document.getElementById("searchNIC");
    searchBar.value = "";
}


function deleteBtn(){

    const deleteMsg = document.getElementById("deleteMsg");
    deleteMsg.classList.remove("display-none");
    deleteMsg.classList.add("display-block");

    const mainContainer = document.getElementById("main-container");
    mainContainer.classList.add("main-container");
}


function yesBtn(){

    const nic = document.getElementById("nic").value;

    let url = "http://localhost:8080/studentRemove/" + nic;

    fetch(url, {
        method: "DELETE",
        mode: 'cors'
    })
    .then(clear())

    const deleteMsg = document.getElementById("deleteMsg");
    deleteMsg.classList.remove("display-block");
    deleteMsg.classList.add("display-none");

    const mainContainer = document.getElementById("main-container");
    mainContainer.classList.remove("main-container");

    const searchBar = document.getElementById("searchNIC");
    searchBar.value = "";
}


function noBtn(){

    const deleteMsg = document.getElementById("deleteMsg");
    deleteMsg.classList.remove("display-block");
    deleteMsg.classList.add("display-none");

    const mainContainer = document.getElementById("main-container");
    mainContainer.classList.remove("main-container");

}

document.getElementById("searchBtn")
    .addEventListener("click",searchBtn);

document.getElementById("delete-btn")
    .addEventListener("click",deleteBtn);

document.getElementById("update-btn")
    .addEventListener("click", updateBtn);

document.getElementById("okBtn")
    .addEventListener("click", okBtn);

document.getElementById("yesBtn")
    .addEventListener("click",yesBtn);

document.getElementById("noBtn")
    .addEventListener("click",noBtn);
