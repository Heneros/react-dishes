import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { GET_DISH } from '../graphql/queries';
import Spinner from '../components/Spinner';
import Header from './Header';


export default function ProductPage() {
    const { id } = useParams();
    const { loading, error, data } = useQuery(GET_DISH, { variables: { id } });
    // const { name, description, weight, price } = data;

    if (loading) return <Spinner />;
    if (error) return <p>Error;</p>

    return (
        <>
            <Header />
            {!loading && !error && (
                <div className="container">
                    <Link to="/">Back to Homepage</Link>

                    <div className="product">
                        <div className="information">

                            <h1>{data.dish.name}</h1>
                            <span>{data.dish.price}</span>
                            <span>{data.dish.weight}</span>
                        </div>


                    </div>
                </div>
            )}
        </>
    )
}
