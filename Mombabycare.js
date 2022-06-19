let products = [
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/3/1/31_7_4.jpg",
        name:"Mamaearth Agent Apple Body Lotion For Kids With Apple & Oat Milk",
        price:"₹351.00",
        price1:351,
        newarrival:0,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/3/0/30_6_4.jpg",
        name:"Mamaearth Brave Blueberry Body Lotion For Kids With Blueberry And Kokum",
        price:"₹351.00 ",
        price1:351,
        newarrival:1,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/2/8/28_8_4.jpg",
        name:"Mamaearth Major Mango Body Lotion For Kids With Mango Butter & Milk",
        price:"₹351.00",
        price1:351,
        newarrival:1,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/2/5/25_13_1.jpg",
        name:"Mamaearth Original Orange Body Lotion For Kids With Orange & Shea Butter",
        price:"₹351.00",
        price1:351,
        newarrival:0,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/2/3/23_11_3.jpg",
        name:"Mamaearth Super Strawberry Body Lotion For Kids With Strawberry & Shea",
        price:"₹351.00",
        price1:351,
        newarrival:0,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/1/7/17_14_2.jpg",
        name:"Mamaearth After Bite Roll On For Rashes And Insect Bites - Roman Chamomile &",
        price:"₹433.00",
        price1:433,
        newarrival:1,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/v/a/va126.jpg",
        name:"Mamaearth Milky Soft Body Lotion With Oats, Milk & Calendula",
        price:"₹347.00 ",
        price1:347,
        newarrival:1,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/v/a/va96.jpg",
        name:"Mamaearth Milky Soft Bathing Bar For Babies With Oats, Milk & Calendula - Pack Of 2",
        price:"₹438.00",
        price1:438,
        newarrival:1,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/v/a/va94.jpg",
        name:"Mamaearth Milky Soft Diaper Rash Cream For Babies",
        price:"₹299.00",
        price1:299,
        newarrival:0,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/e/be176.jpg",
        name:"Chicco Natural Sensation Bath Shampoo",
        price:"₹450.00",
        price1:450,
        newarrival:1,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/e/be172.jpg",
        name:"Johnson's Baby Powder",
        price:"₹235.00",
        price1:235,
        newarrival:0,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/m/m/mm1_1.jpg",
        name:"Mamaearth Agent Apple Body Wash For Kids With Apple & Oat Protein",
        price:"₹299.00",
        price1:299,
        newarrival:0,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/m/m/mmm232.jpg",
        name:"Mamaearth Natural Baby Lip Balm For Babies With Coconut Oil, Cocoa Butter &",
        price:"₹150.00 ",
        price1:150,
        newarrival:1,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/m/m/mmm243.jpg",
        name:"Mamaearth Moisturizing Daily Lotion For Babies And Milky Soft Natural Baby Face",
        price:"₹270.00 ",
        price1:270,
        newarrival:0,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/m/m/mmm211.jpg",
        name:"Mamaearth Nourishing Bathing Bar For Kids (Pack Of 5)",
        price:"₹425.00",
        price1:425,
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