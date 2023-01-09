import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main14 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int n = Integer.parseInt(st.nextToken());
        int sum = 0;
        boolean val = (n>=1 && n<=10000);

        if(val){
            for(int i=1; i<=n; i++){
                sum = sum + i;
            }
        }
        System.out.println(sum);
    }
}
