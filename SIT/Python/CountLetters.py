import sys


def letter_count(string):
    letter_list = {}
    for char in string:
        try:
            letter_list[char] += 1
        except:
            letter_list[char] = 1
    return letter_list


def double_count(string1, string2):
    list_one, list_two = letter_count(string1), letter_count(string2)
    list_one.update(list_two)
    return list_one


def various_count(*string):
    string_dict = sorted(letter_count(''.join(string[0])).iteritems(), reverse=True)
    return string_dict


def main():
    if len(sys.argv)!=2:
        print('Your input is invalid!')
        sys.exit()
    else:
        result = various_count(sys.argv[1].split(','))
        output = ''
        for item in result:
            output += str(item[0]) + ':' + str(item[1]) + ' '
        print(output[:-1])


if __name__ == "__main__":
    main()