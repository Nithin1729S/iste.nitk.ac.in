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

    renderGrid = (gridData, gridIndex) => {
        return (
            <div key={gridIndex} className="flex h-64 border border-gray-400 mb-4">
                {/* Left Cell (4th Cell) */}
                <div className="flex-1 border border-gray-300">
                    <div
                        className="h-full w-full"
                        style={{ backgroundColor: gridData[3] || '#ffffff' }} // Color for the 4th cell
                    >
                        Cell 4
                    </div>
                </div>

                {/* Right Side Cells (1, 2, 3) */}
                <div className="flex flex-col flex-1">
                    {gridData.slice(0, 3).map((color, index) => (
                        <div
                            key={index}
                            className="flex-1 border border-gray-300"
                            style={{ backgroundColor: color || '#ffffff' }} // Color for cells 1, 2, 3
                        >
                            Cell {index + 1}
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    render() {
        return (
            <>
                <h1>ISTE ScotlandYard 24</h1>
                <div className="flex flex-col">
                    {this.state.data.map((gridData, gridIndex) => (
                        this.renderGrid(gridData, gridIndex)
                    ))}
                </div>
            </>
        );
    }
}

export default ScotlandYard;
