let products = [
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/s/8/s8.jpg",
        name:"Calvin Klein Eternity For Men Eau De Parfum",
        price:"₹3,468.00",
        price1:3468,
        productID: "women1",
        nwearrival:1,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/o/fo21.jpg",
        name:"Fogg Bleu Series Island Fragrance Body Spray",
        price:"₹255.00",
        price1:255,
        productID: "women2",
        nwearrival:0,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/o/fo20.jpg",
        name:"Fogg Force Fragrance Body Spray",
        price:"₹230.00",
        price1:230,
        productID: "women3",
        nwearrival:0,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/o/fo19.jpg",
        name:"Fogg Punch Fragrance Body Spray",
        price:"₹230.00",
        price1:230,
        productID: "women4",
        nwearrival:1,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/o/fo18.jpg",
        name:"Fogg Bleu Series Mountain Fragrance Body Spray",
        price:"₹255.00",
        price1:255,
        productID: "women5",
        nwearrival:1,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/o/fo17.jpg",
        name:"Fogg Rush Fragrance Body Spray",
        price:"₹230.00",
        price1:230,
        productID: "women6",
        nwearrival:0,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/o/fo16.jpg",
        name:"Fogg Bleu Skies Fragrance Body Spray",
        price:"₹275.00",
        price1:275,
        productID: "women7",
        nwearrival:1
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/o/fo15.jpg",
        name:"Fogg Scent Intensio Men Fragrance Body Spray",
        price:"₹539.00",
        price1:539,
        productID: "women8",
        nwearrival:0,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/o/fo13.jpg",
        name:"Fogg Master Cedar Body Spray",
        price:"₹275.00",
        price1:275,
        productID: "women9",
        nwearrival:0,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/o/fo12.jpg",
        name:"Fogg Black Fresh Aromatic Fragrance Body Spray",
        price:"₹250.00",
        price1:250,
        productID: "women10",
        nwearrival:1,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/o/fo10.jpg",
        name:"Fogg Master Agar Body Spray",
        price:"₹275.00",
        price1:275,
        productID: "women11",
        nwearrival:0,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/o/fo9.jpg",
        name:"Fogg Black Fresh Fougere Body Spray Deodorant For",
        price:"₹250.00",
        price1:250,
        productID: "women12",
        nwearrival:1,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/o/fo8.jpg",
        name:"Fogg Scent Xpressio Men Fragrance Body Spray",
        price:"₹539.00",
        price1:539,
        productID: "women13",
        nwearrival:1,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/o/fo7.jpg",
        name:"Fogg Dynamic Fragrance Body Spray",
        price:"₹250.00",
        price1:250,
        productID: "women14",
        nwearrival:0,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/o/fo6.jpg",
        name:"Fogg Scent Xtremo Men Fragrance Body Spray",
        price:"₹539.00",
        price1:539,
        productID: "women15",
        nwearrival:1,
    },
];
let ProductCont = document.querySelector('.products');
let cartLS=JSON.parse(localStorage.getItem("cart-page")) || [];

function displayProducts(data){
    ProductCont.innerHTML="";
    data.forEach(function (element){
      let Product = document.createElement("div");  
      let img = document.createElement('img');
      img.src = element.img;
      let name = document.createElement('p');
      name.innerText = element.name;
      let price = document.createElement('p');
      price.innerText = element.price;
      let buttonCart = document.createElement('button');
      buttonCart.innerHTML = ' <i class="fa-solid fa-basket-shopping"></i> Add to Cart';
      buttonCart.addEventListener("click",function(){
        if( addToCartfunc(element.productID)===true){
          alert("Product Added Successfully");
            cartLS.push(element);
            localStorage.setItem("cart-page",JSON.stringify(cartLS));
        }else{
            alert("product Already in the cart");
        }

      })
      let wishlist = document.createElement('button');
      wishlist.innerHTML = '<i class="fa-solid fa-heart"></i>';

      Product.append(img,name,price,buttonCart,wishlist)
      ProductCont.append(Product)
    });
  }

  displayProducts(products);
  function addToCartfunc(id){
    for(i=0;i<cartLS.length;i++){
        if(cartLS[i].productID ==id){
   
    return false;
        }
    }
    return true;
  }

  let catalog =document.getElementsByClassName('contentBox');

  for (i = 0;i < catalog.length; i++ ){
    catalog[i].addEventListener("click", function(){
        this.classList.toggle('active')
    })
  }

  let filter = document.getElementById("filter");

  filter.addEventListener("change",function(){
    if(filter.value === "position"){
        displayProducts(products);
        window.location.reload(true);
    }else if (filter.value === "NewArrival"){
        let filtered = products.filter(function(element){
            return element.nwearrival===1;
        })
        displayProducts(filtered);
    }else if (filter.value === "LowToHigh"){
       let priceLH = products.sort(function(a,b){
            if(a.price1 > b.price1) return 1
            if(a.price1 < b.price1) return -1
            return 0
        })
        displayProducts(priceLH);
    }else if (filter.value === "HighToLow"){
        let priceHL = products.sort(function(a,b){
             if(a.price1 > b.price1) return -1
             if(a.price1 < b.price1) return 1
             return 0
         })
         displayProducts(priceHL);
     }else if (filter.value === "Name"){
        let nameP = products.sort(function(a,b){
             if(a.name > b.name) return 1
             if(a.name < b.name) return -1
             return 0
         })
         displayProducts(nameP);
     }
  })