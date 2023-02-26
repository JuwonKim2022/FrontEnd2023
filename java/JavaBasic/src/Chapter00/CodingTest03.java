package Chapter00;

public class CodingTest03 {
    public static void main(String[] args) {
        for (int i=2; i<10; i++){
            if(i%3 != 0){
                continue;
            }
            for(int j=1; j<10; j++){
                System.out.println(i + " x " + j + " = " + (i*j));
            }
        }
    }
}
