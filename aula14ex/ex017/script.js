function tabuada() {
    let num = document.getElementById ('txtn')
    let tab = document.getElementById ('seltab')

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value) //passar a variável para number
        let c = 1
        tab.innerHTML = '' //limpar o select sempre que é calculada a tabuada
        while (c <= 10){
            let item = document.createElement('option') //criar um elemento no select via JS
            item.text = `${n} x ${c} = ${n*c}` //calculo da tabuada
            tab.appendChild (item) //colocar o elemento no select via JS
            c++ //incremento da variável do ciclo
        }
    }
}