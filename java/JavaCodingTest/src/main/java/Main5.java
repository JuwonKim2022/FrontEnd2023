import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main5 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int A = Integer.parseInt(st.nextToken());
        int B = Integer.parseInt(st.nextToken());
        int C = Integer.parseInt(st.nextToken());
        boolean val = (A>=2 && A<=10000 && B>=2 && B<=10000 && C>=2 && C<=10000);

        if(val){
            System.out.println((A+B)%C + " ");
            System.out.println(((A%C)+(B%C))%C + " ");
            System.out.println((A*B)%C + " ");
            System.out.println(((A%C)*(B%C))%C);
        }
    }
}
