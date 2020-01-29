import sys
import re


def search(string, pattern):
    string = ''.join(string.split(','))
    pattern = ''.join(pattern.split(','))
    searched = re.findall('(?=(' + pattern + '))', string)
    return len(searched)


def main():
    if len(sys.argv)!=3:
        print('Your input is invalid!')
        sys.exit()
    else:
        print('Pattern appears %s time!' % search(*sys.argv[1:]))


if __name__ == "__main__":
    main()
