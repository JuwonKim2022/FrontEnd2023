import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main11 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int H = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());

        boolean val = (H>=0 && H<=23 && M>=0 && M<=59);

        if(val) {
            if(M<45){
                if(H<1){
                    H = 23;
                    M = M + 15;
                    System.out.print(H + " ");
                    System.out.print(M);
                }else{
                    H = H - 1;
                    M = M + 15;
                    System.out.print(H + " ");
                    System.out.print(M);
                }
            }else{
                if(H<1){
                    H = 23;
                    M = M - 45;
                    System.out.print(H + " ");
                    System.out.print(M);
                }else{
                    M = M - 45;
                    System.out.print(H + " ");
                    System.out.print(M);
                }
            }
        }
    }
}
