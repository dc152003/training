# Citibank ATM Simulation 💳

This is a simple ATM simulation system built with Python.  
It provides both **Admin** and **User** functionalities such as adding accounts, viewing users, deposits, withdrawals, transfers, and PIN changes.

---

## How to Run the Project

1. Clone this repository:
   ```bash
   git clone https://github.com/dc152003/project1.git
   cd project1
   code .

2. Make sure you are inside the project folder where atm.py is located.

3. Run the application:
   ```bash
   python atm.py

4. Project structure 
    ```bash
    project/
    │-- atm.py
    │-- users/           # Stores user account files
    │-- admin/           # Stores admin credentials
    │-- autonumber.txt   # Tracks next account number


<hr>

**Admin Credentials (default)**

- Username: admin
- Password: admin123
- Secret Code: 1212

Once logged in, the admin can:
- Add new users
- View all users
- Delete users
- Update user details

<hr>

**User Features**

- Login with account number, username, and password
- View account details & balance
- Withdraw and deposit money
- Transfer money between accounts
- Change PIN securely

**User Credentials**
- Account Number → 101
- First Name → devaanshi
- Last Name → chaturvedi
- Balance → 5000
- Username → devaanshi101
- Password → devaanshi101@101**
- PIN → 1111
