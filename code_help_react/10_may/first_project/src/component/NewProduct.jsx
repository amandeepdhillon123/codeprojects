
import './NewProduct.css'
import ProductForm from './ProductForm';
const NewProduct =(props)=>{


    function saveProduct(product){
        console.log("i ma inside new product")

        console.log(product)

        // props.pranay(product);
    }

    return(
      <div className='new-product'>
           <ProductForm onSaveProduct={saveProduct}/>
      </div>
       
    )
}

export default NewProduct;