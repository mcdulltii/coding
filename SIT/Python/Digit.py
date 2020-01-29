import sys


def digit(x):
    output = 0

    def find_digit(y, result):
        if str(y)[:2] == "0.":
            return result
        else:
            return find_digit(y/10, result+1)
    output = find_digit(x, output)
    return output


def digit_iterative(x):
    output = 0
    while str(x)[:2] != '0.':
        x /= 10
        output += 1
    return output


def main():
    print("The number of digit(s) calculated by recursive is %s and by iterative is %s." % (digit(float(sys.argv[1])), digit_iterative(float(sys.argv[1]))))


if __name__ == "__main__":
    if len(sys.argv)!=2:
        print("Your input is invalid!")
        sys.exit()
    else:
        main()
