package Chapter01;

public class Variable {

	public static void main(String[] args) {
		
//		1. 값 교환
		int x = 10;
		int y = 20;
		int tmp;
		
		System.out.println("x = " + x + ", y = " + y);
		
		tmp = x;
		x = y;
		y = tmp;
		
		System.out.println("x = " + x + ", y = " + y);
		
//		2. printf
		
//		System.out.printf("%.2f", 10.0/3);
//		System.out.printf("%d", 0x1A);
//		System.out.printf("%X", 0x1A);
		System.out.printf("age : %d / year : %d\n", 14, 2022);
		System.out.printf("age : %d / year : %d%n", 14, 2022);
		System.out.printf("age : %d / year : %d%n", 14, 2022);

	}

}
