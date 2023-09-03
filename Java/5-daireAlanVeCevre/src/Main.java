// Press Shift twice to open the Search Everywhere dialog and type `show whitespaces`,
// then press Enter. You can now see whitespace characters in your code.
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner daireInput = new Scanner(System.in);
        double piSayisi = 3.14;
        System.out.print("Dairenizin yarıçapı : ");
        int daireYaricap = daireInput.nextInt();
        double daireCevresi = 2 * piSayisi * daireYaricap;
        System.out.println("Dairenizin çevre uzunluğu : " + daireCevresi);

        double daireAlan = piSayisi * daireYaricap * daireYaricap;
        System.out.println("Dairenizin alanı : " + daireAlan );

//        Yarıçapı r, merkez açısının ölçüsü 𝛼 olan daire diliminin alanı bulan programı yazınız.

        System.out.print("Merkez açı ölçüsünü giriniz : ");

        int merkezAciOlcusu = daireInput.nextInt();

        System.out.println( "Yarıçapı " + daireYaricap + " merkez açısının ölçüsü" + merkezAciOlcusu + "olan daire diliminin alanı " + (piSayisi * (daireYaricap * daireYaricap ) * merkezAciOlcusu)/360);

    }
}

