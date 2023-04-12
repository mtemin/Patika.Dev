// Press Shift twice to open the Search Everywhere dialog and type `show whitespaces`,
// then press Enter. You can now see whitespace characters in your code.
        import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        int matematik, fizik, kimya, turkce, tarih, muzik;
        System.out.print("Matematik notunuzu giriniz : ");
        Scanner gradeInput = new Scanner(System.in);
        matematik = gradeInput.nextInt();

        System.out.print("Fizik notunuzu giriniz : ");
        fizik = gradeInput.nextInt();

        System.out.print("Kimya notunuzu giriniz : ");
        kimya = gradeInput.nextInt();

        System.out.print("Türkçe notunuzu giriniz : ");
        turkce = gradeInput.nextInt();

        System.out.print("Tarih notunuzu giriniz : ");
        tarih = gradeInput.nextInt();

        System.out.print("Müzik notunuzu giriniz : ");
        muzik = gradeInput.nextInt();

        int sonuc = (matematik + fizik + kimya + turkce + tarih + muzik) / 6;
        System.out.println("Ortalamanız " + sonuc);
        String finalResult = sonuc > 60 ? "Geçtiniz" : "Kaldınız" ;
        System.out.println(finalResult);

    }
}