package Chapter05;

class Constr1 {
    int val;
}
class Constr2{
    int val;

    Constr2(){}
    Constr2(int x){
        val = x;
    }
}
public class Constr{
    public static void main(String[] args) {
        Constr1 c1 = new Constr1();
        Constr2 c2 = new Constr2();
    }
}
