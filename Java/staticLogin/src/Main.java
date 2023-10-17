import java.util.Scanner;

// Press Shift twice to open the Search Everywhere dialog and type `show whitespaces`,
// then press Enter. You can now see whitespace characters in your code.
public class Main {
    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);
        String userName = "mtemin";
        String password = "testpass123";
        System.out.print("Kullanıcı adınız: ");
        String inputUserName = input.nextLine();
        System.out.print("Şifreniz: ");
        String inputPassword = input.nextLine();

        if(inputUserName.equals(userName) && inputPassword.equals(password)){
            System.out.println("Giriş başarılı");
        }else{
            System.out.println("Girilen bilgilerden birisi yanlış");
            System.out.print("Şifrenizi değiştirmek ister misiniz ? (Evet ise e, hayır ise h yazınız)");
            String passwordChangePermission = input.nextLine();
            if(passwordChangePermission.equals("e")){
                System.out.print("Yeni şifrenizi giriniz : ");
                String newPassword = input.nextLine();

                if(newPassword.equals(password)){
                    System.out.println("Yeni şifre eski şifre ile aynı olamaz.");

                }else{
                    newPassword = password;
                    System.out.println("Şifre oluşturuldu.");

                }
            }else if(passwordChangePermission.equals("h")){
                System.out.println("Şifreniz değiştirilmedi.");

            }else{
                System.out.println("Yanlış giriş yaptınız.");

            }
        }

    }
}