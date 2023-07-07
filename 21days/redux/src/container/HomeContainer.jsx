import Home from "../component/Home";
import {  connect } from "react-redux";

import { AddToCart } from "../services/Actions/Action";


const mapStateToProps = state =>({

})
const mapDispatchToProps = dispatch =>({

     addToCartHandler : data => dispatch(AddToCart(data))
})


export default connect(mapStateToProps,mapDispatchToProps)(Home)










// export default Home;