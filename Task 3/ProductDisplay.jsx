import React from 'react'

export default function ProductDisplay() {
    const products = [
        {
            id: '1',
            image: 'https://images.unsplash.com/photo-1484788984921-03950022c9ef?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww',
            name: 'Lenovo Laptop',
            price: '$900',
            description: 'A sleek, powerful laptop perfect for coding and multitasking.'
        },
        {
            id: '2',
            image: 'https://img.freepik.com/free-photo/person-working-laptop-desk_9975-24478.jpg',
            name: 'HP Laptop',
            price: '$900',
            description: 'High-performance laptop designed for developers and professionals.'
        },

    ]

    return (
        <div>
            <h1>Product-List</h1><br /><br />
            {
                products.map((product) => {
                    return <>
                        <div key={product.id}>
                            <img src={product.image} alt="" style={{ width: '400px', height: '200px' }} />
                            <h2>Product : {product.name}</h2>
                            <h3>Price : {product.price}</h3>
                            <h4>Description : {product.description}</h4> <br /><br />
                        </div>
                    </>
                })
            }
        </div>
    )
}
