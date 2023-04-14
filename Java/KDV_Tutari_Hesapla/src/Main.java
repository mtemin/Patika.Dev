// Press Shift twice to open the Search Everywhere dialog and type `show whitespaces`,
// then press Enter. You can now see whitespace characters in your code.
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        //kdv li fiyatı hesapla
        Scanner fiyatInput= new Scanner(System.in);
        System.out.println("Fiyatı giriniz(tam sayı gir döverim) : ");
        int fiyat = fiyatInput.nextInt();

        double kdv = fiyat >= 1000 ? 1.08 : 1.18;
        double kdvliFiyat = fiyat * kdv;
        int kdvsizFiyat = fiyat;

        System.out.println("KDV Tutarı : " + kdv);
        System.out.println("KDV'siz Fiyat : " + kdvsizFiyat);
        System.out.println("KDV eklenmiş fiyat : " + kdvliFiyat);
        //Eğer girilen tutar 0 ve 1000 TL arasında ise KDV oranı %18 , tutar 1000 TL'den büyük ise KDV oranını %8 olarak KDV tutarı hesaplayan programı yazınız.
    }
}