let numero = document.getElementById('numb')
let sel = document.getElementById('tab')
let res = document.getElementById('res')
let valores = []

function isNumero(n){

    if(Number(n) >=1 && Number(n) <=100){
        return true
    }else{
      return false
    }

}

function inLista(n, l){

    if(l.indexOf(Number(n)) != -1){
        return true 
    }else{
        return false
    }

}

function adicionar(){

    if(isNumero(numero.value) && !inLista(numero.value, valores)){
        valores.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `Valor ${numero.value} Adicionado`
        sel.appendChild(item)
        res.innerHTML = ''

   }else{
    window.alert('Valor inválido ou já existe na lista')
   }

   numero.value = ''
   numero.focus()
    
}

function finalizar(){

    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar')
    }else{

        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){
            soma += valores[pos]
        if(valores[pos] > maior)
            maior = valores[pos]
        if(valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma/total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} Valores cadastrados</p>`
        res.innerHTML += `<p>O maior valor foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor foi ${menor}</p>`
        res.innerHTML += `<p>A soma de todos os valores foi ${soma}`
        res.innerHTML += `<p>A media de todos os valores é ${media}`
    }
}