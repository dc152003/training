empDetails ={
    101:{"ename":"dc","esal":4000},
    102:{"ename":"sunni","esal":4500},
    103:{"ename":"chhavi","esal":5000},
    104:{"ename":"divya","esal":4200}
}

def printEmp(eno):
    if eno in empDetails:
        details=empDetails[eno]
        print(f"emp no: {eno}")
        print(f"emp name: {details['ename']}")
        print(f"emp salary: {details['esal']}")
    else:
        print("emp not found")

einput = int(input("enter emp no: "))
printEmp(einput)