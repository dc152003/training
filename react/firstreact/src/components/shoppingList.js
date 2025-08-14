function Shop() {
    
    const products = [{pId: 1, pName: 'Apple', pPrice: 100, pIsInStock: true},
                        {pId: 2, pName: 'Banana', pPrice: 50, pIsInStock: true},    
                        {pId: 3, pName: 'Cherry', pPrice: 150, pIsInStock: false},
                        {pId: 4, pName: 'Date', pPrice: 200, pIsInStock: true},
                        {pId: 5, pName: 'Elderberry', pPrice: 300, pIsInStock: false},
                        {pId: 6, pName: 'Fig', pPrice: 120, pIsInStock: true}
    ]

   
    return (
        <div>
            table
            <h1>Welcome to the Shopping Page</h1>   
            <p>This is the main page of our React application</p>
            <h2>Product List</h2>
            <table style ={{ border: '1px solid black', width: '100%', textAlign: 'center'}}>
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>In Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.pId}>
                            <td>{product.pId}</td>
                            <td>{product.pName}</td>
                            <td>Rupees {product.pPrice}</td>
                            <td>{product.pIsInStock ? 'Yes' : 'No'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Shop;