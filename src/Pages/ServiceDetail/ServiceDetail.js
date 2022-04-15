import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {

    const { serviceId } = useParams();

    return (
        <div>
            <h2>Welcome to Detail: {serviceId}</h2>
            bt<Link to="/checkout"><button className='btn btn-dark'>Checkout</button></Link>
        </div>
    );
};

export default ServiceDetail;