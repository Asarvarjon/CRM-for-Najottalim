const TbodyElement = document.querySelector(".tbody")

window.addEventListener("DOMContentLoaded", event => {
    loadUsers()
})

 async function loadUsers() {
     let response = await fetch("/users")
     response = await response.json()  

     render(response.data) 
 }

 async function render(array) {
     array.forEach(element => {
         console.log(element);
         
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

