import React from 'react';
import { baseRequest } from '../../constants';

class ScotlandYard extends React.Component {
    state = {
        data: []
    }

    componentDidMount() {
        console.log("Fetching. . .");
        baseRequest.get("/scotlandyard/").then((res) => {
            this.setState({
                data: res.data.grid_colors, // Extract grid colors from response
            });
        }).catch((error) => {
            console.error('Error fetching data:', error);
        });
    }

    render() {
        return (
            <>
                <h1>ISTE ScotlandYard 24</h1>
                <div className="grid grid-cols-5 gap-4">
                    {this.state.data.map((row, rowIndex) => (
                        row.map((color, colIndex) => (
                            <div
                                key={`${rowIndex}-${colIndex}`}
                                className="h-16 w-16 border border-gray-300"
                                style={{ backgroundColor: color || '#ffffff' }} // Default to white if color is None
                            >
                                Cell {rowIndex},{colIndex}
                            </div>
                        ))
                    ))}
                </div>
            </>
        );
    }
}

export default ScotlandYard;
