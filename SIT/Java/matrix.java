import java.io.*;
import java.util.*;

public class matrix {
	// Append element to matrix
	// Returns array with inputted array type
	static <T> T[] append(T[] arr, T element) {
		final int N = arr.length;
		arr = Arrays.copyOf(arr, N + 1);
		arr[N] = element;
		return arr;
	}
	
	// Reads matrix from matrix.txt
	// If matrix.txt is not found,
	// stdin is used instead
	// 
	// row, column of matrix as first input
	// matrix values as further inputs
	// 
	// Iterates through matrix (delimited by ',')
	// Finds repeated numbers across rows of the matrix
	// Prints out the maximum repeated number if found
	public static void main(String[] args) {
		String[] inputList = {}, rowcol = {}, firstrow = {}, samesame = {}, sameeach = {}, elem;
		String input = " ";
		int each;
		
		try {
			// Reads matrix.txt
			File f = new File("matrix.txt");
			Scanner br = new Scanner(f);
			if (br.hasNextLine()) {
				input = br.nextLine();
			} else {
				System.out.println("Error occurred");
				System.exit(-1);
			}
			elem = input.split(",",2);
			for (String a: elem) rowcol = append(rowcol, a);
			while (br.hasNextLine()) {
				input = br.nextLine();
				inputList = append(inputList, input);
			}
		}
		catch (Exception e) {
			// Reads stdin
			System.out.println("Error occurred when reading matrix.txt!");
			Scanner br = new Scanner(System.in);
			System.out.println("Number of rows, columns:");
			input = br.nextLine();
			elem = input.split(",",2);
			for (String a: elem) rowcol = append(rowcol, a);
			System.out.println("Enter matrix:");
			for (int i=0; i<Integer.parseInt(rowcol[0]); i++) {
				input = br.nextLine();
				inputList = append(inputList, input);
			}
		}
		finally {
			// Iterates through rows of matrix
			for (int i=0; i<Integer.parseInt(rowcol[0]); i++) {
				if (i==0) {
					// First row of matrix as controlled comparison
					firstrow = inputList[0].split(",",Integer.parseInt(rowcol[1]));
				}
				else {
					// Compares numbers from first row with every other row
					sameeach = new String[0];
					elem = inputList[i].split(",",Integer.parseInt(rowcol[1]));
					for (String a: elem) {
						for (String b: firstrow) {
							if (a.equals(b)) sameeach = append(sameeach, a);
						}
					}
					if (i==1) {
						// Output from comparison of first and second rows
						samesame = sameeach.clone();
					} else {
						// Replace comparisons of further rows
						Set<String> set = new LinkedHashSet<String>(Arrays.asList(samesame));
						set.retainAll(Arrays.asList(sameeach));
						samesame = new String[set.size()];
						set.toArray(samesame);
					}
					// System.out.println(Arrays.toString(samesame)+' '+Arrays.toString(sameeach));
				}
			}
			// Remove null strings from comparison
			samesame = Arrays.stream(samesame)
                     .filter(s -> (s != null && s.length() > 0))
                     .toArray(String[]::new);
			// Sorts found repeated numbers by decreasing order
			Arrays.sort(samesame, Collections.reverseOrder());
			// Check if repeated numbers are found
			if (samesame.length != 0) {
				System.out.println("Maximum common value: "+samesame[0]);
			} else {
				System.out.println("No common values.");
			}
		}
	}
}