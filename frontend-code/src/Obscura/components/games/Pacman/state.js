import { EAST, NORTH, WEST, SOUTH } from './constants';

function isBigFood([posX, posY]) {
    return (posX === 0 || posX === 50) && (posY === 4 || posY === 24);
}

function generateFood() {
    const genRow = (startX, posY, num) => new Array(num).fill(0)
        .map((item, index) => ([startX + index, posY]));

    const genDisparateRow = (xPoints, posY) => xPoints
        .map(posX => ([posX, posY]));

    const genContinuousRow = (ranges, posY) => ranges
        .reduce((items, [startX, num]) => ([
            ...items, ...genRow(startX, posY, num)
        ]), []);

    const genCol = (posX, startY, num) => new Array(num).fill(0)
        .map((item, index) => ([posX, startY + index]));

    return [
        // ...genRow(0, 0, 47),
        // ...genDisparateRow([0, 11, 14, 25], 1),
        // ...genDisparateRow([2, 11, 14, 25], 4),
        ...genContinuousRow([[0, 51]], 0),
        // ...genDisparateRow([0, 5, 8, 17, 20, 23], 4),
        ...genDisparateRow([0, 9, 19, 42,50], 1),
        ...genDisparateRow([0, 9, 19, 42,50], 2),
        ...genDisparateRow([0, 9, 19, 42,50], 3),
        ...genDisparateRow([0, 9, 19, 42,50], 4),
        ...genDisparateRow([0, 9, 19, 42,50], 5),
        ...genDisparateRow([0, 9, 19, 42,50], 6),
        ...genContinuousRow([[0, 1], [9, 42]], 7),
        // ...genDisparateRow([0, 5, 11, 14, 20, 25], 7),
        // ...genDisparateRow([0, 5, 11, 14, 20, 25], 8),
        // ...genContinuousRow([[0, 12], [14, 12]], 9),
        ...genCol(0, 8, 19),
        ...genCol(9, 8, 19),
        ...genCol(19, 8, 19),
        ...genCol(28, 8, 10),
        ...genCol(42, 8, 19),
        ...genCol(50, 8, 19),
        // ...genContinuousRow([0, 5, 8, 17, 20, 25], 21),
        ...genContinuousRow([[1, 8], [28, 22]], 18),
        
        ...genDisparateRow([10, 11, 12, 13, 14, 15, 16, 17, 18], 15),
        ...genRow(0, 27, 51),
        // ...genDisparateRow([0, 5, 11, 14, 20, 25], 25),
        // ...genDisparateRow([0, 5, 11, 14, 20, 25], 26),
        // ...genDisparateRow([0, 5, 11, 14, 20, 25], 27),
        // ...genContinuousRow([[0, 12], [14, 12]], 28)
    ]
        .map((position, index) => ({
            key: index,
            position,
            eaten: false,
            big: isBigFood(position)
        }));
}

export default function getInitialState() {
    return {
        stepTime: Date.now(),
        score: 0,
        player: {
            position: [0 ,0],
            // position: [4.5, 8],
            direction: EAST,
            nextDirection: EAST,
            lives: 3
        },
        lost: false,
        monsters: [
            {
                id: 'monster-red',
                direction: SOUTH,
                startingDirection: SOUTH,
                position: [45, 0],
                startingPosition: [45, 0],
                // [12.5, 15],
                deadTime: 0,
                eatingTime: 0,
                color: 'red'
            },
            {
                id: 'monster-cyan',
                direction: EAST,
                startingDirection: EAST,
                position: [45, 27],
                startingPosition: [45, 27],
                // position: [10.5, 15],
                // startingPosition: [10.5, 15],
                deadTime: 0,
                eatingTime: 0,
                color: 'cyan',
                directionBias: true
            },
            {
                id: 'monster-orange',
                direction: WEST,
                startingDirection: WEST,
                position: [45, 27],
                startingPosition: [45, 27],
                // position: [14.5, 15],
                // startingPosition: [14.5, 15],
                deadTime: 0,
                eatingTime: 0,
                color: 'darkorange'
            },
            {
                id: 'monster-pink',
                direction: NORTH,
                startingDirection: NORTH,
                position: [45, 0],
                startingPosition: [45, 0],
                // position: [12.5, 17],
                // startingPosition: [12.5, 17],
                deadTime: 0,
                eatingTime: 0,
                color: 'pink',
                directionBias: true
            }
        ],
        food: generateFood()
    };
}

