function contar() {
    let ini = document.getElementById('txti') //buscar os elementos html
    let fim = document.getElementById('txtf') //buscar os elementos html
    let passo = document.getElementById('txtp') //buscar os elementos html
    let res = document.getElementById('res') //buscar os elementos html

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        //validação para não termos campos vazios
        res.innerHTML = ('Impossível contar!')
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        res.innerHTML = ('Contando: <br>')
        let i = Number(ini.value) //passar para number o inicio
        let f = Number(fim.value) //passar para number o fim
        let p = Number(passo.value) //passar para number o passo
        if (p <= 0){
            window.alert ('Passo inválido! Considerando PASSO 1')
            p = 1
        }

        if (i < f) {
            //Contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449} ` //código do emoji em unicode (unicode.org)
            }
        } else {
            //Contagem decrescente
            for (let c = i; c >= f; c -= p) { 
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}` //aparecer a bandeira no fim
    }
}