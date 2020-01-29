import sys


def category(bmi):
    arr = [-100000.0,16.0,17.0,18.5,25.0,30.0,35.0,40.0,100000.0]
    cat = ["Severe Thinness","Moderate Thinness","Mild Thinness","Normal","Overweight","Obese Class I","Obese Class II","Obese Class III"]
    for num in range(len(arr)):
        if arr[num-1] < bmi < arr[num]:
            return cat[num-1]


def bmi_calc(units, height, weight):
    height, weight = float(height), float(weight)
    bmi = weight/(height**2)
    if units == 'metric':
        print("%0.2f\t%s" % (bmi, category(bmi)))
    elif units == 'imperial':
        print("%0.2f\t%s" % (703*bmi, category(703*bmi)))


def main():
    if len(sys.argv)!=4:
        print("Your input is invalid")
    else:
        bmi_calc(*sys.argv[1:])


if __name__ == '__main__':
    main()
