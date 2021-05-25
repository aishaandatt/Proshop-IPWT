import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
    return (
        <Nav className='justify-content-center mb-4'>
            <Nav.Item>
                {step1 ? (
                    <LinkContainer to='/login'>
                        <Nav.Link><h6>Sign In</h6></Nav.Link>
                    </LinkContainer>

                ) : <Nav.Link disabled> <h4>Sign In</h4></Nav.Link>}
            </Nav.Item>

            <Nav.Item>
                {step2 ? (
                    <LinkContainer to='/shipping'>
                        <Nav.Link><h6>Shipping</h6></Nav.Link>
                    </LinkContainer>

                ) : <Nav.Link disabled> <h6>Shipping</h6></Nav.Link>}
            </Nav.Item>
            <Nav.Item>
                {step3 ? (
                    <LinkContainer to='/payment'>
                        <Nav.Link><h6>Payment</h6></Nav.Link>
                    </LinkContainer>

                ) : <Nav.Link disabled><h6>Payment</h6> </Nav.Link>}
            </Nav.Item>
            <Nav.Item>
                {step4 ? (
                    <LinkContainer to='/placeorder'>
                        <Nav.Link><h6>Place Order</h6></Nav.Link>
                    </LinkContainer>

                ) : <Nav.Link disabled> <h6>Place Order</h6></Nav.Link>}
            </Nav.Item>

        </Nav>
    )
}

export default CheckoutSteps
