package Chapter03;

public class RandomPart {

	public static void main(String[] args) {

		int num = 0;
		
		for (int i=1; i<=20; i++) {
			System.out.println((int)(Math.random()*11)-5);
		}
		
		int a = 5;
		
		while(a != 0) {
			a--;
			System.out.println(a + " - I can do it!");
		}

	}

}
