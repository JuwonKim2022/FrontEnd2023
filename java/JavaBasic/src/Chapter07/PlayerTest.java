package Chapter07;

abstract class Player {
    abstract void play(int pos);
    abstract void stop();
}

class AudioPlyer extends Player{
    void play(int pos) {
        System.out.println(pos + "위치부터 플레이합니다.");
    }
    void stop(){
        System.out.println("재생을 멈춥니다.");
    }
}

public class PlayerTest {

    public static void main(String[] args) {
//        AudioPlyer ap = new AudioPlyer();
        Player ap = new AudioPlyer();
        ap.play(100);
        ap.stop();
    }
}
