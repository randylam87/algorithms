def make_array(n,m):
    array = []
    for i in range(0,n):
        innerarray = []
        for j in range(0,m):
            innerarray.append(0)
        array.append(innerarray)
    return array

def move(row, col, car):
    if car == 'e':
        col += 1
    elif car == 's':
        row += 1
    elif car == 'w':
        col -= 1
    elif car == 'n':
        row -= 1
    return row, col, car

def uzumaku(n,m):
    mono = make_array(n,m)
    square = n * m
    forma = int(len(str(square)))
    row = 0
    col = 0
    car = 'e'
    for i in range(0, square):
        if mono[row][col] == 0:
            mono[row][col] = i+1
        if car == 'e':
            try: 
                if mono[row][col + 1] == 0:
                    col += 1
                else:
                    car = 's'
            except IndexError:
                car = 's'
        if car == 's':
            try:
                if mono[row + 1][col] == 0:
                    row += 1
                else:
                    car = 'w'
            except IndexError:
                car = 'w'
        if car == 'w':
            try:
                if mono[row][col - 1] == 0:
                    col -= 1
                else:
                    car = 'n'
            except IndexError:
                car = 'n'
        if car == 'n':
            try:
                if mono[row - 1][col] == 0:
                    row -= 1
                else:
                    car = 'e'
                    col += 1
            except IndexError:
                car = 'e'
                col += 1
    for row in mono:
        print(''.join('{a:>{b}}'.format(a=r, b=forma) for r in row))

while True:
    try:
        wide = int(input('How wide would you like your spiral? '))
        break
    except ValueError:
        print('Try a number.')
while True:
    try:
        tall = int(input('How tall would you like your spiral? '))
        break
    except ValueError:
        print('Try a number.')

uzumaku(tall, wide)
