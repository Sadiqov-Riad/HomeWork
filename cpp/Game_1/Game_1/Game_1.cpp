#include <iostream>
#include <conio.h>

const short ROWS = 6;
const short COLS = 6;

template<typename T>
void generate_item(T matrix, int row, int col, char symbol) {
    int x = rand() % row;
    int y = rand() % col;
    while (matrix[x][y] != '.') {
        x = rand() % row;
        y = rand() % col;
    }
    matrix[x][y] = symbol;
}

template<typename T>
void generate_matrix(T matrix[ROWS][COLS], T initial_value) {
    for (unsigned short i = 0; i < ROWS; i++) {
        for (unsigned short j = 0; j < COLS; j++) {
            matrix[i][j] = initial_value;
        }
    }
}

template<typename T>
void display_matrix(const T matrix[ROWS][COLS], int p_row, int p_col) {
    system("cls");
    for (unsigned short i = 0; i < ROWS; i++) {
        for (unsigned short j = 0; j < COLS; j++) {
            if (i == p_row && j == p_col) {
                std::cout << 'P' << ' ';
            }
            else {
                std::cout << matrix[i][j] << ' ';
            }
        }
        std::cout << std::endl;
    }
}

template<int row, int col>
void move_player(char direction, int& p_row, int& p_col, char matrix[ROWS][COLS]) {
    int new_row = p_row;
    int new_col = p_col;

    switch (direction) {
    case 'w':
        if (p_row > 0 && matrix[p_row - 1][p_col] != '#') new_row--;
        break;
    case 's':
        if (p_row < row - 1 && matrix[p_row + 1][p_col] != '#') new_row++;
        break;
    case 'a':
        if (p_col > 0 && matrix[p_row][p_col - 1] != '#') new_col--;
        break;
    case 'd':
        if (p_col < col - 1 && matrix[p_row][p_col + 1] != '#') new_col++;
        break;
    default:
        std::cout << "Invalid move!" << std::endl;
        return;
    }

    matrix[p_row][p_col] = '.';
    p_row = new_row;
    p_col = new_col;
}

template<typename T>
void generate_walls(T matrix, int row, int col, int wall_count) {
    int count = 0;
    while (count < wall_count) {
        int x = rand() % row;
        int y = rand() % col;
        if (matrix[x][y] == '.') {
            matrix[x][y] = '#';
            count++;
        }
    }
}

template<typename T>
void generate_mines(T matrix, int row, int col, int mine_count) {
    int count = 0;
    while (count < mine_count) {
        int x = rand() % row;
        int y = rand() % col;
        if (matrix[x][y] == '.') {
            matrix[x][y] = '*';
            count++;
        }
    }
}

void serdescki(int lives) {
    for (int i = 0; i < lives; ++i) {
        std::cout << "* ";
    }
}

int main() {
    srand(time(NULL));

    char symbol_1, symbol_2;
    int score_1, score_2;
    int score_count = 0;
    int wall_count;
    int mine_count;
    int lives_count;

    std::cout << "First symbol: ";
    std::cin >> symbol_1;
    std::cout << "Second symbol: ";
    std::cin >> symbol_2;

    std::cout << "Score for first item: ";
    std::cin >> score_1;
    std::cout << "Score for second item: ";
    std::cin >> score_2;

    std::cout << "Enter number of walls: ";
    std::cin >> wall_count;
    std::cout << "Enter number of mines: ";
    std::cin >> mine_count;
    std::cout << "Enter number of lives:";
    std::cin >> lives_count;

    char matrix[ROWS][COLS];
    generate_matrix(matrix, '.');

    generate_walls(matrix, ROWS, COLS, wall_count);
    generate_mines(matrix, ROWS, COLS, mine_count);
    generate_item(matrix, ROWS, COLS, symbol_1);
    generate_item(matrix, ROWS, COLS, symbol_2);

    int player_row = 0, player_col = 0;
    display_matrix(matrix, player_row, player_col);

    while (true) {
        char move = _getch();

        if (move == 'q') break;

        move_player<ROWS, COLS>(move, player_row, player_col, matrix);

        if (matrix[player_row][player_col] == symbol_1) {
            score_count += score_1;
            generate_item(matrix, ROWS, COLS, symbol_1);
        }

        if (matrix[player_row][player_col] == symbol_2) {
            score_count += score_2;
            generate_item(matrix, ROWS, COLS, symbol_2);
        }

        if (matrix[player_row][player_col] == '*') {
            lives_count--;
            score_count = 0;

            if (lives_count <= 0) {
                std::cout << "Game over!" << std::endl;
                break;
            }
        }

        matrix[player_row][player_col] = 'P';
        display_matrix(matrix, player_row, player_col);
        std::cout << "Score: " << score_count << std::endl;
        std::cout << "Lives: ";
        serdescki(lives_count);
    }

    return 0;
}
