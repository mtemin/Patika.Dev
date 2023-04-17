// Press Shift twice to open the Search Everywhere dialog and type `show whitespaces`,
// then press Enter. You can now see whitespace characters in your code.
import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner numberInput = new Scanner(System.in);
//        System.out.println("Dik üçgeninizin hipotenüsünü öğrenmek için 2 kısa kenarın uzunluğunu giriniz.");
//

//        Üçgenin hipotenüsünü hesapla

//        System.out.print("1. kenarınızın uzunluğu : ");
//        int a = numberInput.nextInt();
//
//        System.out.print("2. kenarınızın uzunluğu : ");
//        int b = numberInput.nextInt();
//
//        int aKare = a * a;
//        int bKare = b * b;
//        int hipotenus = aKare + bKare;
//        System.out.println("Üçgeninizin hipotenüsü : " + hipotenus);
//

//        Üçgenin çevre uzunluğunu hesapla

//        System.out.println("Ügeninizin çevre uzunluğunu öğrenmek için her bir kenarının uzunluğunu giriniz.");
//        System.out.print("1. kenarınızın uzunluğu : ");
//
//        int a = numberInput.nextInt();
//
//        System.out.print("2. kenarınızın uzunluğu : ");
//        int b = numberInput.nextInt();
//
//        System.out.print("3. kenarınızın uzunluğu : ");
//        int c = numberInput.nextInt();
//
//        int ucgenUzunluk = a+b+c;
//        System.out.println("Üçgeninizin uzunluğu : " + ucgenUzunluk);

//        Dik üçgenin alanını hesapla

          System.out.println("Dik üçgeninizin alanını öğrenmek için dik ve yatay kenarın uzunluklarını giriniz.");
          System.out.print("Dik kenar uzunluğunu giriniz : ");
          int dikKenar = numberInput.nextInt();

          System.out.print("Üçgenin yatay uzunluğu : ");
          int altKenar = numberInput.nextInt();
        double dikUcgenAlan = (dikKenar * altKenar) / 2;
        System.out.println("Üçgeninizin alanı : " + dikUcgenAlan);



    }

}