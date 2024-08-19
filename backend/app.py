# Import the Flask class from the flask module
from flask import Flask, jsonify
from flask_cors import CORS

# Create an instance of the Flask class.
app = Flask(__name__)

# Enable Cross-Origin Resource Sharing (CORS) for all routes
CORS(app)

#Sample list of products
products = [
    {"id": 1, "name": "Product 1", "price": 29.99},
    {"id": 2, "name": "Product 2", "price": 89.99},
    {"id": 3, "name": "Product 3", "price": 69.99}
]

# Define a route for the root URL ('/'). When someone visits this URL,
# the function 'home' will be executed and its return value will be displayed in the browser.
@app.route('/')
def home():
    """
    Return a simple message as the response
    """
    
    return "Hello, Flask!"

@app.route('/api/products', methods=['GET'])
def getProducts():
    """
    Endpoint to return a list of products.
    
    Returns:
    - A JSON list of products.
    """
    
    return jsonify(products) 

# Route that accepts a product ID as a parameter and returns the details of that product
@app.route('/api/products/<int:id>', methods=['GET']) # <int:id> is a placeholder for an integer product ID
def getProduct(id):
    """
    This function handles the GET request to fetch details of a specific product by its ID.
    
    Parameters:
    - id: The ID of the product to be retrieved, passed as a URL parameter.
    
    Returns:
    - JSON object of the product details if found.
    - 404 error with a message if the product is not found.
    """
    
    # Use a generator expression to find the product with the matching ID in the products list
    # If the product is found, it's stored in the variable `product`; otherwise, `product` is set to `None`.
    product = next((product for product in products if product['id'] == id), None)
    
    # Chec if the product was found
    if product:
        # Return product details as a JSON responce
        return jsonify(product)
    else:
        # If no product was found, return an error message with a 404 status code
        return jsonify({"error": "Product not found"}), 404
    
    

# Check if the script is being run directly (as opposed to being imported as a module).
# If it is, run the Flask web server with debugging enabled.
if __name__ == '__main__':
    app.run(debug=True)
