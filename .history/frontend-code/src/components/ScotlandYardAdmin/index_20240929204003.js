import React from 'react';
import { baseRequest } from '../../constants';

class ScotlandYardAdmin extends React.Component {
  state = {
    username: '',
    password: '',
    authenticated: false,
    errorMessage: '',
    colors: Array(3).fill(null).map(() => Array(4).fill('#ffffff')), // Initialize colors for each cell
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;

    // Send POST request to the backend
    baseRequest.post('/scotlandyard/admin/', { username, password })
      .then((res) => {
        if (res.data.status === 'success') {
          this.setState({ authenticated: true, errorMessage: '' });
        }
      })
      .catch((error) => {
        this.setState({ errorMessage: 'Invalid credentials. Please try again.' });
      });
  };

  handleCellClick = (i, j) => {
    // Create a select dropdown for the user to choose a color
    const colorOptions = ['red', 'green', 'blue'];
  
    const selectedColor = window.prompt("Enter 0 for red, 1 for green, 2 for blue:");
    
    // Validate the user's choice
    if (selectedColor !== null && colorOptions[selectedColor]) {
      const finalColor = colorOptions[selectedColor];
  
      const newColors = this.state.colors.slice();
      newColors[i][j] = finalColor; // Update the color of the clicked cell
      this.setState({ colors: newColors });
  
      // Send the new color to the backend
      baseRequest.post('/scotlandyard/update_color/', { row: i, col: j, color: finalColor })
        .then((res) => {
          console.log(res.data.message);
        })
        .catch((error) => {
          console.error('Error updating color:', error);
        });
    } else {
      alert("Invalid selection. Please choose 0, 1, or 2.");
    }
  };
  
  

  componentDidMount() {
    console.log("Fetching. . .");
    baseRequest.get("/scotlandyard/").then((res) => {
        this.setState({
            colors: res.data.grid_colors, // Extract grid colors from response
        });
    }).catch((error) => {
        console.error('Error fetching data:', error);
    });
  }

  renderGrid = (gridData, gridIndex) => {
    return (
      <div key={gridIndex} className="flex h-64 border border-gray-400 mb-4">
        {/* Left Cell (4th Cell) */}
        <div className="flex-1 border border-gray-300">
          <div
            className="h-full w-full"
            style={{ backgroundColor: gridData[3] || '#ffffff' }} // Color for the 4th cell
            onClick={() => this.handleCellClick(gridIndex, 3)} // Handle cell click
          >
            Floor {gridIndex} Room {gridIndex}.4
          </div>
        </div>

        {/* Right Side Cells (1, 2, 3) */}
        <div className="flex flex-col flex-1">
          {gridData.slice(0, 3).map((color, index) => (
            <div
              key={index}
              className="flex-1 border border-gray-300"
              style={ index == 1 ? gridIndex == 0 ? {backgroundColor : "red"} : gridIndex == 1 ? {backgroundColor: "blue"} : {backgroundColor: "green"} : { backgroundColor: color || '#ffffff' }} // Color for cells 1, 2, 3
              onClick={() => index == 1 ? {}: this.handleCellClick(gridIndex, index)} // Handle cell click
            >
              Floor {gridIndex}, Room {gridIndex}.{index + 1}
            </div>
          ))}
        </div>
      </div>
    );
  };

  render() {
    const { authenticated, errorMessage } = this.state;

    if (authenticated) {
      return (
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-8 text-center">Welcome, Admin!</h1>
          <div className="flex flex-col">
            {this.state.colors.map((gridData, gridIndex) => (
              this.renderGrid(gridData, gridIndex)
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
          <form onSubmit={this.handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Username:</label>
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChange}
                required
                className="mt-1 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password:</label>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
                required
                className="mt-1 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
              />
            </div>
            <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Login
            </button>
          </form>
          {errorMessage && (
            <p className="mt-4 text-center text-red-500 text-sm">{errorMessage}</p>
          )}
        </div>
      </div>
    );
  }
}

export default ScotlandYardAdmin;
