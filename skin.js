let products = [
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/i/m/image1_600x.jpg",
        name:"Lotus Herbals Whiteglow Vitamin C Radiance Cream",
        price:"₹428.00",
        price1:428,
        newarrival:1,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/3/6/3699c478906105612174-2.jpg",
        name:"Wow Skin Science Caffeine Face Serum",
        price:"₹515.00",
        price1:515,
        newarrival:0,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/8/9/8904304651284_1.jpg",
        name:"Wow Skin Science Activated Charcoal Face Scrub",
        price:"₹375.00",
        price1:375,
        newarrival:0,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/a/c/activated_charcoal_face_mask2.jpg",
        name:"Wow Skin Science Activated Charcoal Face Mask",
        price:"₹435.00 ",
        price1:435,
        newarrival:1,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/0/f0c4f25lotus00000014.jpg",
        name:"Lotus Organics+ Bakuchiol Plant Retinol Miracle Facial",
        price:"₹896.00",
        price1:896,
        newarrival:0,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/5/3/53f7f568906080030383_rvn1.jpg",
        nam:"Organic Harvest Masseuscious Damage",
        price:"₹1,420.00",
        price1:1420,
        newarrival:1,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/8/9/8904311901495_1_1_.jpg",
        name:"WOW Skin Science AM2PM Sunscreen SPF 50 Lotion",
        price:"₹385.00 ",
        price1:385,
        newarrival:0,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/d/fd794d08904304373124.jpg",
        name:"WOW Skin Science Activated Charcoal Peel Off Face Mask",
        price:"₹399.00",
        price1:399,
        newarrival:0,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/l/flowers-of-youth-essence-serum_2_1.jpg",
        name:"Mamaearth Flowers Of Youth Essence Serum With",
        price:"₹599.00",
        price1:599,
        newarrival:1,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/7/b/7ba61598904352001284_1.jpg",
        name:"Biotique Advanced Organics Tea Tree Treament Oil",
        price:"₹504.00",
        price1:504,
        newarrival:0,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/8/9/8904311901631_1.jpg",
        name:"WOW Skin Science Kids Cool-The-Rays Sunscreen Cream -",
        price:"₹349.00",
        price1:349,
        newarrival:0,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/3/e/3eb5e308904311902874_1.jpg",
        name:"WOW Skin Science Raw African Shea Body Butter",
        price:"₹440.00",
        price1:440,
        newarrival:0,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/7/5/759639c8904311903499__1_.jpg",
        name:"WOW Skin Science Apple Cider Vinegar Face Wash",
        price:"₹399.00",
        price1:399,
        newarrival:0,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/a/a/aae1c478906105612136-2.jpg",
        name:"WOW Skin Science Hyaluronic Acid Face Serum",
        price:"₹630.00",
        price1:630,
        newarrival:0,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/7/0/70bf0be8904311901860_1.jpg",
        name:" WOW Skin Science Aloe Vera Multi-Vitamin Face Cream",
        price:"₹540.00",
        price1:540,
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