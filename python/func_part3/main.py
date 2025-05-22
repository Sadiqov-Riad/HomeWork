game_list = [" ", " ", " ", " ", " ", " ", " ", " ", " "]

def display_board(board):
    print("-" * 13)
    for i in range(3):
        print("|", board[i * 3], "|", board[1 + i * 3], "|", board[2 + i * 3], "|")
        print("-" * 13)


def replace_item(item):
    valid = True
    while valid:
        player_name = print(f"Игрок {item}")
        try:
            line = int(input("Введите строку (1-3): "))

            if line not in range(1,4):
                print("Некорректный ввод. Введите число от 1 до 3.")
                continue

            col = int(input("Введите столбец (1-3): "))

            if line not in range(1,4):
                print("Некорректный ввод. Введите число от 1 до 3.")
                continue

            index = ((line - 1) * 3) + (col - 1)

            if index in range(0, 9):
                if game_list[index] in "XO":
                    print("Эта клетка уже занята!")
                else:
                    game_list[index] = item
                    display_board(game_list)
                    valid = False
            else:
                print("Некорректный ввод. Введите число от 1 до 3.")

        except (ValueError, IndexError):
            print("Некорректный ввод. Введите число от 1 до 3.")


def check_win(board):
    win_combs = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
    for comb in win_combs:
        if board[comb[0]] == board[comb[1]] == board[comb[2]] and board[comb[0]] != " ":
            print(f"Игрок {board[comb[0]]} выиграл!")
            return True
    return False

def check_draw(board):
    if " " not in board:
        print("Ничья!")
        return True
    return False

def run_game():
        end = False
        print("-" * 5, " Игра начинается ", "-" * 5)
        display_board(game_list)

        while not end:
            replace_item("X")
            if check_win(game_list):
                end = True
                break
            if check_draw(game_list):
                end = True
                break
            replace_item("O")
            if check_win(game_list):
                end = True
                break
            if check_draw(game_list):
                end = True
                break


run_game()

while True:
    player_answer = input("Хотите сыграть еще раз? (да/нет): ").lower()
    if player_answer == "да":
        game_list = [" ", " ", " ", " ", " ", " ", " ", " ", " "]
        run_game()
        continue
    elif player_answer == "нет":
        break
    else:
        print("Некорректный ввод. Введите число от 1 до 3.")
        continue

print("Спасибо за игру!")
