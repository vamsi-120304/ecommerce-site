// Import react and necessory hooks
import React, {useEffect, useState} from 'react';
// Import useParams to access route parameters
import {useParams} from 'react-router-dom';

// Functional Component for Displaying Product Details
function ProductDetails() {
    const { id } = useParams(); // grt product id from url parameters
    const [product, setProduct] = useState(null); //initialize product state as null

    // useEffect to run when the component mounts and whenever the 'id' changes
    useEffect(() => {
        // Fetch product details from API
        fetch(`http://localhost:5000/api/products/${id}`)
            .then(response => response.json()) //Convert the responce to JSON format
            .then(data => setProduct(data)) //Update the product state with the fetched data
            .catch(error => console.error('Error fetching the product details: ', error)); 
    }, [id]); // Run the effect whenever the `id` parameter changes

    // Render the product details if available
    return (
        <div className="productDetails">
            {product ? (
                <div>
                    <h2> {product.name} </h2> {/* Display the product name */}
                    <p>Price: ${product.price} </p> {/* Display the product price */}
                </div>
            ) : (
                <p>Loading...</p> //Show a loading message when the data is being fetched
            )}
        </div>
    );

}

// Export the component for use in other parts of the application
export default ProductDetails;