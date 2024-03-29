let order = document.querySelector('.order')
let submitbutton = document.querySelector('#form')
let divOrderName = document.querySelector('.orderName')
let divOrderEmail = document.querySelector('.orderEmail')
let divOrderContact = document.querySelector('.orderContact')
let divOrderAddress = document.querySelector('.orderAddress')
let divOrderObservacoes = document.querySelector('.orderObservacoes')
let divItemCoffe = document.querySelector('.itemCoffe')


function OrderSummary(cafe, quantidade, checkId){
    const p = document.createElement('p')
    p.innerText = `${cafe} - ${quantidade}`
    divItemCoffe.appendChild(p)
    document.querySelector(checkId).classList.add('visible')
}

function checkMensage(id, msn){
    const p = document.createElement('p')
    p.innerText = msn
    const div = document.querySelector(id)
    div.appendChild(p)
}

submitbutton.addEventListener('submit', (e) => {
    e.preventDefault();

    let name = document.querySelector('#name').value
    let email = document.querySelector('#email').value
    let contact = document.querySelector('#contact').value
    let address = document.querySelector('#address').value
    let observacoes = document.querySelector('#comentarios').value

    let haveChocolatto = document.querySelector('#chocollato').checked
    let haveCapuccino = document.querySelector('#capuccino').checked
    let haveEspresso = document.querySelector('#espresso').checked
    let haveLatte = document.querySelector('#latte').checked

    let quantityChocollato = document.querySelector('#quantityChocollato').value
    let quantityCapuccino = document.querySelector('#quantityCapuccino').value
    let quantityEspresso = document.querySelector('#quantityEspresso').value
    let quantityLatte = document.querySelector('#quantityLatte').value    
    
    divOrderName.innerText = name 
    divOrderEmail.innerText = email
    divOrderContact.innerText = contact
    divOrderAddress.innerText = address
    divOrderObservacoes.innerText = observacoes 

    let isVisibleResume = false

    function alertRequestSuccess (){
        alert("Seu pedido foi realizado com sucesso. Role a página para ver o resumo")
    }
    
    if (haveChocolatto && quantityChocollato > 0) {
        OrderSummary('Chocolatto', quantityChocollato, '#checkChocollato')
        isVisibleResume = true
    }    
    
    if (haveChocolatto && quantityChocollato == 0) {
        checkMensage('#checkChocollato', 'Informe a quantidade de Café de Chocolate')
    }  

    if (!haveChocolatto && quantityChocollato > 0) {
        checkMensage('#checkChocollato', 'Marque o Café')
    } 
    
      /*                Capuccino         */

    if (haveCapuccino && quantityCapuccino > 0) {
        OrderSummary('Cappucino Avelã', quantityCapuccino, '#checkCapuccino')
        isVisibleResume = true
    }
    
    if (haveCapuccino && quantityCapuccino == 0) {
        checkMensage('#checkCapuccino', 'Informe a quantidade de Café de avelã')
    }  

    if (!haveCapuccino && quantityCapuccino > 0) {
        checkMensage('#checkCapuccino', 'Marque o Capuccino de avelã')
    }

    /*                Espresso         */

    if (haveEspresso && quantityEspresso > 0) {
        OrderSummary('Espresso', quantityEspresso, '#checkEspresso')
        isVisibleResume = true
    }

    if (haveEspresso && quantityEspresso == 0) {
        checkMensage('#checkEspresso', 'Informe a quantidade de Café Espresso')
    }  

    if (!haveEspresso && quantityEspresso > 0) {
        checkMensage('#checkEspresso', 'Marque o Café Espresso')
    } 

      /*                Latte       */

    if (haveLatte && quantityLatte > 0) {
        OrderSummary('Latte', quantityLatte, '#checkLatte')
        isVisibleResume = true       
    }

    if (haveLatte && quantityLatte == 0) {
        checkMensage('#checkLatte', 'Informe a quantidade de Café Latte')
    }  

    if (!haveLatte && quantityLatte > 0) {
        checkMensage('#checkLatte', 'Marque o Café Latte')
    } 

    if (isVisibleResume) {
        alertRequestSuccess ()
        order.classList.toggle('visible');
    }    
})
