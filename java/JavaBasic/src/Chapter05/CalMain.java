package Chapter05;

public class CalMain {

    public static void main(String[] args) {
        MyMath mm = new MyMath();
        long result1 = mm.add(5L, 3L);
        long result2 = mm.substract(5L, 3L);
        long result3 = mm.multiply(5L, 3L);
        double result4 = mm.divide(5L, 3L);

        System.out.println("add = " + result1);
        System.out.println("sub = " + result2);
        System.out.println("mul = " + result3);
        System.out.println("div = " + result4);
    }
}
