
import './Card.css'
function Card(props){
    console.log(props.className)
  
    // const demo = 'card' + props.className
    return(
        <div className='card'>
            {props.children}
        </div>
    )
}

export default Card;