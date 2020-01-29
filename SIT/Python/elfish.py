import sys


def find_elf(string):
    output = [0, 0, 0]

    def if_elf(check):
        elf = ['e', 'l', 'f']
        if check.lower() in elf:
            output[elf.index(check.lower())] = 1
        return
    for char in string:
        if_elf(char)
    if 0 in output: return 0
    else: return 1


def main():
    if bool(find_elf(sys.argv[1])):
        print("%s is one elfish word!" % sys.argv[1])
    else:
        print("%s is not an elfish word!" % sys.argv[1])


if __name__ == "__main__":
    if len(sys.argv)!=2:
        print('Your input is invalid!')
        sys.exit()
    else:
        main()
