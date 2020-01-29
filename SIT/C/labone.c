#include <stdio.h>
#include <math.h>

int main() {
	int func, a = -1, b = 2, d, n, number, attempt, guess = 10, under = 0, norm = 0;
	float x = 0.1, y = 1.5, weight, height, bmi;
	char c = 'p';
	char * eval;
	printf("Run which function? ('1/2/3/4/5'): ");
	scanf("%ls", &func);

	switch (func) {
		case '1':
			printf("Hello World!\n");
			printf("Welcome to ICT1002!\n");
			break;
		case '2':
			printf("%.1f\n", (float)a/b);
			printf("%d\n", a*b);
			printf("%d\n", (b*3)%4);
			printf("%.1f\n", x*a);
			printf("%.1f\n", y/x);
			printf("%c", c-3);

			printf("%4d\n", a);
			printf("%04d\n", b);
			printf("a/b = %d\n", a / b);
			printf("%x\n", b);
			printf("%.2f\n", y);
			printf("%10.1f\n", x);
			printf("c =\t%c\n", c);
			break;
		case '3':
			printf("Enter: ");
			scanf("%d", &n);

			for (int i=1; i<=n; i++) {
			 for (int j=1; j<=i; j++) {
			   printf("%3d ", i+j);
			 }
			 printf("\n");
			}

			printf("\n");

			for (int i=1; i<=n; i++) {
			 for (int j=1; j<=n; j++) {
			   if (j<=i) {d = i*j;}
			   else {d = j/i;}
			   printf("%3d ", d);
			 }
			 printf("\n");
			}
			break;
		case '4':
			printf("Enter your weight in kilograms: ");
			scanf("%f", &weight);
			printf("Enter your height in metres: ");
			scanf("%f", &height);

			bmi = weight/pow(height,2);

			if (bmi<18.5) {
			 eval = "underweight";
			 under = 1;
			} else if (!under && bmi<24.9) {
			 eval = "normal";
			 norm = 1;
			} else if (!under && !norm && bmi<29.9) {
			 eval = "overweight";
			} else {
			 eval = "obese";
			}

			printf("Your BMI is %.1f. That is within the %s range.\n", bmi, eval);
			break;
		case '5':
			while (number<1 || number>1000) {
			printf("Player 1, enter a number between 1 and 1000:\n");
			scanf("%d", &number);
			if (number<1 || number>1000) {
			printf("That number is out of range.\n");
			}
			}
			while (attempt!=number && guess>0) {
			printf("Player 2, you have %d guesses remaining.\n", guess);
			printf("Enter your guess:\n");
			scanf("%d", &attempt);
			if (attempt!=number){
			if(attempt>number) {
			printf("Too high.\n");
			} else {printf("Too low.\n");}
			} else {
			printf("Player 2 wins.\n");
			return 0;
			}
			guess--;
			}
			printf("Player 1 wins.\n");
			break;
		default:
			printf("No function\n");
	}
	return 0;
}
