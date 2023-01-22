package Chapter05;

public class TVUse {
    public static void main(String[] args) {
        TV t1 = new TV();
        TV t2 = new TV();
        t1.channel = 7;
        t2.channel = 7;
        t1.channelDown();
        t2.channelUp();
        System.out.println("현재 t1채널은 " + t1.channel + "입니다.");
        System.out.println("현재 t2채널은 " + t2.channel + "입니다.");

        TV[] tvArr = new TV[3];
        tvArr[0] = new TV();
        tvArr[1] = new TV();
        tvArr[2] = new TV();
    }
}
