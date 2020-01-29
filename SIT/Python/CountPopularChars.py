import sys


def count_chars(string):
    string = string.lower()
    string_dict = {}
    result = ""
    for char in string:
        try:
            string_dict[char] += 1
        except:
            string_dict[char] = 1
    for element in sorted(string_dict, key=string_dict.__getitem__, reverse=True)[0:5]:
        result += element+":"+str(string_dict[element])+","
    print(result[:-1])


def main():
    if len(sys.argv)!=2:
        print("Your input is invalid!")
    else:
        count_chars(sys.argv[1])


if __name__ == "__main__":
    main()
