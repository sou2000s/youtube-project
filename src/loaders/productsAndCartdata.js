
export const productsAndCartData = async () => {
 const productsdata = await fetch('products.json')
 const product = await productsdata.json()
  

 
       
 return product;

}