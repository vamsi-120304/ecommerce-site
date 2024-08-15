# Import the Flask class from the flask module
from flask import Flask, jsonify
from flask_cors import CORS

# Create an instance of the Flask class. This is your WSGI application.
app = Flask(__name__)

# Enable Cross-Origin Resource Sharing (CORS) for all routes
CORS(app)

# Define a route for the root URL ('/'). When someone visits this URL,
# the function 'home' will be executed and its return value will be displayed in the browser.
@app.route('/')
def home():
    # Return a simple message as the response
    return "Hello, Flask!"

# New endpoint that returns a list of products in JSON formated data
@app.route('/api/products', methods=['GET'])
def getProducts():
    products = [
        {"id": 1, "name": "Product 1", "price": 29.99},
        {"id": 2, "name": "Product 2", "price": 89.99},
        {"id": 3, "name": "Product 3", "price": 69.99}
    ]
    # Convert the list of products to JSON and return it as the responce
    return jsonify(products) 

# Check if the script is being run directly (as opposed to being imported as a module).
# If it is, run the Flask web server with debugging enabled.
if __name__ == '__main__':
    app.run(debug=True)
