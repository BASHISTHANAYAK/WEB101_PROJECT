let products = [
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/2/7/277cf77missc00000081_1.jpg",
        name:"Miss Claire Eyelash Glue - Clear Tone",
        price:"₹322.00",
        price1:322,
        newarrival:0,

    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/5/b/5b990e16902395773146_3.jpg",
        name:"Maybelline New York Fit Me Primer - Dewy+Smooth",
        price:"₹521.00",
        price1:521,
        newarrival:1,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/6/9/6902395735908_0.jpg",
        name:"L'Oreal Paris Infallible Full Wear Concealer",
        price:"₹735.00",
        price1:735,
        newarrival:1,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/5/1/51c18ra5qzs._sl1500_.jpg",
        name:"Faces Canada Ultime Pro Matte Play Eyeliner",
        price:"₹604.00",
        price1:604,
        newarrival:1,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/c/bcf6c6c8904052434726__2_.jpg",
        name:"Colorbar Intensify Liquid Gel Eyeliner - Arabian Nights",
        price:"₹699.00",
        price1:699,
        newarrival:0,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/6/1/618a4rcg7il._sl1500_.jpg",
        name:"NYX Professional Makeup Pore Filler",
        price:"₹1,378.00",
        price1:1378,
        newarrival:1,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/a/r/artboard_1_5.jpg",
        name:"Mamaearth Naturally Matte Lip Serum - Matte Liquid",
        price:"₹539.00 ",
        price1:539,
        newarrival:0,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/8/9/8904052409748-2.jpg",
        name:"Colorbar Infinite 24Hrs Eyeliner",
        price:"₹651.00",
        price1:651,
        newarrival:0,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/8/0/800897828363_02.jpg",
        name:"NYX Professional Makeup Butter Gloss - Angel Food",
        price:"₹495.00",
        price1:495,
        newarrival:1,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/a/7/a74edf0nypac00001337m1.jpg",
        name:"PAC Makeup Blender Foundation",
        price:"₹675.00",
        price1:675,
        newarrival:1,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/5/7/57180618906087776895_rose__6_.jpg",
        name:"Mamaearth Rose Tinted 100% Natural Lip Balm",
        price:"₹299.00",
        price1:299,
        newarrival:0,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/2/f/2ff90618906087776918__6_.jpg",
        name:"Mamaearth Ubtan Tinted 100% Natural Lip Balm For",
        price:"₹299.00",
        price1:299,
        newarrival:1,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/a/0/a0c40618906087776895_vitc__6_.jpg",
        name:"Mamaearth Vitamin C Tinted 100% Natural Lip Balm For Lip",
        price:"₹299.00",
        price1:299,
        newarrival:1,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/3/_/3_126.jpg",
        name:"Faces Canada UltimePro Twist Eye Kajal Liner",
        price:"₹539.00",
        price1:539,
        newarrival:1,
    },
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/5/_/5_91.jpg",
        name:"Miss Claire Mineral Blusher Kit - 3716-4-04",
        price:"₹338.00",
        price1:338,
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