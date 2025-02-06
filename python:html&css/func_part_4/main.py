maze = ("######"
        "#S##E#"
        "# ## #"
        "# #  #"
        "#   ##"
        "######")


def navigate_maze(index):
    if maze[index - 6] == 'E':
        print("Go back")
        print("The End")
        return
    else:
        if maze[index] == 'S':
            print("Start")
            print("Go ahead")
            navigate_maze(index + 6)

        elif maze[index] == ' ':
            if maze[index - 1] == '#' and maze[index + 1] == '#':
                print("Go ahead")
                navigate_maze(index + 6)
                navigate_maze(index + 1)
            elif maze[index - 1] == ' ' and maze[index + 1] == ' ':
                print("Go right")
                navigate_maze(index + 1)
            elif maze[index - 1] == '#' and maze[index + 1] == ' ':
                print("Go right")
                navigate_maze(index + 1)
            elif maze[index - 1] == ' ' and maze[index + 1] == '#':
                print("Go back")
                navigate_maze(index - 6)

navigate_maze(7)