import os

# Function to display welcome message
def display_welcome():
    print("\n~~~~~~~~~ Welcome to Citibank ~~~~~~~~~")
    print("a. Admin")
    print("b. User")
    return input("Please select an option (a/b): ").lower()

# Admin login function
def admin_login():
    print("\nWelcome Admin")
    username = input("Enter username: ")
    password = input("Enter password: ")
    secret_code = input("Enter secret code: ")
    
    admin_file = "mini_project/admin/admin1.txt"
    if os.path.exists(admin_file):
        with open(admin_file, 'r') as f:
            admin_data = f.readline().strip().split(',')
            if (username == admin_data[0] and 
                password == admin_data[1] and 
                secret_code == admin_data[2]):
                print("Admin login successful!")
                return True
            else:
                print("Invalid admin credentials!")
                return False
    else:
        print("Admin file not found!")
        return False
    

def admin_menu():
    while True:
        print("\n------ Admin Menu ------")
        print("1. Add a New User")
        print("2. View All Users")
        print("3. Delete a User")
        print("4. Update a User")
        print("5. Exit")
        choice = input("Select an option (1-5): ")

        if choice == '1':
            add_new_user()
        elif choice == '2':
            view_all_users()
        elif choice == '3':
            delete_user()
        elif choice == '4':
            update_user()
        elif choice == '5':
            print("Exiting Admin Menu.")
            break
        else:
            print("Invalid option. Please try again.")



def get_new_account_number():
    autonumber_file = "autonumber.txt"
    if not os.path.exists(autonumber_file):
        with open(autonumber_file, 'w') as f:
            f.write("100")  # Default starting account number
    
    # Read the current account number and increment it
    with open(autonumber_file, 'r') as f:
        current_number = int(f.read().strip())
    
    new_account_number = current_number + 1
    
    # Save the new account number back to the file
    with open(autonumber_file, 'w') as f:
        f.write(str(new_account_number))
    
    return new_account_number



def add_new_user():
    first_name = input("Enter first name: ")
    last_name = input("Enter last name: ")
    balance = input("Enter initial balance: ")
    pin = input("Enter 4-digit PIN: ")
    
    # Generate account number using the autonumber file
    acc_no = get_new_account_number()

    # Create username as 'firstname<generated account number>'
    username = f"{first_name.lower()}{acc_no}"

    # Create password as 'username@accNo**'
    password = f"{username}@{acc_no}**"

    # Save user data in a list
    user_data = [str(acc_no), first_name, last_name, balance, username, password, pin]
    user_file = f"mini_project/users/{acc_no}.txt"
    
    if os.path.exists(user_file):
        print("Account already exists!")
    else:
        with open(user_file, 'w') as f:
            f.write(','.join(user_data))
        print(f"New user added successfully with account number: {acc_no}")




def view_all_users():
    user_dir = "mini_project/users"
    if not os.path.exists(user_dir):
        print("User directory not found!")
        return

    files = os.listdir(user_dir)
    if not files:
        print("No users found.")
        return

    print("\n--- All Users ---")
    for filename in files:
        with open(os.path.join(user_dir, filename), 'r') as f:
            data = f.readline().strip().split(',')
            print(f"Acc No: {data[0]}, Name: {data[1]} {data[2]}, Balance: ₹{data[3]}")





def delete_user():
    acc_no = input("Enter account number to delete: ")
    file_path = f"mini_project/users/{acc_no}.txt"
    if os.path.exists(file_path):
        os.remove(file_path)
        print(f"User with account number {acc_no} deleted successfully.")
    else:
        print("Account not found.")

def update_user():
    acc_no = input("Enter account number to update: ")
    file_path = f"mini_project/users/{acc_no}.txt"

    if not os.path.exists(file_path):
        print("Account not found.")
        return

    with open(file_path, 'r') as f:
        user_data = f.readline().strip().split(',')

    print("\nWhat do you want to update?")
    print("1. First Name")
    print("2. Last Name")
    print("3. Balance")
    print("4. Username")
    print("5. Password")
    print("6. PIN")
    choice = input("Select an option (1-6): ")

    field_map = {
        '1': 1, '2': 2, '3': 3,
        '4': 4, '5': 5, '6': 6
    }

    if choice in field_map:
        new_value = input("Enter new value: ")
        user_data[field_map[choice]] = new_value
        with open(file_path, 'w') as f:
            f.write(','.join(user_data))
        print("User updated successfully.")
    else:
        print("Invalid selection.")







