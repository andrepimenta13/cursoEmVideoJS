function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano') //buscar o elemento exemplo1
    let res = document.querySelector('div#res') //buscar o elemento exemplo2
    if (fano.value.length == 0 || Number(fano.value) > ano) { //se não digitou o ano ou se o ano é maior que o Ano atual
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex') //buscar o elemento do radio
        let idade = ano - Number(fano.value) //a idade é = ao ano atual (ano) - ano digitado (fano)
        let gênero = ''
        let img = document.createElement('img') //criar elemento para a imagem
        img.setAttribute('id', 'foto') // colocar id no elemento img (imagem)

        if (fsex[0].checked) { //verifica se o sexo masculino está checkado
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src','foto-bebe-m.png') //ir buscar a imagem na pasta
            } else if (idade < 21) {
                img.setAttribute('src','foto-jovem-m.png')
            } else if (idade < 50) {
                img.setAttribute('src','foto-adulto-m.png')
            } else {
                img.setAttribute('src','foto-idoso-m.png')
            }

        } else if (fsex[1].checked) { //verifica se o sexo feminino está checkado
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src','foto-bebe-f.png')
            } else if (idade < 21) {
                img.setAttribute('src','foto-jovem-f.png')
            } else if (idade < 50) {
                img.setAttribute('src','foto-adulto-f.png')
            } else {
                img.setAttribute('src','foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center' //alinhar a div ao centro através do JS
        res.innerHTML = `Detetamos ${gênero} com ${idade} anos.`
        res.appendChild(img) //adicionar um elemento que é o img
    }
}