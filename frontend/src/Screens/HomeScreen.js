import React, { useEffect } from 'react'  //useState is in react hooks
import { Row, Col } from 'react-bootstrap'
import Product from '../Components/Product'
import Message from '../Components/Message'
import Loader from '../Components/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'

const HomeScreen = ({ match }) => {

    const keyword = match.params.keyword
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { loading, error, products } = productList

    useEffect(() => {
        dispatch(listProducts(keyword))
    }, [dispatch, keyword])


    return (
        <>
            <h1>Latest Products</h1>
            {loading ? (<Loader />) : error ? (<Message variant='danger'>{error}</Message>) : (<Row>
                {products.map((product) => (  //what we want to show for each product
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
            )}

        </>
    )


}
//components can take in props
export default HomeScreen
