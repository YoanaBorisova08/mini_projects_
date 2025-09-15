import random

def printRed(skk): print("\033[91m {}\033[00m" .format(skk))
def printGreen(skk): print("\033[92m {}\033[00m" .format(skk))
def printYellow(skk): print("\033[93m {}\033[00m" .format(skk))
def printBlue(skk): print("\033[94m {}\033[00m" .format(skk))

computer_number = random.randint(1, 100)
range_number = 100
round_number = 1
tries = 10

printBlue(f"Round {round_number}! You have {tries} tries!")

while True:
    player_input = input(f"Guess the number (1-{range_number}): ")
    if not player_input.isdigit():
        printRed("Invalid input. Try again...")
        continue

    player_number = int(player_input)

    if player_number == computer_number:
        printGreen("You guessed right!")
        play_again = input("Type [yes] if you want to go to the NEXT ROUND. Else type [no].")
        if play_again == "yes":
            round_number+=1
            tries = 10
            range_number+=100
            computer_number = random.randint(1, range_number)
            printBlue(f"Round {round_number}! You have {tries} tries!")
            continue
        break
    elif player_number < computer_number:
        printYellow("Too Low!")
        tries-=1
    else:
        printYellow("Too High!")
        tries-=1

    if tries==1:
        printRed("One last try. Be careful!")
    elif tries==0:
        play_again = input("You lost! Type [yes] if you want to PLAY AGAIN. Else type [no].")
        if play_again == "yes":
            round_number = 1
            tries = 10
            range_number = 100
            computer_number = random.randint(1, range_number)
            printBlue(f"Round {round_number}! You have {tries} tries!")
        else:
            break