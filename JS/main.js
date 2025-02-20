
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


        document.addEventListener("click", (e)=>{
            if(e.target.id === "num1"){
                console.log("Presionaste el num1")
                contTargetCard.textContent = funcionTargetRoja(data)
                funcionTargetRoja(data)

                let numeroUno = document.querySelector("#num1")
                numeroUno.style.background = "#f90000"
                numeroUno.style.transition = "0.5s all"
                numeroUno.style.color = "white"



            }else if(e.target.id === "num2"){
                console.log("Presionaste el num2")
                contTargetCard.textContent = funcionTargetAmarilla(data)
                funcionTargetAmarilla(data)

                let numeroDos = document.querySelector("#num2")
                numeroDos.style.background = "#ffef11"
                numeroDos.style.transition = "0.5s all"
                numeroDos.style.color = "white"
            }else if(e.target.id === "num3"){
                console.log("Presionaste el num3")
                contTargetCard.textContent = funcionTargetVerde(data)
                funcionTargetVerde(data)

                let numeroTres = document.querySelector("#num3")
                numeroTres.style.background = "#1e9104"
                numeroTres.style.transition = "0.5s all"
                numeroTres.style.color = "white"
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




