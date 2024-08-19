import React, {useEffect, useState} from 'react'; // Import react and necessary hooks
import {Link} from 'react-router-dom'; //Import Link for navigation

function ProductList() {
    // useState is a hook that allows us to add React state to function components
    // productList is the current state, setProductList is the function to update this state
    const [productList, setProductList] = useState([]); // initialize productList as an empty array

    // useEffect is a hook that runs side-effects in function components
    // in this case, it runs the fetch operation when the component first mounts
    useEffect(() => {
        // fetch is a function that makes HTTP requsts
        // Here, we are making a GET requst to our Flask API endpoint '/api/products'
        fetch('http://localhost:5000/api/products')
            .then(response => response.json()) // Convert the responce to JSON format
            .then(data => setProductList(data)) // Update the productList state with the fetched data
            .catch(error => console.error('Error fetching products: ', error)) //  Handling any errors that occur during fetch operation

    }, []) // empty array means this efect runs only once, after the initial render

    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {/* Map through product list and create a link for each product */}
                {productList.map(product => (
                    <li key={product.id}>
                        <Link to={`/products/${product.id}`}>
                            {product.name}
                        </Link>
                        : ${product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}

// Export ProductList component for use in App.js
export default ProductList;