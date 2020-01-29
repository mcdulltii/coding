import sys


def sum_recursive(x):
    output = 0

    def recurse(y, m, result):
        if y != m+1:
            return recurse(y + 1, m, result + y)
        else:
            return result
    output = recurse(0, x, output)
    return output


def sum_iterative(x):
    output = 0
    for i in range(x): output+=i
    return output


def main():
    print("The SUM value calculated by recursive is %s and by iterative is %s." % (sum_recursive(int(sys.argv[1])), sum_recursive(int(sys.argv[1]))))


if __name__ == "__main__":
    if len(sys.argv)!=2:
        print('Your input is invalid!')
        sys.exit()
    else:
        main()
