package Chapter01;
import java.util.Scanner;

public class ScanEx {

	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);

		int num = sc.nextInt();
		System.out.println(num);
		
		String str1 = sc.nextLine();
		System.out.println(str1);
		
		String str2 = sc.nextLine();
		int num2 = Integer.parseInt(str2);
		System.out.println(num2);
		
	}
}
