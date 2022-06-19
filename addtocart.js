let ProductCont = document.querySelector(".products");
let cartLS=JSON.parse(localStorage.getItem("cart-page")) || [];

function displayProducts(data){
    data.forEach(function (element){
      let Product = document.createElement("div");  
      let img = document.createElement('img');
      img.src = element.img;
      let name = document.createElement('p');
      name.innerText = element.name;
      let price = document.createElement('p');
      price.innerText = element.price;
      let DeleteCart = document.createElement('button');
      DeleteCart.innerHTML = ' <i class="fa-solid fa-basket-shopping"></i> Delete';
      DeleteCart.addEventListener("click",function(){
        Delete(element.prodctID);
        window.location.reload(true);
      })
      let wishlist = document.createElement('button');
      wishlist.innerHTML = '<i class="fa-solid fa-heart"></i>';

      Product.append(img,name,price,DeleteCart,wishlist);
      ProductCont.append(Product)
    });
  }

  displayProducts(cartLS);

  function Delete(id){
    let deleted = cartLS.filter(function(el){
        return el.prodctID != id;
    })
    cartLS=deleted;
    localStorage.setItem("cart-page",JSON.stringify(cartLS));
    displayProducts(cartLS);
    
  }