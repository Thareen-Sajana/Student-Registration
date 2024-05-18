
function viewPage(){

    const container = document.querySelector('.student-details');
    container.innerHTML = "";

    fetch("http://localhost:8080/studentView")
        .then(res => res.json())
        .then(data => {

            data.forEach(student => {
                
                const divHolder = document.createElement('div');
                divHolder.className = "topic-containerS";


                const firstNameDiv = document.createElement('div');
                firstNameDiv.textContent = student.firstName;

                const lastNameDiv = document.createElement('div');
                lastNameDiv.textContent = student.lastName;

                const schoolNameDiv = document.createElement('div');
                schoolNameDiv.textContent = student.school;

                const emailDiv = document.createElement('div');
                emailDiv.textContent = student.email;

                const nicDiv = document.createElement('div');
                nicDiv.textContent = student.nic;

                const ageDiv = document.createElement('div');
                ageDiv.textContent = String(student.age);

                const phoneNumberDiv = document.createElement('div');
                phoneNumberDiv.textContent = student.phoneNumber;

                divHolder.appendChild(firstNameDiv);
                divHolder.appendChild(lastNameDiv);
                divHolder.appendChild(schoolNameDiv);
                divHolder.appendChild(emailDiv);
                divHolder.appendChild(nicDiv);
                divHolder.appendChild(ageDiv);
                divHolder.appendChild(phoneNumberDiv);
                container.appendChild(divHolder);

            });
        })
}

document.getElementById("btn-refresh")
    .addEventListener("click",viewPage)
