import React, {useState, useEffect} from 'react'  //useState is in react hooks
import {Row,Col} from 'react-bootstrap'
import Product from '../Components/Product'
import axios from 'axios'

const HomeScreen = () => {
    const[products, setproducts] = useState([]) //what are we gonna call 'products' and to make changes in 'setproducts' and to pass the default in in the empty array
    // useeffect is to make a request to backend
    useEffect(() => {
       const fetchProducts = async() =>{
            const { data } = await axios.get('/api/products')
            
            setproducts(data)
       }
       fetchProducts()
    }, [] )
    return (
        <>
        <h1>Latest Products</h1>
        <Row>
            {products.map((product) => (  //what we want to show for each product
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} /> 
                 </Col>
            ))}
        </Row>
            
        </>
    )


}
//components can take in props
export default HomeScreen
