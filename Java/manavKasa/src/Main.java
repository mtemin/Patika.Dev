// Press Shift twice to open the Search Everywhere dialog and type `show whitespaces`,
// then press Enter. You can now see whitespace characters in your code.
import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        double armutFiyat = 2.14;
        double elmaFiyat = 3.67;
        double domatesFiyat= 1.11;
        double muzFiyat = 0.95;
        double patlicanFiyat = 5.0;
        System.out.println("Toplam ücreti öğrenmek için kaç kg aldığınızı her bir ürün için giriniz : ");

        System.out.print("Aldığınız armut miktarını kilo cinsinden  giriniz : ");
        double armutKilo = input.nextDouble();

        System.out.print("Aldığınız elma miktarını kilo cinsinden giriniz  : ");
        double elmaKilo = input.nextDouble();

        System.out.print("Aldığınız domates miktarını kilo cinsinden  giriniz : ");
        double domatesKilo = input.nextDouble();

        System.out.print("Aldığınız muz miktarını kilo cinsinden giriniz : ");
        double muzKilo = input.nextDouble();

        System.out.print("Aldığınız patlıcan miktarını kilo cinsinden giriniz : ");
        double patlicanKilo = input.nextDouble();

        double toplamFiyat = (armutKilo * armutFiyat) + (elmaKilo * elmaFiyat) + (domatesKilo * domatesFiyat) + (muzKilo * muzFiyat) + (domatesKilo * domatesFiyat) + (patlicanKilo * patlicanFiyat);
        System.out.println("Aldığınız ürünlerin toplam fiyatı " + toplamFiyat);
    }
}