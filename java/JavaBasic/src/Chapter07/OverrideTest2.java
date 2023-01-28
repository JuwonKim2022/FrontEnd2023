package Chapter07;

class MyPoint extends Object{
    int x;
    int y;

    MyPoint(int x, int y){
        this.x = x;
        this.y = y;
    }
    public String toString(){
        return "x:"+ x +", y=" + y;
    }
}

public class OverrideTest2 {
    public static void main(String[] args) {
        MyPoint p = new MyPoint(3,5);
        System.out.println(p);
    }
}
