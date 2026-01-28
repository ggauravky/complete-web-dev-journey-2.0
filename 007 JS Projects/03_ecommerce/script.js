document.addEventListener("DOMContentLoaded",()=>{
    const product=[
        {id:1,name:"Product 1",price:24},
        {id:2,name:"Product 2",price:242},
        {id:3,name:"Product 3",price:241}
    ]
    console.log(product)

    const cart=[]
    const productList=document.getElementById("product-list")

    product.forEach(product =>{
        const productDiv=document.createElement('div')
        productDiv.classList.add('product')
        productDiv.innerHTML=`
        <span>${product.name} -$${product.price.toFixed(2)}</span>
        <button data-id="${product.id}">Add to cart</button>
        `;
        productList.appendChild(productDiv)
    })
})