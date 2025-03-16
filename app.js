
let listaDeAmigos = [];
let numeroRandom;

function agregarAmigo(){
    
    let amigo = document.getElementById("amigo").value;

    
    if (amigo.length <= 1){
        alert("Primero ingrese un nombre a la lista");
       
    }else{
        listaDeAmigos.push(amigo);
        actualizarListaAmigos();
       
    }
    
    document.getElementById("amigo").value = '';

 
    console.log(amigo);
    console.log(listaDeAmigos);

    return;
}

function actualizarListaAmigos(){
    let listaDeAmigosHtml = document.getElementById("listaAmigos"); 
    listaDeAmigosHtml.innerHTML = ""; 
    for (let i=0; i< listaDeAmigos.length;i++) {  
        let li = document.createElement("li"); 
        li.textContent = listaDeAmigos[i]; 
        listaDeAmigosHtml.appendChild(li); 
    }
    return;
}

function sortearAmigo(){
   
    if (listaDeAmigos.length >= 2){
       numeroRandom = Math.floor(Math.random()*listaDeAmigos.length); 
        console.log(numeroRandom);
        
        let amigoSecreto = listaDeAmigos[numeroRandom];
        
        document.getElementById("resultado").innerHTML = amigoSecreto;
        
        
        

    }else{
    
    return;
}
}

