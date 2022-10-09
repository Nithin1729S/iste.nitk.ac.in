import { BOARD_HEIGHT } from './constants';

export function cssPosition(position, gridSize) {
    return {
        left: (position[0] + 2.5) * gridSize,
        top: (BOARD_HEIGHT - position[1] - 3) * gridSize
    };
}

