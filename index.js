let order = document.querySelector('.order')
let submitbutton = document.querySelector('.submitbutton')
let divOrderName = document.querySelector('.orderName')
let divOrderEmail = document.querySelector('.orderEmail')
let divOrderContact = document.querySelector('.orderContact')
let divOrderAddress = document.querySelector('.orderAddress')
let divOrderObservacoes = document.querySelector('.orderObservacoes')
let divItemCoffe = document.querySelector('.itemCoffe')


submitbutton.addEventListener('click', (e) => {
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
    
    function alertSelectCoffee() {
        alert("Selecione o tipo de café desejado")
    }

    function alertSelectAmountCoffee() {
        alert("Selecione a quantidade de café")
    }

    if (haveChocolatto && quantityChocollato > 0) {
        const p = document.createElement('p')
        p.innerText = `Chocolatto - ${quantityChocollato}`
        divItemCoffe.appendChild(p)

        isVisibleResume = true
    }    
    
    if (haveChocolatto && quantityChocollato == 0) {
        alertSelectAmountCoffee()
    }  

    if (!haveChocolatto && quantityChocollato > 0) {
        alertSelectCoffee()
    }  

    if (haveCapuccino && quantityCapuccino > 0) {
        const p = document.createElement('p')
        p.innerText = `Capuccino Avelã - ${quantityCapuccino}`
        divItemCoffe.appendChild(p)
        
        isVisibleResume = true
    }
    
    if (haveCapuccino && quantityCapuccino == 0) {
        alertSelectAmountCoffee()
    }  

    if (!haveCapuccino && quantityCapuccino > 0) {
        alertSelectCoffee()
    }

    if (haveEspresso && quantityEspresso > 0) {
        const p = document.createElement('p')
        p.innerText = `Espresso - ${quantityEspresso}`
        divItemCoffe.appendChild(p)

        isVisibleResume = true
    }

    if (haveEspresso && quantityEspresso == 0) {
        alertSelectAmountCoffee()
    }  

    if (!haveEspresso && quantityEspresso > 0) {
        alertSelectCoffee()
    } 

    if (haveLatte && quantityLatte > 0) {
        const p = document.createElement('p')
        p.innerText = `Latte - ${quantityLatte}`
        divItemCoffe.appendChild(p)        

        isVisibleResume = true        
    }

    if (haveLatte && quantityLatte == 0) {
        alertSelectAmountCoffee()
    }  

    if (!haveLatte && quantityLatte > 0) {
        alertSelectCoffee()
    } 

    if (isVisibleResume) {
        alertRequestSuccess ()
        order.classList.toggle('visible');
    }    
})
