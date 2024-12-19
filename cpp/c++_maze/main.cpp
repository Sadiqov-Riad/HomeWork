#include <iostream>

const int WIDTH = 7;
const int HEIGHT = 6;

int main() {
    char maze[WIDTH * HEIGHT] = {
        '#','#','#','#','#','#','#',
        '#','S','#','E',' ',' ','#',
        '#',' ','#','#',' ',' ','#',
        '#',' ','#',' ',' ',' ','#',
        '#',' ',' ',' ','#','#','#',
        '#','#','#','#','#','#','#',
    };

    int x = 0, y = 0;

    for (int i = 0; i < HEIGHT; i++) {
        for (int j = 0; j < WIDTH; j++) {
            if (maze[i * WIDTH + j] == 'S') {
                x = j;
                y = i;
                break;
            }
        }
    }

    std::cout << "******** Find a way out! ********" << std::endl;

    while (true) {
        if (maze[y * WIDTH + x] == 'E') {
            std::cout << "Congratulations! You found the exit!" << std::endl;
            break;
        }

        maze[y * WIDTH + x] = 'S';

        for (int i = 0; i < HEIGHT; i++) {
            for (int j = 0; j < WIDTH; j++) {
                std::cout << maze[i * WIDTH + j];
            }
            std::cout << std::endl;
        }

        std::cout << std::endl;

        maze[y * WIDTH + x] = '*';

        if (x < WIDTH - 1 && maze[y * WIDTH + (x + 1)] == 'E') {
            x++;
        } else if (y < HEIGHT - 1 && maze[(y + 1) * WIDTH + x] == 'E') {
            y++;
        } else if (x > 0 && maze[y * WIDTH + (x - 1)] == 'E') {
            x--;
        } else if (y > 0 && maze[(y - 1) * WIDTH + x] == 'E') {
            y--;
        } else if (y > 0 && maze[(y - 1) * WIDTH + x] == ' ') {
            y--;
        } else if (x < WIDTH - 1 && maze[y * WIDTH + (x + 1)] == ' ') {
            x++;
        } else if (y < HEIGHT - 1 && maze[(y + 1) * WIDTH + x] == ' ') {
            y++;
        } else if (x > 0 && maze[y * WIDTH + (x - 1)] == ' ') {
            x--;
        } else {
            std::cout << "There is no way!" << std::endl;
            break;
        }
    }

    return 0;
}
