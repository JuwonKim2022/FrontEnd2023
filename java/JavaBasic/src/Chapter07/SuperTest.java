package Chapter07;

class NewPoint{
    int x;
    int y;

    NewPoint(int x, int y){
        this.x = x;
        this.y = y;
    }

    String getLoc(){
        return "x : " + x + ", y : " + y;
    }
}

class NewPoint3D extends NewPoint{
    int z;

    NewPoint3D(int x, int y, int z){
        super(x,y);
        this.z = z;
    }
    String getLoc(){
        return "x : " + x + ", y : " + y + ", z : " + z;
    }
}

public class SuperTest {
    public static void main(String[] args) {
        NewPoint3D np = new NewPoint3D(1,2,3);
        
    }
}
