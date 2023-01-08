import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main9 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int a = Integer.parseInt(st.nextToken());
        boolean val = (a>=0 && a<=100);

        if(val){
            if(a>=90){
                System.out.println("A");
            }else if(a>=80){
                System.out.println("B");
            }else if(a>=70){
                System.out.println("C");
            }else if(a>=60) {
                System.out.println("D");
            }else{
                System.out.println("F");
            }
        }
    }
}
