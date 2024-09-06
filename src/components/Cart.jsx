import React from 'react'
import { useSelector } from 'react-redux'
import Card from "react-bootstrap/Card";
import  Button  from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import {remove} from "../store/cartSlice";

function Cart() {
  const cartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    dispatch(remove(id))
  }

  const cards = cartItems.map((product) => (
    <div key={product.id} className="col-md-3" style={{marginBottom: "20px"}}>
     <Card className="h-100">
         <div className="img" style={{textAlign: "center"}}>
         <Card.Img variant="top" src={product.images[0]} style={{width: "150px", height: "150px", objectFit: "cover", aspectRatio: "1/1"}} />
         </div>
         <Card.Body>
         <Card.Title>{product.title}</Card.Title>
         <Card.Text> 
         {product.description}
         <br />
         USD: {product.price}$
         </Card.Text>
         </Card.Body>
         <Card.Footer>
         <Button variant="primary" onClick={() => removeFromCart(product.id)}>Remove Item</Button>
         </Card.Footer>
     </Card>
    </div>
  ))
  return (
    <>
    <h1 style={{textAlign: "center"}}>Cart</h1>
    <div className="row">
        {cards}
    </div>
    </>
  )
}

export default Cart