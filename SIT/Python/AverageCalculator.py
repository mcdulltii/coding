import sys


def calc_average(a, b, c):
    try:
        a, b, c = float(a), float(b), float(c)
        print("Average:%0.2f" % ((a+b+c)/3.0))
    except:
        print("Your input is invalid!")


def main():
    if len(sys.argv)!=4:
        print("Your input is invalid!")
    else:
        calc_average(*sys.argv[1:])


if __name__ == "__main__":
    main()
