package Chapter03;

import java.util.Scanner;

public class IfPart {

	public static void main(String[] args) {
		
		int score = 0;
		char grade = ' ';
		char opt = '0';
		
		System.out.print("점수를 입력해주세요. => ");
		
		Scanner sc = new Scanner(System.in);
		score = sc.nextInt();
		
		System.out.printf("당신의 점수는 %d입니다.%n", score);
		
		if(score >= 90) {
			grade = 'A';
			if(score >= 98) {
				opt = '+';
			}else if(score < 94) {
				opt = '-';
			}
		}else if(score >= 80) {
			grade = 'B';
			if(score >= 88) {
				opt = '+';
			}else if(score < 84) {
				opt = '-';
			}
		}else if(score >= 70) {
			grade = 'C';
			if(score >= 78) {
				opt = '+';
			}else if(score < 74) {
				opt = '-';
			}
		}else if(score >= 60) {
			grade = 'D';
			if(score >= 68) {
				opt = '+';
			}else if(score < 64) {
				opt = '-';
			}	
		}else {
			grade = 'F';
		}
		
		System.out.println("당신의 등급은 " + grade + opt + "입니다.");
	}

}
