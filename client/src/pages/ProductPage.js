import React from 'react'
import { useParams } from 'react-router-dom'


import Header from './Header';


export default function ProductPage() {
    const { id } = useParams()
    return (
        <>
            <Header />
            <div>ProductPage  {id} </div>
        </>
    )
}
