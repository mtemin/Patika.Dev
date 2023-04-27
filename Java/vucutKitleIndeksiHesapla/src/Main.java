// Press Shift twice to open the Search Everywhere dialog and type `show whitespaces`,
// then press Enter. You can now see whitespace characters in your code.
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);
        System.out.print("Boyunuzu metre cinsinde giriniz : ");
        double boy = input.nextDouble();
        System.out.print("Kilonuzu giriniz : ");
        int kilo = input.nextInt();
        double vucutKitleIndeks = kilo/ (boy * boy);
        System.out.println("Vücüt kitle indeksiniz : " + vucutKitleIndeks);

        System.out.println("18.5 ve altı: Zayıf\n" +
                "\n" +
                "        18.5 ile 24.9 arası: Normal\n" +
                "\n" +
                "        25 ile 29.9 arası: Kilolu\n" +
                "\n" +
                "        30 ile 34.9 arası: Şişman (obezite sınıfı 1)\n" +
                "\n" +
                "        35 ile 39.9 arası: Aşırı şişman (obezite sınıfı 2)\n" +
                "\n" +
                "        40 ve üzeri: Aşırı aşırı şişman (obezite sınıfı 3)");

    }
}