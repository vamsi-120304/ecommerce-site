# Import the Flask class from the flask module
from flask import Flask

# Create an instance of the Flask class. This is your WSGI application.
app = Flask(__name__)

# Define a route for the root URL ('/'). When someone visits this URL,
# the function 'home' will be executed and its return value will be displayed in the browser.
@app.route('/')
def home():
    # Return a simple message as the response
    return "Hello, Flask!"

# Check if the script is being run directly (as opposed to being imported as a module).
# If it is, run the Flask web server with debugging enabled.
if __name__ == '__main__':
    app.run(debug=True)
