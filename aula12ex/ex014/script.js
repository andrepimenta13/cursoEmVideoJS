function carregar() {
    let msg = window.document.getElementById('msg');
    let img = window.document.getElementById('imagem');
    let data = new Date(); //buscar data do sistema
    let hora = data.getHours(); //buscar horas do sistema
    let min = data.getMinutes(); //buscar minutos
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`

    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'fotomanha.png' //colocar imagem
        document.body.style.background = '#e2cd9f' //colocar cor de fundo

    } else if (hora >= 12 && hora < 20) {
        //BOA TARDE
        img.src = 'fototarde.png' //colocar imagem
        document.body.style.background = '#b9846f' //colocar cor de fundo

    } else {
        //BOA NOITE
        img.src = 'fotonoite.png' //colocar  imagem*