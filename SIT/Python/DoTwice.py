import sys


def double(x): return x*2
def square(x): return x**2
def cube(x): return x**3


def op_inpt(num, op):
    cases = {'1':double, '2':square, '3':cube}
    if op not in cases.keys():
        print("It cannot be supported!")
        sys.exit()
    else:
        print(cases[op](cases[op](int(num))))


def main():
    op_inpt(*sys.argv[1:])


if __name__ == "__main__":
    if len(sys.argv)!=3:
        print('Your input is invalid!')
        sys.exit()
    else:
        main()
