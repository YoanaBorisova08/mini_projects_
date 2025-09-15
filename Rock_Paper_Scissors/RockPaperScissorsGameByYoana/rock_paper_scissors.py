import random

def printRed(skk): print("\033[91m {}\033[00m" .format(skk))
def printGreen(skk): print("\033[92m {}\033[00m" .format(skk))
def printYellow(skk): print("\033[93m {}\033[00m" .format(skk))
def printBlue(skk): print("\033[94m {}\033[00m" .format(skk))


rock = "Rock"
paper = "Paper"
scissors = "Scissors"

player_score = 0
computer_score = 0

while True:

    player_move = input("Choose [r]ock, [p]aper or [s]cissors: ")
    player_emoji = ''
    if player_move == "r":
        player_move = rock
        player_emoji = '✊'
    elif player_move == "p":
        player_move = paper
        player_emoji = '✋'
    elif player_move == "s":
        player_move = scissors
        player_emoji = '✌️ '
    else:
        raise SystemExit("Invalid Input. Try again...")

    computer_random_number = random.randint(1,3)
    computer_move = ""
    computer_emoji = ''
    if computer_random_number==1:
        computer_move = rock
        computer_emoji = '✊'
    elif computer_random_number==2:
        computer_move = paper
        computer_emoji = '✋'
    elif computer_random_number==3:
        computer_emoji = '✌️'
        computer_move = scissors

    printBlue(f"The computer chose {computer_move}.")

    print(f"{player_emoji} {player_move} vs {computer_emoji} {computer_move}")

    if (player_move == rock and computer_move == scissors) or \
            (player_move == paper and computer_move == rock) or \
            (player_move == scissors and computer_move == paper):
        printGreen("You win!")
        player_score += 1
    elif player_move == computer_move:
        printYellow("Draw!")
        player_score += 1
        computer_score += 1
    else:
        printRed("You lose!")
        computer_score += 1
    scissors

    printBlue(f"Player score: {player_score}")
    printBlue(f"Computer score: {computer_score}")

    response = input("Type [yes] to play again and [no] to quit: ")
    if response =="yes":
        continue
    else:
        print("Thank you for playing!")
        break