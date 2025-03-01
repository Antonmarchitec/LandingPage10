
let contTargetCard = document.querySelector("#contTargetCard")
let contTemplate = document.querySelector("#contTemplate").content
let contFragment = document.createDocumentFragment()



document.addEventListener("DOMContentLoaded",() =>{
    funcionPrincipal()
})


const funcionPrincipal = async () =>{
    try{    
        const res = await fetch("api.json")
        const data = await res.json()
        //console.log(data)
        funcionTargetRoja(data)



        let numeroUno = document.querySelector("#num1")
        let numeroDos = document.querySelector("#num2")
        let numeroTres = document.querySelector("#num3")

        document.addEventListener("click", (e)=>{
            if(e.target.id === "num1"){
                console.log("Presionaste el num1")
                contTargetCard.textContent = funcionTargetRoja(data)
                funcionTargetRoja(data)

                numeroUno.style.background = "#f90000"
                numeroUno.style.transition = "0.5s all"
                numeroUno.style.color = "white"

                numeroDos.style.background = "initial"
                numeroDos.style.color = "initial"

                numeroTres.style.background = "initial"
                numeroTres.style.color = "initial"

            }else if(e.target.id === "num2"){
                console.log("Presionaste el num2")
                contTargetCard.textContent = funcionTargetAmarilla(data)
                funcionTargetAmarilla(data)

                numeroDos.style.background = "#ffef11"
                numeroDos.style.transition = "0.5s all"
                numeroDos.style.color = "white"

                numeroUno.style.background = "initial"
                numeroUno.style.color = "initial"

                numeroTres.style.background = "initial"
                numeroTres.style.color = "initial"
            }else if(e.target.id === "num3"){
                console.log("Presionaste el num3")
                contTargetCard.textContent = funcionTargetVerde(data)
                funcionTargetVerde(data)

                numeroTres.style.background = "#1e9104"
                numeroTres.style.transition = "0.5s all"
                numeroTres.style.color = "white"

                numeroDos.style.background = "initial"
                numeroDos.style.color = "initial"

                numeroUno.style.background = "initial"
                numeroUno.style.color = "initial"
            }
        })

    }catch(error){
        console.log(" ERROR DE CARGA")
    }
}


const funcionTargetRoja = (data) =>{
    //console.log(data[0].title)
    contTemplate.querySelector("#imgCar").setAttribute("src", data[0].imagen)
    contTemplate.querySelector("#imgCar").setAttribute("alt", data[0].title)
    contTemplate.querySelector("#blockCar").style.background = data[0].background

    contTemplate.querySelector("#titleCar").textContent = data[0].title
    contTemplate.querySelector("#numCar").textContent = data[0].placa
    contTemplate.querySelector("#btnCar").dataset.id = data[0].id

    const TargetAA = contTemplate.cloneNode(true)
    contFragment.appendChild(TargetAA)
    contTargetCard.appendChild(contFragment)

}

const funcionTargetAmarilla = (data) =>{
    //console.log(data[0].title)
    contTemplate.querySelector("#imgCar").setAttribute("src", data[1].imagen)
    contTemplate.querySelector("#imgCar").setAttribute("alt", data[1].title)
    contTemplate.querySelector("#blockCar").style.background = data[1].background

    contTemplate.querySelector("#titleCar").textContent = data[1].title
    contTemplate.querySelector("#numCar").textContent = data[1].placa
    contTemplate.querySelector("#btnCar").dataset.id = data[1].id

    const TargetAA = contTemplate.cloneNode(true)
    contFragment.appendChild(TargetAA)
    contTargetCard.appendChild(contFragment)

}

const funcionTargetVerde = (data) =>{
    //console.log(data[0].title)
    contTemplate.querySelector("#imgCar").setAttribute("src", data[2].imagen)
    contTemplate.querySelector("#imgCar").setAttribute("alt", data[2].title)
    contTemplate.querySelector("#blockCar").style.background = data[2].background

    contTemplate.querySelector("#titleCar").textContent = data[2].title
    contTemplate.querySelector("#numCar").textContent = data[2].placa
    contTemplate.querySelector("#btnCar").dataset.id = data[2].id

    const TargetAA = contTemplate.cloneNode(true)
    contFragment.appendChild(TargetAA)
    contTargetCard.appendChild(contFragment)

}




//element.style.transitionProperty = "width";
//element.style.transitionDuration = "2s";
//element.style.width = "200px";
//element.style.background = "#ff0000";         
//element.style.color = "#ff0000";         




let sectionB = document.querySelector("#sectionB")
let templateSection = document.querySelector("#templateSection").content
let fragmentSection = document.createDocumentFragment()



document.addEventListener("DOMContentLoaded", () =>{
    mostrarFuncion()
})


const mostrarFuncion = async () =>{
    try{
        const info = await fetch("api2.json")
        const resu = await info.json()
        //console.log(resu) 
        mostrarDetalleUno(resu)

        document.addEventListener("click", (e)=>{
            if(e.target.id === "bot1"){
                console.log(" Presionaste uno ")
                sectionB.textContent = mostrarDetalleUno(resu)
                mostrarDetalleUno(resu)

            }else if(e.target.id === "bot2"){
                console.log(" Presionaste dos ")
                sectionB.textContent = mostrarDetalleDos(resu)
                mostrarDetalleDos(resu)
            }
        })

    }catch{
        console.log(" ERROR DE CARGA")
    }
}



const mostrarDetalleUno = (resu)=>{
    //console.log(resu)

    templateSection.querySelector("#BNombre").textContent = resu.data[0].first_name
    templateSection.querySelector("#BApellido").textContent = resu.data[0].last_name
    templateSection.querySelector("#BCorreo").textContent = resu.data[0].email
    templateSection.querySelector("#BPhone").textContent = resu.data[0].phone

    let cloneTemplate = templateSection.cloneNode(true)
    fragmentSection.appendChild(cloneTemplate)
    sectionB.appendChild(fragmentSection)
   
}

const mostrarDetalleDos = (resu)=>{
    //console.log(resu)

    templateSection.querySelector("#BNombre").textContent = resu.data[1].first_name
    templateSection.querySelector("#BApellido").textContent = resu.data[1].last_name
    templateSection.querySelector("#BCorreo").textContent = resu.data[1].email
    templateSection.querySelector("#BPhone").textContent = resu.data[1].phone

    let cloneTemplate = templateSection.cloneNode(true)
    fragmentSection.appendChild(cloneTemplate)
    sectionB.appendChild(fragmentSection)
   
}