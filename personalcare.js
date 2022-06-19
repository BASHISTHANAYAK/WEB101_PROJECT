let products = [
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/8/9/8908003416557_1.png",
        name:"Organic Harvest Cleansing Milk With Essential Oils",
        price:"₹491.00 ",
        price1:491,
        newarrival:1,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/6/8/680c9508904311903031__1_.jpg",
        name:"WOW Skin Science Thai Body Massage Oil",
        price:"₹540.00",
        price1:540,
        newarrival:0,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/c/c/cca52498904311901341_1.jpg",
        name:"WOW Skin Science Moroccan Rose Otto Foaming Body Wash",
        price:"₹339.00",
        price1:339,
        newarrival:1,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/4/0/407c3408908003416601_1.jpg",
        name:"Organic Harvest Lavender Essential Oil",
        price:"₹405.00",
        price1:405,
        newarrival:0,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/v/a/va109.jpg",
        name:"Mamaearth Vitamin C Nourishing Bathing Soap With Vitamin C And Honey",
        price:"₹299.00",
        price1:299,
        newarrival:1,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/v/a/va106.jpg",
        name:"Mamaearth Coco Nourishing Bathing Soap With Coffee & Cocoa",
        price:"₹299.00",
        price1:299,
        newarrival:1,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/v/a/va103.jpg",
        name:"Mamaearth Tea Tree Nourishing Bathing Soap With Tea Tree And Neem For Skin",
        price:"₹299.00",
        price1:299,
        newarrival:1,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/v/a/va101.jpg",
        name:"Mamaearth Ubtan Nourishing Bathing Soap With Turmeric & Saffron",
        price:"₹299.00",
        price1:299,
        newarrival:0,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/v/a/va99.jpg",
        name:"Mamaearth Natural Nourishing Bathing Soaps",
        price:"₹299.00",
        price1:299,
        newarrival:1,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/v/a/va92.jpg",
        name:"Mamaearth Charcoal Nourishing Bathing Soap With Charcoal And Mint For Deep",
        price:"₹299.00",
        price1:299,
        newarrival:0,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/e/be167.jpeg",
        name:"Beeone Professional Argan Oil Liposoluble Wax",
        price:"₹842.00 ",
        price1:842,
        newarrival:1,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/e/be166.jpeg",
        name:"BeeOne Professional Charcoal Liposoluble Wax",
        price:"₹842.00",
        price1:842,
        newarrival:0,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/e/be165.jpeg",
        name:"BeeOne Professional Avocado Liposoluble Wax",
        price:"₹842.00",
        price1:842,
        newarrival:1,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/e/be164.jpeg",
        name:"BeeOne Professional De Tan Liposoluble Wax",
        price:"₹842.00 ",
        price1:842,
        newarrival:1,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/e/be163.jpeg",
        name:"BeeOne Professional Dark Chocolate Liposoluble Wax",
        price:"₹842.00",
        price1:842,
        newarrival:1,
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