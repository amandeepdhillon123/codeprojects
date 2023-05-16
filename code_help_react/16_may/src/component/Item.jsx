
 import Card from "./Card"
 import './Item.css'
const  Item =({itemName}) =>{


  console.log(itemName)
      
    return(
        <Card className="ram">

        <h1>{itemName}</h1>
        
        </Card>
    )
}

export default Item