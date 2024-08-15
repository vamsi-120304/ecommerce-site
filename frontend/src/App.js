import React, {useEffect, useState} from 'react'; // Import react and necessary hooks
import './App.css'; //Importing CSS file for styling

// The main functional component of the react application
function App() {
  // useState is a hook that allows us to add React state to function components
  // productList is the current state, setProductList is the function to update this state
  const [productList, setProductList] = useState([]); // initialize productList as an empty array

  // useEffect is a hook that runs side-effects in function components
  // in this case, it runs the fetch operation when the component first mounts
  useEffect(() => {
    // fetch is a function that makes HTTP requsts
    // Here, we are making a GET requst to our Flask API endpoint '/apt-i/products'
    fetch('http://localhost:5000/api/products')
      .then(responce => responce.json()) // Convert the responce to JSON format
      .then(data => setProductList(data)) // Update the productList state with the fetched data
      .catch(error => console.error('Error fetching products:', error)) //  Handling any errors that occur during fetch operation
  },
  []) // empty array means this efect runs only once, after the initial render


  return (
    // JSX (JavaScript XML) is the syntax extention that looks likes HTML
    // It is used to describe the UI in React

    <div className="App"> {/* The main container of the application */}
    <h1>
      Prioduct List
    </h1>

    <ul>
      {/* The map function is used to iterate over the productList array and render a list item for each product */}
      {productList.map(product => (
        <li key = {product.id}> {/* Each list item needs a unique 'key' prop */}
        {product.name}: ${product.price} {/* Display the product name and price */}
        </li>
      ))}
    </ul>
    </div>
  );
}

// This line exports the App component so it can be used in other parts of the application
export default App;