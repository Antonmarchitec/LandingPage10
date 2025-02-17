
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

        let templateClone = contTemplate.cloneNode(true)
        contFragment.appendChild(templateClone)
    });

    contTargetCard.appendChild(contFragment)


}





