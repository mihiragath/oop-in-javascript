#include <iostream>
using namespace std;

class BankAccount
{
private:
    string accountHolder;
    int accountNumber;
    double balance;

public:
    // Constructor
    BankAccount(string name, int accNo, double bal)
    {
        accountHolder = name;
        accountNumber = accNo;
        balance = bal;
    }

    // Setter Function
    void setBalance(double amount)
    {
        if (amount >= 0)
        {
            balance = amount;
        }
        else
        {
            cout << "Invalid Balance!" << endl;
        }
    }

    // Getter Function
    double getBalance()
    {
        return balance;
    }

    void deposit(double amount)
    {
        balance += amount;
        cout << amount << " Deposited Successfully" << endl;
    }

    void withdraw(double amount)
    {
        if (amount <= balance)
        {
            balance -= amount;
            cout << amount << " Withdrawn Successfully" << endl;
        }
        else
        {
            cout << "Insufficient Balance!" << endl;
        }
    }

    void display()
    {
        cout << "\nAccount Holder : " << accountHolder;
        cout << "\nAccount Number : " << accountNumber;
        cout << "\nBalance : " << balance << endl;
    }
};

int main()
{
    BankAccount acc("Mihir", 101, 5000);

    acc.display();

    cout << "\nCurrent Balance: "
         << acc.getBalance() << endl;

    acc.deposit(2000);

    acc.withdraw(1000);

    cout << "\nUpdated Balance: "
         << acc.getBalance() << endl;

    return 0;
}