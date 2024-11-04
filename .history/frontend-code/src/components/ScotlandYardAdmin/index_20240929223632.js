// ScotlandYardAdmin/index.js
import React from 'react';
import { baseRequest } from '../../constants';

class ScotlandYardAdmin extends React.Component {
    state = {
        gridData: [], // Array to store the current color of each grid cell
        colorCounts: [] // Array to store the count of each color per cell
    }

    componentDidMount() {
        console.log("Fetching. . .");
        baseRequest.get("/scotlandyard/").then((res) => {
            this.setState({
                gridData: res.data.grid_colors,
                colorCounts: res.data.counts // Each cell's color counts fetched from the backend
            });
        }).catch((error) => {
            console.error('Error fetching data:', error);
        });
    }

    handleColorChange = (gridIndex, cellIndex) => {
        const newColor = prompt("Enter the color for the cell (red, green, blue):");

        if (["red", "green", "blue"].includes(newColor)) {
            const updatedGridData = [...this.state.gridData];
            const updatedColorCounts = [...this.state.colorCounts];

            // Get the current color of the selected cell
            const currentColor = updatedGridData[gridIndex][cellIndex];

            // Update the grid color with the new selection
            updatedGridData[gridIndex][cellIndex] = newColor;

            // Update the color counts
            updatedColorCounts[gridIndex][cellIndex][newColor] += 1;

            // Persist changes to the backend
            baseRequest.put("/scotlandyard/update", {
                gridIndex,
                cellIndex,
                color: newColor
            }).then(() => {
                // Update the state after successful backend update
                this.setState({
                    gridData: updatedGridData,
                    colorCounts: updatedColorCounts
                });
            }).catch((error) => {
                console.error('Error updating color:', error);
            });
        } else {
            alert("Invalid color. Please enter 'red', 'green', or 'blue'.");
        }
    }

    renderGrid = (gridData, gridIndex) => {
        const counts = this.state.colorCounts[gridIndex] || [{ red: 0, green: 0, blue: 0 }, { red: 0, green: 0, blue: 0 }, { red: 0, green: 0, blue: 0 }, { red: 0, green: 0, blue: 0 }];

        return (
            <div key={gridIndex} className="flex h-64 w-full border border-gray-400 mb-4">
                {/* Left Cell (4th Cell) */}
                <div className="flex-1 border border-gray-300" onClick={() => this.handleColorChange(gridIndex, 3)}>
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
                            style={{ backgroundColor: color || '#ffffff' }} // Color for cells 1, 2, 3
                            onClick={() => this.handleColorChange(gridIndex, index)}
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
                <h1 className='flex text-center font-bold'>ISTE ScotlandYard 24 - Admin Panel</h1>
                <div className="flex flex-col w-full p-8">
                    {this.state.gridData.map((gridData, gridIndex) => (
                        this.renderGrid(gridData, gridIndex)
                    ))}
                </div>
            </div>
        );
    }
}

export default ScotlandYardAdmin;
