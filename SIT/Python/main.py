from myMath import *
import sys


def main():
    if len(sys.argv) != 2:
        print('Your input is invalid!')
        sys.exit()
    else:
        data = sys.argv[1].split(',')
        inpt = [int(x) for x in data]
        if minimum(inpt)<5: small = clear(inpt)
        else: small = inpt
        print("The difference is: %d The summation is: %d The summation of all input is: %d The number of even numbers is: %d The values in the list are: %s") % (subtraction(maximum(inpt), minimum(inpt)), add(maximum(inpt), minimum(inpt)), sumTotal(inpt), len(evenNum(inpt)), small)


if __name__ == "__main__":
    main()