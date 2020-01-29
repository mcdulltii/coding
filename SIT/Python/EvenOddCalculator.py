import sys


def even_odd(string):
    try:
        string = [int(number) for number in string.split(',')]
    except:
        print("Please enter valid integers.")
    even, odd = [], []
    for element in string:
        if element % 2 == 0: even.append(element)
        else: odd.append(element)
    odd_sum, even_sum = sum(odd), sum(even)
    string = sorted(string)
    diff = string[-1]-string[0]
    total_odd, total_even = len(odd), len(even)
    avg = sum(string[1:-1])/(len(string)-2)
    print("The sum of all even numbers is %s, the sum of all odd numbers is %s, "
          "the difference between the biggest and smallest number is %s, the "
          "total number of even numbers is %s, the total number of odd numbers is %s,"
          "the centered average is %s" % (even_sum, odd_sum, diff, total_even, total_odd, avg))


def main():
    if len(sys.argv)!=2:
        print("Please enter valid integers.")
    else:
        even_odd(sys.argv[1])


if __name__ == "__main__":
    main()
