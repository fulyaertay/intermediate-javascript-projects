import { menuArray } from "./data.js"

const listMenu=document.querySelector("#list-orders")

function renderMenu(){
    let innerHtml=""
    menuArray.forEach(function(menu){
        innerHtml=`<div class="menuItems">
        <div class="menu">
          <div class="logo">${menu.emoji}</div>
          <div class="order-content">
            <div class="food-name">${menu.name}</div>
            <div class="ingredients">${menu.ingredients}</div>
            <div class="price">${menu.price}$</div>
          </div>
          <div class="add-cart">
            <span><i class="fa fa-plus-circle" data-add-chart=""></i></span>
          </div>
        </div>
      </div>`
      listMenu.innerHTML+=innerHtml;

    })
   
  
}
renderMenu()