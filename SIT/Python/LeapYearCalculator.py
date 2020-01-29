import sys


def leap_year(first, last):
    try:
        first, last = int(first), int(last)
    except:
        print("Your input is invalid!")
    result = []
    for number in range(first, last+1, 1):
        if number % 4 == 0:
            result.append(str(number))
    print("The number of Leap Years is %s, the Leap Years are %s" % (len(result), ", ".join(result)))


def main():
    if len(sys.argv)!=3:
        print("Your input is invalid!")
    else:
        leap_year(*sys.argv[1:])


if __name__ == "__main__":
    main()
