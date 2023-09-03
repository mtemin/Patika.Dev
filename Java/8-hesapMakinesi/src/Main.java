import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        int number1, number2, selection;


        Scanner input = new Scanner(System.in);
        System.out.print("İlk sayıyı giriniz : ");
        number1 = input.nextInt();
        System.out.print("İkinci sayıyı giriniz : ");
        number2 = input.nextInt();

        System.out.println("1-Toplama3\n2-Çıkarma\n3-Çarpma\n4-Bölme");
        System.out.print("Seçiminiz : ");
        selection = input.nextInt();

        switch (selection){
            case 1:
                System.out.println("Toplama işlemi sonucu = " + (number1 + number2));
                break;
            case 2:
                System.out.println("Çıkarma işlemi sonucu = " + (number1 - number2));
                break;
            case 3:
                System.out.println("Çarpma işlemi sonucu = " + (number1 * number2));
                break;
            case 4:
                if(number2 == 0){
                     System.out.println("Tam sayılar 0'a bölünemez.");
                }else {
                System.out.println("Bölme işlemi sonucu = " + (number1 / number2));
                }
                break;
            default:
                System.out.println("Geçersiz bir giriş yaptınız.");
                break;
        }



//        if(selection == 1){
//            System.out.println("Toplam işlemi sonucu = " + (number1+number2));
//        }else if(selection == 2){
//            System.out.println("Çıkarma işlemi sonucu = " + (number1-number2));
//        }else if(selection == 3){
//            System.out.println("Çarpma işlemi sonucu = " + (number1*number2));
//        }else if(selection == 4){
//            if(number2 == 0){
//                System.out.println("Doğal sayılar 0'a bölünemez.");
//            }else{
//            System.out.println("Bölme işlemi sonucu = " + (number1/number2));
//            }
//        }else{
//            System.out.println("Yanlış seçim yaptınız.");
//        }
    }
}