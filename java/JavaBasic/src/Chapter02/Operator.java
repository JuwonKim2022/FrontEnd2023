package Chapter02;

public class Operator {
	
	public static void main(String[] args) {
	
//	1. 증감
		int i = 5;
		int j = 0;
	
		j = i++;
		System.out.println("i = " + i + ", j = " + j);
		
		i=5;
		j=0;
		
		j = ++i;
		System.out.println("i = " + i + ", j = " + j);
		
//		반올림
		double pi = 3.141592;
		long result = Math.round(pi);
		System.out.println(result);

//		조건식
		int x = 5;
		int y = 3;
		result = x > y ? x+1 : y-1;
		System.out.println(result);
		
		x = 6;
		y = 10;
		result = x > y ? x+1 : y-1;
		System.out.println(result);
	}
}
