import os

plist=[]  #products

while True:
    os.system('cls' if os.name == 'nt' else 'clear')

    print("1.View")
    print("2.Add")
    print("3.delete")
    print("4.update")
    print("5.count")
    print("6.exit")
    c = input("enter choice: ")

    if c=='1':
        os.system('cls' if os.name == 'nt' else 'clear')
        if plist:
            print("products list: ")
            for i, p in enumerate(plist,start=1):
                print(f"{i}.{p}")
        else:
            print("no products available")

        input("\n press enter to continue.")


    elif c=='2':
        os.system('cls' if os.name == 'nt' else 'clear')
        pname=input("enter new product name: ")
        plist.append(pname)
        print(f"'{pname}' added successfully!")

        input("\n press enter to continue.")

    
    elif c=='3':
        os.system('cls' if os.name == 'nt' else 'clear')
        if plist:
            for i, p in enumerate(plist,start=1):
                print(f"{i}.{p}")
            try:
                index = int(input("enter pno to delete: ")) -1
                if 0<=index <len(plist):
                    deleted=plist.pop(index)
                    print(f"'{deleted}' deleted succesfully!")
                else:
                    print("invalid!")
            except ValueError:
                print("invalid!")
        else:
            print("no products available.")            

        input("\n press enter to continue.")


    elif c=='4':
        os.system('cls' if os.name == 'nt' else 'clear')
        if plist:
            for i, p in enumerate(plist,start=1):
                print(f"{i}.{p}")
            try:
                index = int(input("enter pno to update: ")) -1
                if 0<=index <len(plist):
                    newName=input("enter new name: ")
                    plist[index]=newName
                    print(f"'{newName}' updated succesfully!")
                else:
                    print("invalid!")
            except ValueError:
                print("invalid!")
        else:
            print("no products available.")            

        input("\n press enter to continue.")



    elif c=='5':
        os.system('cls' if os.name == 'nt' else 'clear')
        print(f"total products: {len(plist)}")         

        input("\n press enter to continue.")

    elif c=='6':
        os.system('cls' if os.name == 'nt' else 'clear')
        print("exit program, bye!")
        break         

    else:
        print("invalid choice try again")

        input("\n press enter to continue.")
    
