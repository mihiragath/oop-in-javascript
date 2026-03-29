// 🔥 ENCAPSULATION FULL DEMO

class BankAccount {

    // ===============================
    // 🔹 1. Private Data (Hidden)
    // ===============================
    private String accountHolder;
    private double balance;

    // ===============================
    // 🔹 2. Constructor
    // ===============================
    public BankAccount(String name, double balance) {
        this.accountHolder = name;
        this.balance = balance;
    }

    // ===============================
    // 🔹 3. Getter Methods (Read)
    // ===============================
    public String getAccountHolder() {
        return accountHolder;
    }

    public double getBalance() {
        return balance;
    }

    // ===============================
    // 🔹 4. Setter Methods (Write with control)
    // ===============================
    public void setAccountHolder(String name) {
        this.accountHolder = name;
    }

    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        } else {
            System.out.println("Invalid deposit amount ❌");
        }
    }

    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
        } else {
            System.out.println("Invalid withdrawal ❌");
        }
    }
}

// ===============================
// 🔥 5. Main Class
// ===============================
public class Main {
    public static void main(String[] args) {

        BankAccount acc = new BankAccount("Mihir", 10000);

        // ❌ Direct access not allowed
        // acc.balance = 50000;  // ERROR (private)

        // ✅ Controlled access
        acc.deposit(2000);
        acc.withdraw(500);

        System.out.println("Name: " + acc.getAccountHolder());
        System.out.println("Balance: " + acc.getBalance());
    }
}