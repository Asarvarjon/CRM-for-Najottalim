const TbodyElement = document.querySelector(".tbody")
const formElement = document.querySelector(".form")
const courseSelect = document.querySelector("#course")
const sourceSelect = document.querySelector("#source")
const nameInput = document.querySelector(".name_input")
const numberInput = document.querySelector(".number_input")

window.addEventListener("DOMContentLoaded", event => {
    studentBox.style.display = "none";
    loadUsers()
}) 

 async function loadUsers() {
     let response = await fetch("/users")
     response = await response.json()   
     render(response.data.reverse()) 
     
 }

 async function render(array) {
      TbodyElement.textContent = null;
     array.forEach(element => {   
        const TrElement = document.createElement("tr")

        const IdTrElement = document.createElement("td")
        const NameTrElement = document.createElement("td")
        const NumberTrElement = document.createElement("td")
        const CourseTrElement = document.createElement("td")
        const SourceTrElement = document.createElement("td")
        const PaidTrElement = document.createElement("td")

        TrElement.classList.add("row")
        IdTrElement.classList.add("info")
        NameTrElement.classList.add("info")
        NumberTrElement.classList.add("info")
        CourseTrElement.classList.add("info")
        SourceTrElement.classList.add("info")
        PaidTrElement.classList.add("info")  

        IdTrElement.textContent = element.id
        NameTrElement.textContent = element.name
        NumberTrElement.textContent = element.number
        CourseTrElement.textContent = element.course
        SourceTrElement.textContent = element.source 
        PaidTrElement.textContent = element.paid

        TrElement.appendChild(IdTrElement)
        TrElement.appendChild(NameTrElement)
        TrElement.appendChild(NumberTrElement) 
        TrElement.appendChild(CourseTrElement) 
        TrElement.appendChild(SourceTrElement) 
        TrElement.appendChild(PaidTrElement)   

        TbodyElement.appendChild(TrElement)
     });
 }

 const studentBox = document.querySelector(".no-student")

const courseValue = document.querySelector(".course_value")
const sourceValue = document.querySelector(".source_value")

sourceSelect.addEventListener("change", event => {
    sourceValue.textContent = sourceSelect.value
})

courseSelect.addEventListener("change", event => {
    courseValue.textContent = courseSelect.value
})

formElement.addEventListener("submit", async event => {
    event.preventDefault() 
    studentBox.style.display = "none";

    let response = await fetch("/add_user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        }, 
        body: JSON.stringify({
            name: nameInput.value,
            number: numberInput.value,
            course: courseValue.textContent,
            source: sourceValue.textContent,
            paid: "to'lanmagan"
        })
    })

    response = await response.json()
    loadUsers() 

    
})
