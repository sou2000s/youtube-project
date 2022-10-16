const addtodb = id => {
    let shoppingCart = {}

    const savedCart = localStorage.getItem('cart')
   
    if (savedCart){
        shoppingCart = JSON.parse(savedCart)
    }

    const quantity = shoppingCart[id]
    if(quantity) {
        const newQuantity = quantity + 1 ;
        shoppingCart[id] = newQuantity
    } else{
        shoppingCart[id] = 1
    }
    localStorage.setItem('cart' , JSON.stringify(shoppingCart))
}

export {addtodb}