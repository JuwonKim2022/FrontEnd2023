import java.util.Scanner;

public class Main1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int A = sc.nextInt();
        int B = sc.nextInt();

        if(A>=1 && B<=10000){
            int[] result = new int[5];
            result[0] = A+B;
            result[1] = A-B;
            result[2] = A*B;
            result[3] = A/B;
            result[4] = A%B;
            for(int i=0; i<5; i++) {
                System.out.println(result[i]);
            }
        }
    }
}
