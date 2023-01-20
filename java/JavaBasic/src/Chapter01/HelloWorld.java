package Chapter01;

public class HelloWorld {

	public static void main(String[] args) {

//		1. basic
		System.out.print("Hello ");
		System.out.println("World!");
		System.out.println("My Web!");

		System.out.println(3+5);
		System.out.println(3-5);
		System.out.println(3*5);
		System.out.println(5/3);

//		2.variable(변수)
		int age;
		age = 25;

		int newAge = 0;
		int y = 5, z = 3;
		final int PIA = 44;

		newAge = age + 13;

		System.out.println(newAge);
		System.out.println(y + z + PIA);

		boolean power = true;
		System.out.println(power);
		byte b = 127;
		long l = 10_000_000_000L;
		float f = 3.14f;
		double d = 3.14;

		String s1 = "" + 7 + 7;
		String s2 = 7 + 7 + "";
		System.out.println(s1);
		System.out.println(s2);

	}

}
