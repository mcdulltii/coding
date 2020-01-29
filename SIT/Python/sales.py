import sys


def scale(list1, y):
    return map(lambda x: x*y, list1)


def sort(list1):
    num_dict = [[str(num)[:-1], str(num)[-1]] for num in list1]
    sorted_list = sorted(num_dict, key=lambda x: x[1])
    return [int(num[0]+num[1]) for num in sorted_list]


def goodSales(sales):
    return filter(lambda num: num>sum(sales)/len(sales), sales)


def find_sales(lst, scl):
    print("The scaled number is: %s The sorted sales numbers are: %s The good sales numbers are: %s" % (scale(lst, int(scl)), sort(lst), goodSales(lst)))


def main():
    lst = [int(num) for num in sys.argv[1].split(',')]
    find_sales(lst, sys.argv[2])


if __name__ == "__main__":
    if len(sys.argv)!=3:
        print('Your input is invalid!')
        sys.exit()
    else:
        main()

