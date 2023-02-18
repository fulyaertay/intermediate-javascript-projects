import { menuArray } from "./data.js"
const orderDetails=document.querySelector(".order-details")
const listMenu=document.querySelector("#list-orders")

document.addEventListener("click",function(e){
    if(e.target.dataset.add){
        handleOrderDetails(e.target.dataset.add)

    }
})

function  handleOrderDetails(menuId){
   const menuObject= menuArray.filter(function(menu){
        return menu.id == menuId
    })[0]
    orderDetails.classList.toggle("hidden")





 


}

function renderMenu(){
    let innerHtml=""
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
   
  
}
renderMenu()