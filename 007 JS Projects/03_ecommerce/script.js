document.addEventListener("DOMContentLoaded",()=>{
    const product=[
        {id:1,name:"Product 1",price:24},
        {id:2,name:"Product 2",price:242},
        {id:3,name:"Product 3",price:241}
    ]
    console.log(product)

    const cart=[]
    const productList=document.getElementById("product-list");
    const cartItems=document.getElementById("cart-items");
    const emptyCartMessage=document.getElementById("empty-cart");
    const cartTotalMessage=document.getElementById("cart-total");

    product.forEach(product =>{
        const productDiv=document.createElement('div')
        productDiv.classList.add('product')
        productDiv.innerHTML=`
        <span>${product.name} -$${product.price.toFixed(2)}</span>
        <button data-id="${product.id}">Add to cart</button>
        `;
        productList.appendChild(productDiv)
    });

    productList.addEventListener('click',(e)=>{
        if(e.target.tagName === 'BUTTON'){
            const productId=parseInt(e.target.getAttribute('data-id'));
            const selectedProduct=product.find(p=>p.id===productId);
            cart.push(selectedProduct);
            updateCart();
        }
    });

    function updateCart(){
        cartItems.innerHTML='';
        if(cart.length === 0){
            emptyCartMessage.style.display='block'; 
            cartTotalMessage.textContent='';
        }else{
            emptyCartMessage.style.display='none';
            cart.forEach(item =>{
                const cartItemDiv=document.createElement('div');
                cartItemDiv.classList.add('cart-item');
                cartItemDiv.textContent=`${item.name} - $${item.price.toFixed(2)}`;
                cartItems.appendChild(cartItemDiv);
            }
            );
            const total=cart.reduce((sum,item)=>sum+item.price,0);
            cartTotalMessage.textContent=`Total: $${total.toFixed(2)}`;
        }
    }

    function clearCart(){
        cart.length=0;
        updateCart();
    }   

    function checkout(){
        if(cart.length === 0){
            alert("Your cart is empty!");
        }else{
            const total=cart.reduce((sum,item)=>sum+item.price,0);
            alert(`Thank you for your purchase! Total: $${total.toFixed(2)}`);
            clearCart();
        }
    }

    document.getElementById('clear-cart').addEventListener('click',clearCart);
    document.getElementById('checkout').addEventListener('click',checkout);

    
}) 