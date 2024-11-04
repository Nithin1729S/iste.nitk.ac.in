import React from 'react';
import { baseRequest } from '../../constants';

class ScotlandYardAdmin extends React.Component {
  state = {
    username: '',
    password: '',
    authenticated: false,
    errorMessage: ''
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

  renderGrid = () => {
    const grid = [];
    for (let i = 0; i < 5; i++) {
      const row = [];
      for (let j = 0; j < 5; j++) {
        row.push(<div key={`${i}-${j}`} className="grid-cell">Cell {i},{j}</div>);
      }
      grid.push(<div key={i} className="grid-row">{row}</div>);
    }
    return grid;
  };

  render() {
    const { authenticated, errorMessage } = this.state;

    if (authenticated) {
      return (
        <div>
          <h1>Welcome, Admin!</h1>
          <div className="grid-container">{this.renderGrid()}</div>
        </div>
      );
    }

    return (
      <>
        <h1>Admin Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        {errorMessage && <p>{errorMessage}</p>}
      </>
    );
  }
}

export default ScotlandYardAdmin;
