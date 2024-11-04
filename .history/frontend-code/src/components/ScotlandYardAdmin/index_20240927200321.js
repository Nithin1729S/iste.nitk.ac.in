import React from 'react';
import { baseRequest } from '../../constants';

class ScotlandYardAdmin extends React.Component {
  state = {
    username: '',
    password: '',
    authenticated: false,
    errorMessage: '',
    colors: Array(5).fill(null).map(() => Array(5).fill('#ffffff')), // Initialize colors for each cell
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
    const newColor = prompt("Enter a color (e.g., 'red', '#ff0000'):", '#ff0000');
    if (newColor) {
      const newColors = this.state.colors.slice();
      newColors[i][j] = newColor; // Update the color of the clicked cell
      this.setState({ colors: newColors });

      // Send the new color to the backend
      baseRequest.post('/scotlandyard/update_color/', { row: i, col: j, color: newColor })
      .then((res) => {
         console.log(res.data.message);
      })
      .catch((error) => {
         console.error('Error updating color:', error);
      });
    }
  };

  renderGrid = () => {
    const grid = [];
    for (let i = 0; i < 5; i++) {
      const row = [];
      for (let j = 0; j < 5; j++) {
        row.push(
          <div
            key={`${i}-${j}`}
            className="flex items-center justify-center border border-gray-300 h-16 w-16 cursor-pointer"
            style={{ backgroundColor: this.state.colors[i][j] }} // Set background color
            onClick={() => this.handleCellClick(i, j)} // Handle cell click
          >
            Cell {i},{j}
          </div>
        );
      }
      grid.push(<div key={i} className="flex">{row}</div>);
    }
    return grid;
  };

  render() {
    const { authenticated, errorMessage } = this.state;

    if (authenticated) {
      return (
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-8 text-center">Welcome, Admin!</h1>
          <div className="grid-container space-y-2">{this.renderGrid()}</div>
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
