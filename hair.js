let products = [
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/r/e/repair_shampoo_650-2_1_1.jpg",
        name:"Dove Intense Repair Shampoo 650ml",
        price:"₹350.00 ",
        price1:350,
        newarrival:0,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/e/f/efbafe2nywow000083__1_.jpg",
        name:"WOW Skin Science 10 In 1 Miracle Hair Oil",

        price:"₹515.00",
        price1:515,
        newarrival:0,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/8/8/88b239c8904311904281__1_.jpg",
        name:"WOW Skin Science Himalayan Rose Conditioner",
        price:"₹395.00",
        price1:395,
        newarrival:0,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/d/4/d4fb39c8904311904267__1_.jpg",
        name:"WOW Skin Science Moroccan Argan Hair Oil - WITH COMB",
        price:"₹349.00",
        price1:349,
        newarrival:1,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/9/a/9a21c478906105615175-2.jpg",
        name:"WOW Skin Science Rice Hair Mask With Rice Water, Rice ",
        price:"₹449.00",
        price1:449,
        newarrival:1,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/5/1/51x4yt0-ucl._sl1000_.jpg",
        name:"Joy Natural Actives Dandruff Control And Scalp Nourish",
        price:"₹295.00",
        price1:295,
        newarrival:0,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/8/9/8904311903680_1.jpg",
        name:"WOW Skin Science Green Tea & Tea Tree Anti-Dandruff Shampoo",
        price:"₹429.00",
        price1:429,
        newarrival:1,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/e/0/e08092aorgaa00000032_p.jpg",
        name:"Organic Harvests Color Protect Quinoa Shampoo, Sulfate-Free Shampoo For",
        price:"₹364.00 ",
        price1:364,
        newarrival:0,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/t/e/tea-tree-beard-oil_1.jpg",
        name:"Mamaearth Tea Tree Beard Oil With Tea Tree & Salicylic Acid For Itch-Free Beard",
        price:"₹449.00",
        price1:449,
        newarrival:0,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/o/n/onion-beard-oil_1.jpg",
        name:"Mamaearth Onion Beard Oil With Onion & Redensyl For Beard Growth",
        price:"₹449.00",
        price1:449,
        newarrival:1,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/a/l/almond-beard-oil_1.jpg",
        name:"Mamaearth Almond Beard Oil With Almond & Biotin For Beard Nourishment",
        price:"₹449.00",
        price1:449,
        newarrival:0,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/4/0/4045787429695_2.jpg",
        name:"Schwarzkopf Professional Bonacure Keratin Smooth Perfect Masque",
        price:"₹930.00",
        price1:930,
        newarrival:0,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/4/0/4045787429534.jpg",
        name:"Schwarzkopf Professional Bonacure Hyaluronic Moisture Kick Masque",
        price:"₹950.00 ",
        price1:950,
        newarrival:0,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/8/9/8904311902027_1.jpg",
        name:"WOW Skin Science Hair Mask For Dry And Damaged Hair",
        price:"₹489.00",
        price1:489,
        newarrival:0,
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