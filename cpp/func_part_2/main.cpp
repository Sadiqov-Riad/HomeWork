#include <iostream>

const int SIZE = 10;

int create_field(char open_field[SIZE][SIZE], char player_field[SIZE][SIZE], int mines) {
    for (int i = 0; i < SIZE; i++) {
        for (int j = 0; j < SIZE; j++) {
            player_field[i][j] = '#';
        }
    }

    for (int i = 0; i < SIZE; i++) {
        for (int j = 0; j < SIZE; j++) {
            open_field[i][j] = '.';
        }
    }

    int placed_mines = 0;
    srand(time(NULL));

    while (placed_mines < mines) {
        int x = rand() % SIZE;
        int y = rand() % SIZE;

        if (open_field[x][y] == '.') {
            open_field[x][y] = '*';
            placed_mines++;
        }
    }
    return 0;
}

void print_field(const char field[SIZE][SIZE]) {
    for (int i = 0; i < SIZE; i++) {
        for (int j = 0; j < SIZE; j++) {
            std::cout << field[i][j] << ' ';
        }
        std::cout << std::endl;
    }
}

bool check_victory(char player_field[SIZE][SIZE], int mines) {
    int opened_cells = 0;
    for (int i = 0; i < SIZE; i++) {
        for (int j = 0; j < SIZE; j++) {
            if (player_field[i][j] == '.') {
                opened_cells++;
            }
        }
    }
    return (SIZE * SIZE - opened_cells == mines);
}

void run_game() {
    char PlayersField[SIZE][SIZE];
    char OpenField[SIZE][SIZE];
    int MineCount;
    int row, col;
    int opened_cells = 0;

    while (true) {
        std::cout << "Enter mines count:";
        std::cin >> MineCount;
        std::cout << std::endl;

        if (MineCount < 1 || MineCount > 99) {
            std::cout << "Invalid input!" << std::endl;
        } else {
            create_field(OpenField, PlayersField, MineCount);

            while (true) {
                print_field(PlayersField);
                std::cout << std::endl;

                while (true) {
                    std::cout << "Enter row and col:";
                    std::cin >> row >> col;

                    if (row < 1 || row > SIZE || col < 1 || col > SIZE) {
                        std::cout << "Invalid input!" << std::endl;
                    } else {
                        if (OpenField[row - 1][col - 1] == '*') {
                            std::cout << "Game Over!" << std::endl;
                            print_field(OpenField);
                            return;
                        } else {
                            if (PlayersField[row - 1][col - 1] == '#') {
                                PlayersField[row - 1][col - 1] = '.';
                                opened_cells++;
                            }
                        }
                        break;
                    }
                }

                if (check_victory(PlayersField, MineCount)) {
                    std::cout << "You Win!" << std::endl;
                    return;
                }
            }
        }
    }
}

int main() {

    run_game();

    return 0;
}
