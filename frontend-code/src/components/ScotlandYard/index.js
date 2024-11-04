import React from 'react';
import { baseRequest } from '../../constants';

class ScotlandYard extends React.Component {
    state = {
        gridData: [], // To store grid colors
        colorCounts: [] // To store color counts for each cell
    }

    componentDidMount() {
        console.log("Fetching. . .");
        baseRequest.get("/scotlandyard/").then((res) => {
            this.setState({
                gridData: res.data.grid_colors, // Extract grid colors from response
                colorCounts: res.data.counts // Extract color counts from response
            });
        }).catch((error) => {
            console.error('Error fetching data:', error);
        });
    }

    renderGrid = (gridData, gridIndex) => {
        const counts = this.state.colorCounts[gridIndex] || [{ red: 0, green: 0, blue: 0 }, { red: 0, green: 0, blue: 0 }, { red: 0, green: 0, blue: 0 }, { red: 0, green: 0, blue: 0 }];

        return (
            <div key={gridIndex} className="flex h-64 w-full border border-gray-400 mb-4">
                {/* Left Cell (4th Cell) */}
                <div className="flex-1 border border-gray-300">
                    <div
                        className="h-full w-full"
                        style={{ backgroundColor: gridData[3] || '#ffffff' }} // Color for the 4th cell
                    >
                        Floor {gridIndex}, Room {gridIndex}.4
                        <div className="text-center text-sm">
                            Red: {counts[3]?.red || 0}, Green: {counts[3]?.green || 0}, Blue: {counts[3]?.blue || 0}
                        </div>
                    </div>
                </div>

                {/* Right Side Cells (1, 2, 3) */}
                <div className="flex flex-col flex-1">
                    {gridData.slice(0, 3).map((color, index) => (
                        <div
                            key={index}
                            className="flex-1 border border-gray-300"
                            style={index === 1 ? 
                                gridIndex === 0 ? { backgroundColor: "red" } : 
                                gridIndex === 1 ? { backgroundColor: "blue" } : 
                                { backgroundColor: "green" } : 
                                { backgroundColor: color || '#ffffff' }} // Color for cells 1, 2, 3
                        >
                            Floor {gridIndex}, Room {gridIndex}.{index + 1}
                            <div className="text-center text-sm">
                                Red: {counts[index]?.red || 0}, Green: {counts[index]?.green || 0}, Blue: {counts[index]?.blue || 0}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    render() {
        return (
            <div className='flex flex-col justify-center items-center'>
                <h1 className='flex text-center font-bold'>ISTE ScotlandYard 24</h1>
                <div className="flex flex-col w-full p-8">
                    {this.state.gridData.map((gridData, gridIndex) => (
                        this.renderGrid(gridData, gridIndex)
                    ))}
                </div>
            </div>
        );
    }
}

export default ScotlandYard;
