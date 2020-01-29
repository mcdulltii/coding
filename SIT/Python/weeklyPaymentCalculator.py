import sys


def calc_pay(hours, normal, overtime):
    hours, normal, overtime = float(hours), float(normal), float(overtime)
    if hours>24*7:
        print("Your input is invalid!")
        return
    if hours<40:
        pay_normal = normal * hours
        pay_overtime = 0.00
    else:
        pay_normal = normal * 40
        pay_overtime = overtime * (hours - 40)
    print("Normal Salary:%0.2f, Extra Salary:%0.2f, Total Salary:%0.2f" % (pay_normal, pay_overtime, (pay_normal+pay_overtime)))


def main():
    if len(sys.argv)!=4:
        print("Your input is invalid!")
    else:
        calc_pay(*sys.argv[1:])


if __name__ == "__main__":
    main()
