import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main8 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int A = Integer.parseInt(st.nextToken());
        int B = Integer.parseInt(st.nextToken());

        boolean val = (A>=(-10000) && A<=10000 && B>=(-10000) && B<=10000);
        if(val){
            if (A>B){
                System.out.println(">");
            }else if(A<B){
                System.out.println("<");
            }else if(A==B){
                System.out.println("==");
            }
        }
    }
}
