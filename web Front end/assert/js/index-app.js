

function submitBtn(){

    const nicTag = document.getElementById("nic");
    const warnigText = document.querySelector('.warning-text');
    

    fetch("http://localhost:8080/studentView")
        .then(res => res.json())
        .then(data => {

            let isNicExists = false;

            data.forEach(student => {
                
                if(student.nic === nicTag.value.trim()){
                    isNicExists = true;
                }
            });


            if(nicTag.value.trim() === ""){

                warnigText.innerHTML = "*Please enter NIC number."
                warnigText.classList.remove("display-none");
                warnigText.classList.add("display-block");
                
                nicTag.classList.add("nic-validate");

            }else if(isNicExists){
        
                warnigText.innerHTML = "*Nic is already taken.";
                warnigText.classList.remove("display-none");
                warnigText.classList.add("display-block");
            
                nicTag.classList.add("nic-validate");
            
            }else if(!isNicExists){
        
                warnigText.classList.add("display-none");
                warnigText.classList.remove("display-block");

                nicTag.classList.remove("nic-validate");
                insertData();
            }

        })

}


function insertData(){

    let requstBody = getDetails();

    fetch("http://localhost:8080/studentForm",{
        method: "POST",
        body: JSON.stringify(requstBody),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json)
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

    clearBtn();

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


function clearBtn(){

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


document.getElementById("submitBtnId")
    .addEventListener("click",submitBtn)

document.getElementById("clear-btn")
    .addEventListener("click",clearBtn)

document.getElementById("okBtn")
    .addEventListener("click", okBtn);

