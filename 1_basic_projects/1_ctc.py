# You need to calculate the CTC for a user
# ask user below details
# 	a. City
# 	b. Gender
# 	c. experienced ? Yes / No ?
# 	d. Stream (MSCIT / BSCIT / Engg ) 

# 	below are the salary calculation requirement

# 	a. Basic salary for 
# 		BSCIT - 4000
# 		MSCIT - 6000
# 		Engg  - 8000
# 	every user gets every month, 
# 		600 as Travel Allowance
# 		2000 as PF (deducted)
# 		1200 as Food Coupn 

# 	everyone gets CityAllowance as below
# 		Mumbai - 10% on basic
# 		Pune - 8% on basic 
# 		Gurgaon - 6% on basic
# 	tax is deducted as below
# 		12% for male, 8% for female
# 	display the CTC and monthly salary in hand for the user

print(' city? ') 
c =input()
print('gender? ')
g=input()
print('experienced ? Yes / No - ')
e=input()
print('Stream (MSCIT / BSCIT / Engg ) ')
s=input()

bs=0,ca=0
ta=600      #Travel Allowance
fc=1200     #food cupon
pf=2000 #providend fund

if s=='MSCIT':
    bs=6000                 #basic salary
elif s=='BSCIT':
    bs=4000
elif s=='ENGG':
    bs=8000
else:
    print('invalid stream')
    exit()



if c=='mumbai':
    ca=bs*0.10              #City Allowance
elif c=='pune':
    ca=bs*0.08
elif c=='ggn':
    ca=bs*0.06
else:
    print("invalid city")
    exit()



if g == 'm':
    tax=(bs+ca)*0.12
elif g=='f':
    tax=(bs+ca)*0.08
else:
    print("invalid gender")
    exit()


ctc = (bs+ca+ta+fc)*12          #cost of company

monthinhand = bs+ca+ta+fc-pf-tax   

print("\n ---salary details----")
print(f"CTC (annual): {ctc:.2f}")
print(f"monthly in hand salary: {monthinhand:.2f}")



