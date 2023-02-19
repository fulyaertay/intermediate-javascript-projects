import { menuArray } from "./data.js"
const orderDetails=document.querySelector(".order-details")
const listMenu=document.querySelector("#list-orders")




function renderMenu(){
    let innerHtml=""
    let orderDetail=""
    menuArray.forEach(function(menu){
        innerHtml=`
        <div class="menu">
          <div class="logo">${menu.emoji}</div>
          <div class="order-content">
            <div class="food-name">${menu.name}</div>
            <div class="ingredients">${menu.ingredients}</div>
            <div class="price">${menu.price}$</div>
          </div>
          <div class="add-cart">
            <span><i class="fa fa-plus-circle" data-add=${menu.id}></i></span>
          </div>

        
       
      </div>`
      listMenu.innerHTML+=innerHtml;

   


    })

    document.addEventListener("click",function(e){
        if(e.target.dataset.add){
           let orderId=e.target.dataset.add;
           const menuObject= menuArray.filter(function(menu){
            return menu.id == orderId
        })[0]

        listMenu.innerHTML+=`
        <h4>Your Order</h4>
        <div class="orders">
          <div>${menuObject.name} <span class="remove">remove</span></div>
          <div class="order-price">${menuObject.price}$</div>
        </div>
        <hr />
        <div class="orders">
          <div>Total Price</div>
          <div class="order-price">${menuObject.price}$</div>
        </div>
        <div class="orders">
          <button class="completeBtn">Complete Order</button>
        </div>`

        

    
        }
    })


    
   
  
}
renderMenu()