package Chapter04;

import java.util.Arrays;

public class ArrayPart01 {

	public static void main(String[] args) {
		
		int[] score;
		score = new int[5];
		
		int[] testA = new int[7];
		
		score[3] = 100;
		
		System.out.println("score[0]="+score[0]);
		System.out.println("score[1]="+score[1]);
		System.out.println("score[2]="+score[2]);
		System.out.println("score[3]="+score[3]);
		System.out.println("score[4]="+score[4]);
		
		int[] testB = {1,2,3,4,5,6,7,8,9,10};
		String result1 = Arrays.toString(testB);
		System.out.println(result1);

	}

}
