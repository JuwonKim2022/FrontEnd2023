import java.util.Scanner;
public class Main6 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int numA = sc.nextInt();
        int numB = sc.nextInt();
        int a = numB%10;
        int b = (numB/10)%10;
        int c = numB/100;

        boolean val = (numA>=100 && numA<=999 && numB>=100 && numB<=999);

        if(val){
            System.out.println(numA * a);
            System.out.println(numA * b);
            System.out.println(numA * c);
            System.out.println(numA * numB);
        }
    }
}
