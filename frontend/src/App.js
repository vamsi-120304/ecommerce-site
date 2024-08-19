import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router components
import './App.css'; //Importing CSS file for styling
import ProductDetails from './ProductDetails';
import ProductList from './ProductList';

// The main functional component of the react application
function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          {/* Route for the Product List */}
          <Route exact path="/" Component={ProductList} />
          {/* Route for Product Details */}
          <Route path="/products/:id" Component={ProductDetails} />
        </Routes>
      </div>
    </Router>
  );
}

// Export the App component for use in other parts of the application
export default App;