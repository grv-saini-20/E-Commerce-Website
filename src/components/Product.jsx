import React,{useState, useEffect} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import  Button  from 'react-bootstrap/Button';
import { useDispatch,useSelector } from 'react-redux';
import {add} from "../store/cartSlice";
import { getProducts } from '../store/productSlice';

function Product() {
    // const [products, setProducts] = useState([])
    const dispatch = useDispatch();
    const {data: products, status} =  useSelector(state => state.products)
    useEffect(() => {
        // fetch("https://dummyjson.com/products")
        // .then(data => data.json())
        // .then(result => setProducts(result.products))
        dispatch(getProducts());
      },[]);

      if(status === "loading") {
        return <p>Loading ...</p>
      }

      if(status === "error") {
        return <p>Something went wrong, try again later</p>
      }
        const addToCart = (product) => {
          dispatch(add(product))
        }

        const cards = products.map((product) => (
           <div key={product.id} className="col-md-3" style={{marginBottom: "20px"}}>
            <Card   className="h-100">
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
                <Button variant="primary" onClick={() => addToCart(product)}>Add to Cart</Button>
                </Card.Footer>
            </Card>
           </div>
        ))

  return (
    <>
    <h1 style={{textAlign: "center"}}>Product Dashboard</h1>
    <div className="row">
        {cards}
    </div>
    </>
  )
}

export default Product