# User login function
def user_login():
    acc_no = input("\nEnter account number: ")
    username = input("Enter username: ")
    password = input("Enter password: ")
    
    user_file = f"mini_project/users/{acc_no}.txt"
    if os.path.exists(user_file):
        with open(user_file, 'r') as f:
            user_data = f.readline().strip().split(',')
            if (username == user_data[4] and 
                password == user_data[5]):
                print("User login successful!")
                return user_data
            else:
                print("Invalid username or password!")
                return None
    else:
        print("Account not found!")
        return None

# Display user menu
def display_user_menu():
    print("\n1. View Account Details")
    print("2. Check Balance")
    print("3. Withdraw")
    print("4. Deposit")
    print("5. Transfer")
    print("6. Change Pin")
    print("7. Exit")
    return input("Select an option (1-7): ")

# View account details
def view_account_details(user_data):
    print("\nAccount Details:")
    print(f"Account Number: {user_data[0]}")
    print(f"First Name: {user_data[1]}")
    print(f"Last Name: {user_data[2]}")
    print(f"Balance: ₹{float(user_data[3]):.2f}")

# Check balance
def check_balance(user_data):
    print(f"\nCurrent Balance: ₹{float(user_data[3]):.2f}")

# Withdraw money
def withdraw(user_data):
    amount = float(input("\nEnter amount to withdraw: ₹"))
    pin = input("Enter PIN: ")
    
    if pin == user_data[6]:
        current_balance = float(user_data[3])
        if amount <= current_balance:
            user_data[3] = str(current_balance - amount)
            update_user_file(user_data)
            print(f"Withdrawal successful! New balance: ₹{float(user_data[3]):.2f}")
        else:
            print("Insufficient funds!")
    else:
        print("Invalid PIN!")

# Deposit money
def deposit(user_data):
    amount = float(input("\nEnter amount to deposit: ₹"))
    pin = input("Enter PIN: ")
    
    if pin == user_data[6]:
        current_balance = float(user_data[3])
        user_data[3] = str(current_balance + amount)
        update_user_file(user_data)
        print(f"Deposit successful! New balance: ₹{float(user_data[3]):.2f}")
    else:
        print("Invalid PIN!")

# Transfer money
def transfer(user_data):
    target_acc = input("\nEnter target account number: ")
    amount = float(input("Enter amount to transfer: ₹"))
    pin = input("Enter PIN: ")
    
    target_file = f"mini_project/users/{target_acc}.txt"
    if pin == user_data[6]:
        if os.path.exists(target_file):
            current_balance = float(user_data[3])
            if amount <= current_balance:
                # Update source account
                user_data[3] = str(current_balance - amount)
                update_user_file(user_data)
                
                # Update target account
                with open(target_file, 'r') as f:
                    target_data = f.readline().strip().split(',')
                target_data[3] = str(float(target_data[3]) + amount)
                update_user_file(target_data, target_acc)
                
                print(f"Transfer successful! New balance: ₹{float(user_data[3]):.2f}")
            else:
                print("Insufficient funds!")
        else:
            print("Target account not found!")
    else:
        print("Invalid PIN!")

# Change PIN
def change_pin(user_data):
    old_pin = input("\nEnter current PIN: ")
    if old_pin == user_data[6]:
        new_pin = input("Enter new PIN: ")
        user_data[6] = new_pin
        update_user_file(user_data)
        print("PIN changed successfully!")
    else:
        print("Invalid PIN!")

# Update user file
def update_user_file(user_data, acc_no=None):
    if acc_no is None:
        acc_no = user_data[0]
    with open(f"mini_project/users/{acc_no}.txt", 'w') as f:  # <-- fix path
        f.write(','.join(user_data))


# Main function
def main():
    while True:
        choice = display_welcome()
        
        if choice == 'a':
            if admin_login():
                admin_menu()

        elif choice == 'b':
            user_data = user_login()
            if user_data:
                while True:
                    option = display_user_menu()
                    
                    if option == '1':
                        view_account_details(user_data)
                    elif option == '2':
                        check_balance(user_data)
                    elif option == '3':
                        withdraw(user_data)
                    elif option == '4':
                        deposit(user_data)
                    elif option == '5':
                        transfer(user_data)
                    elif option == '6':
                        change_pin(user_data)
                    elif option == '7':
                        print("Thank you for using Citibank ATM!")
                        break
                    else:
                        print("Invalid option!")
        else:
            print("Invalid choice!")
        
        if input("\nDo you want to continue (y/n)? ").lower() != 'y':
            break

if __name__ == "__main__":
    main()