import { menuArray } from './data.js'

const orderBtn = document.getElementById('order-btn')
const yourOrderTitle = document.getElementById('your-order-title')
const payBtn = document.getElementById('pay-btn')

let sumOrderPrice = 0

document.addEventListener('click', function(e){
    if(e.target.dataset.add){
        handleAddClick(e.target.dataset.add)
    }
})

orderBtn.addEventListener('click', function(){
    document.getElementById('card-deatils').style.display = 'block'
})

payBtn.addEventListener('click', function(e){
    e.preventDefault()
    document.getElementById('card-deatils').style.display = 'none'
    document.getElementById('your-order').style.display = 'none'
    document.getElementById('thank-you').style.display = 'block'
})

function handleAddClick(addId){
    let orderHtml = ''
    
    const obj = menuArray.filter(function(add, tt){
        return add.id == addId
    })[0]
    let total = ''
    orderHtml += `
        <div class="order-section-price">
            <div class="order-name"> ${obj.name} <span class="remove-order">remove</span></div>
            <div class="order-price">$${obj.price} </div>
        </div>
        
    `
    sumOrderPrice += obj.price
    
    if(sumOrderPrice > 0) {
        orderBtn.style.display = 'block'
        yourOrderTitle.style.display = 'block'
    }
    
    total = `
         <div class="total-div">
            <div class="order-name total">Total price:</div>
            <div class="order-price">$${sumOrderPrice} </div>
        </div
        
        `
    
    // console.log(sumOrderPrice)
        document.getElementById('single-order').innerHTML += orderHtml
        document.getElementById('total').innerHTML = total
}

function getFeed(){
    let feedHtml = ''
    
    menuArray.forEach(function(feed){
       
        feedHtml +=`
            <div class="singel-menu">
                <div class="menu-content">
                    <div class="emoji">${feed.emoji}</div>
                    <div>
                        <p class="name">${feed.name}</p>
                        <p class="ingredients">${feed.ingredients}</p>
                        <p class="price">$${feed.price}</p>
                    </div>
                </div>
                <img src="./images/add-btn.png" alt="add btn" class="add-btn" data-add=" ${feed.id}"/>
            </div>
        `
    })
    return feedHtml
}

function getTotal(){
    let price = 0
    
    
}

function render(){
    document.getElementById('menu-content').innerHTML = getFeed()
    
}

render()