var cart =document.getElementById("cart")
function opencart(){
    if(cart.style.display == "none"){
        cart.style.display="block"
    }
    else if(cart.style.display == "block"){
        cart.style.display="none"
    }
}
cart.style.display="none"

let products = {
    data: [
        {
            name:"túi giấy",
            price:"4k/1túi",
            image:"https://th.bing.com/th/id/R.c0f1340aebada6a695838c95e3095b35?rik=g9a7FnGdyhqPUw&pid=ImgRaw&r=0"
        },
        {
            name:"hộp giấy",
            price:"5k/hộp",
            image:"../img/hộp giấy.jbg"
        },
        {
            name:"ly giấy",
            price:"1k/cái",
            image:"../img/ly giấy.jbg"
        }
        ,
        {
            name:"hộp bã mía",
            price:"2k/cái",
            image:"../img/hộp bã mía.jbg"
        }
        ,
        {
            name:"ống hút giấy",
            price:"500đ/cái",
            image:"../img/ống hút giấy.jbg"
        }
        ,
        {
            name:"khay giấy",
            price:"1.500đ/cái",
            image:"../img/khay giấy.jbg"
        }
        ,
        {
            name:"tô giấy",
            price:"2k/cái",
            image:"../img/tô giấy.jbg"
        }
        ]
}
for (let items of products.data) {

    let card = document.createElement("div")
    card.classList.add("card")

    let imgContainer = document.createElement("div")
    imgContainer.classList.add("image-container")

    let image = document.createElement("img")
    image.setAttribute("src", items.image)
    imgContainer.appendChild(image)
    card.appendChild(imgContainer)

    let container = document.createElement("div")
    container.classList.add("container")

    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = items.name.toUpperCase();
    container.appendChild(name);

    let price = document.createElement("h6");
    price.innerHTML = "<b>Price:</b> " + items.price;
    container.appendChild(price);

    let btn = document.createElement("button")
    btn.classList.add('btn')
    btn.setAttribute("onclick", "addToCart()")
    btn.innerHTML = "Thêm vào giỏ hàng"
    container.appendChild(btn)
  
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}

for (let i of products.data){
    let product = JSON.parse(localStorage.product)
    product.push({
        name: items.name,
        price: items.price , 
        images: items.image
    })

    localStorage.setItem("product", JSON.stringify(product))
}





