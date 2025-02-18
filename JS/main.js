
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
        funcionSecundaria(data)

        document.addEventListener("click", (e)=>{
            if(e.target.id === "num1"){
                console.log("Presionaste el num1")

            }else if(e.target.id === "num2"){
                console.log("Presionaste el num2")
            }else if(e.target.id === "num3"){
                console.log("Presionaste el num3")
            }else if(e.target.id === "num4"){
                console.log("Presionaste el num4")
            }
        })

    }catch(error){
        console.log(" ERROR DE CARGA")
    }
}


const funcionSecundaria = (data) =>{
    //console.log(data)
    data.forEach( element => {
        console.log(element)
        
        contTemplate.querySelector("#imgCar").setAttribute("src", element.imagen)
        contTemplate.querySelector("#imgCar").setAttribute("alt", element.title)
        contTemplate.querySelector("#titleCar").textContent = element.title
        contTemplate.querySelector("#numCar").textContent = element.placa
        contTemplate.querySelector("#btnCar").dataset.idBtn = element.id 



        let templateClone = contTemplate.cloneNode(true)
        contFragment.appendChild(templateClone)
    });

    contTargetCard.appendChild(contFragment)

    document.addEventListener("click", e =>{
        if(e.target.dataset.idBtn === "1"){
            console.log("Presionaste el boton uno")    

        }else if(e.target.dataset.idBtn === "2"){
            console.log("Presionaste el boton dos")
            
        }else if(e.target.dataset.idBtn === "3"){
            console.log("Presionaste el boton tres")
        }
    } )




}


//element.style.transitionProperty = "width";
//element.style.transitionDuration = "2s";
//element.style.width = "200px";
//element.style.background = "#ff0000";         
//element.style.color = "#ff0000";         




