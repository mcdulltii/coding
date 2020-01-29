#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

#define RECORDSIZE 512
#define NAMSIZ 100
#define TUNMLEN 32
#define TGNMLEN 32

typedef struct header {
	char name[NAMSIZ];
	char mode[8];
	char uid[8];
	char size[12];
	char mtime[12];
	char chksum[8];
	char linkflag;
	char linkname[NAMSIZ];
	char magic[8];
	char uname[TUNMLEN];
	char gname[TGNMLEN];
	char devmajor[8];
	char devminor[8];
} head;

//Initialise header
head field;

head settings(int size, char *string) {
	// Sets header to be file-specific in each loop
	sprintf(field.size, "%d", size);
	strcpy(field.name, string);
	strcpy(field.mode, "");
	strcpy(field.uid, "");
	strcpy(field.mtime, "");
	strcpy(field.chksum, "");
	strcpy(field.linkname, "");
	strcpy(field.magic, "");
	strcpy(field.uname, "");
	strcpy(field.gname, "");
	strcpy(field.devmajor, "");
	strcpy(field.devminor, "");
	return field;
}

int fileSize(FILE *inFile) {
	// Finds the size of input file
	fseek(inFile, 0, SEEK_END); // seek to end of file
	int size = ftell(inFile); // get current file pointer
	fseek(inFile, 0, SEEK_SET); // seek back to beginning of file
	return size;
}

void append(FILE *f, FILE *in, head heading) {
	// Copies text from input to output file
	char c[4096];
	fwrite(&heading, sizeof(head), 1, f); // Writes header
	printf("Filesize: %s\n", heading.size);
	while (!feof(in)) {
		size_t bytes = fread(c, 1, sizeof(c), in);
		if (bytes) {fwrite(c, 1, bytes, f);}
	}
}

void reads(char *string) {
	// Reads struct headers
	head headings;
	FILE *readFile = fopen(string, "r");
	int size;
	if (readFile == NULL) {
		printf("Error!");
		return;
	}
	// Prints headers
	while (fread(&headings, sizeof(head), 1, readFile)) {
		printf("Filename: %s\nFilesize: %s\n", headings.name, headings.size);
		size = atoi(headings.size);
		fseek(readFile, size, SEEK_CUR); //Offsets file to next header
	}
	fclose(readFile);
}

int main(int argc, char **argv) {
	// Command line operations
	// -r <filename> : Reads struct headers from file
	// -f <output file> <filename> ... : "Tars" files into output file
	// -h : Prints the above info
	int opt, size;
	int count = 1;
	char *filename;
	FILE *outFile, *inFile;
	while((opt = getopt(argc, argv, ":if:lrx")) != -1) {
		switch(opt) {
			case 'f':
				printf("Output file: %s\n", optarg);
				outFile = fopen(optarg, "wb");
				break;
			case 'r':
				printf("Input file: %s\n", argv[2]);
				reads(argv[2]);
				return 0;
			case 'h':
			default:
				printf("Command line opts:\n");
				printf("-r <filename> : Reads struct headers from file\n");
				printf("-f <output file> <filename> ... : Tars files into output file\n");
				printf("-h : Prints the above info\n");
				return 0;
		}
	}

	if (outFile == NULL) {
		printf("File can't be opened!");
		return 1;
	}

	for (; optind < argc; optind++) {
		// Reads each -o input filenames
		printf("Input file %d: %s\n", count, argv[optind]);
		// Check for consecutive repeats
		if (filename == argv[optind]) {continue;} else {filename = argv[optind];}
		inFile = fopen(argv[optind], "rb");
		if (inFile == NULL) {
			printf("File can't be opened!");
			return 1;
		}
		size = fileSize(inFile);
		field = settings(size, argv[optind]);
		append(outFile, inFile, field);
		fclose(inFile);
		count++;
	}
	fclose(outFile);
	return 0;
}
