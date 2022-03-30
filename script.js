function carregar(){

    var msg = window.document.getElementById("mensagem")
    var foto = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
   
    
    
 msg.innerHTML = `Agora são ${hora} horas.`
 if (hora >= 0  && hora < 12){
      
    foto.src = 'manha.png'
    document.body.style.background = "#b6c0b8"
 } else if (hora >= 12 && hora < 18) {

    foto.src = 'tarde.png'
    document.body.style.background = "#d2754e"

 } else {
     foto.src = 'noite.png'
     document.body.style.background = "#000000"

 }

        
}        