# Take in a list of names, spit out a string like what people write
# ie ['David'] = 'David'
# ['Bob', 'Fred'] = 'Bob & Fred'
# ['Ed', 'Edd', 'Eddie'] = 'Ed, Edd & Eddie'
# etc

def yomi(arr):
    nagasa = len(arr)
    if nagasa == 1:
        return str(a1[0])
    elif nagasa == 2:
        kotoba = f'{arr[0]} & {arr[1]}'
        return kotoba
    else:
        ichi = arr.pop()
        ni = arr.pop()
        atsumaru = ichi + ' & ' + ni
        nokori = ', '.join(arr)
        kaesu = nokori + ', ' + atsumaru
        return kaesu

array = []
running = True
while running:
    add = input('Please enter a name: ')
    array.append(add)
    question = input('Continue (y/_): ')
    if question != 'y':
        running = False

print(yomi(array))
