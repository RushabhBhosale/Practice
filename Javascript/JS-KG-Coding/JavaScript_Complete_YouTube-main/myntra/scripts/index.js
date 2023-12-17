let itemsContainer = document.querySelector('.items-container')

let innerHTML = '';

items.forEach(item => {
   innerHTML += `
   <div class="item-container">
      <img class="item-image" src="${item.image}" alt="">
      <div class="rating">
         ${item.rating.stars}⭐ | 1.56k
      </div>
      <div class="company-name">${item.company}</div>
      <div class="item-name">${item.item_name}</div>
      <div class="price">
         <span class="current-price">Rs ${item.current_price}</span>
         <span class="original-price">Rs ${item.original_price}</span>
         <span class="discount">(${item.discount}% OFF)</span>
      </div>
   <button class="btn-add-bag">Add to bag</button>
   </div>
   `
});

itemsContainer.innerHTML = innerHTML;