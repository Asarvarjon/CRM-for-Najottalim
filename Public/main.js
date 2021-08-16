const TbodyElement = document.querySelector(".tbody")
const formElement = document.querySelector(".form")
const courseSelect = document.querySelector("#course")
const sourceSelect = document.querySelector("#source")
const nameInput = document.querySelector(".name_input")
const numberInput = document.querySelector(".number_input")
const studentBox = document.querySelector(".no-student")
const studentsButton =document.querySelector("#students_button")
const formSection = document.querySelector(".form-section")
const tableSection = document.querySelector(".table")

const submitButton = document.querySelector(".submit")

const courseButton = document.querySelector(".course_button")
const sourceButton = document.querySelector(".source_button") 


studentsButton.addEventListener("click", event => {
    formElement.style.display = "flex"
    CTable.style.display = "none"
    studentBox.style.display = "none";
    formSection.style.display = "flex"
    tableSection.style.display = "flex"
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
        const deleteTrElement = document.createElement("button")

        TrElement.classList.add("row")
        IdTrElement.classList.add("info")
        NameTrElement.classList.add("info")
        NumberTrElement.classList.add("info")
        CourseTrElement.classList.add("info")
        SourceTrElement.classList.add("info")
        deleteTrElement.classList.add("delete")  

        deleteTrElement.addEventListener("click", async event => { 
            let response = await fetch("/delete/" + element.id, {
                method: "DELETE",
            } ) 
            loadUsers() 
        })

        IdTrElement.textContent = element.id
        NameTrElement.textContent = element.name
        NumberTrElement.textContent = element.number
        CourseTrElement.textContent = element.course
        SourceTrElement.textContent = element.source 
        deleteTrElement.textContent = "O'chirish"

       

        TrElement.appendChild(IdTrElement)
        TrElement.appendChild(NameTrElement)
        TrElement.appendChild(NumberTrElement) 
        TrElement.appendChild(CourseTrElement) 
        TrElement.appendChild(SourceTrElement) 
        TrElement.appendChild(deleteTrElement)   

        TbodyElement.appendChild(TrElement)
     });
 }


submitButton.addEventListener("click", async event => {
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
            course: courseSelect.value,
            source: sourceSelect.value 
        })
    })

    response = await response.json()
    loadUsers() 
    
    nameInput.value = null;
    numberInput.value = null
})

const CourseTbody = document.querySelector("#tbody")
const CTable = document.querySelector("#courseTable ")
 
courseButton.addEventListener("click", async event => {
    studentBox.style.display = "none";
    formElement.style.display = "none"
    tableSection.style.display = "none"
    CTable.style.display = "flex"
    let courseData =  await fetch("/courses")
    courseData = await courseData.json() 
    renderCourse(courseData.data)
})

async function renderCourse(array) {
    CourseTbody.textContent = null; 
   array.forEach(element => {   
      const TrElement = document.createElement("tr")

       
      const NumberTrElement = document.createElement("td")
      const CourseTrElement = document.createElement("td") 

      TrElement.classList.add("row") 
      NumberTrElement.classList.add("Cinfo")
      CourseTrElement.classList.add("Cinfo") 

     
      NumberTrElement.textContent = element.course
      CourseTrElement.textContent = array.length - 1

      TrElement.appendChild(NumberTrElement) 
      TrElement.appendChild(CourseTrElement)   

      CourseTbody.appendChild(TrElement)
   });
}

 
