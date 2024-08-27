def bank_system():
    print("")
    print("Hello welcome to Bank of georgia.")
    print("")
    print("Type 1 to create an account,")
    print("")
    print("Type 2 to deposit,")
    print("")
    print("Type 3 to withdraw,")
    print("")
    print("Type 4 to exit")
    print("")
    user_type = int(input("Type the number you want: "))
    if user_type == 1:
        print("Hello, to create an account firstly we need your firstname")
        firstname = input("Firstname: ")
        print(f"Hello {firstname}, now we need your lastname")
        lastname = input("Lastname: ")
        print(f"Thanks {firstname} {lastname} for the information. to complete creating an account we need you phone number")
        phone_num = input("Phone number: ")
        print("Thanks, now wich card would you like: Plus or Scoolcard?")
        which_credit_card = input("Enter wich credit card you would like: ")
        if which_credit_card == "Plus":
            print("Okay your new card Plus and account is ready!")
        elif which_credit_card == "Scoolcard":
            print("Okay! your new card scoolcard and account is ready!")
        else:
            print("Your new account is ready with credit cards!")
    elif user_type == 2:
        print("How much would you like to deposit, and to who?")
        how_much = int(input("How much: "))
        to_who = input("To who: ")
        print(f"Sending {how_much} to {to_who}...")
        print("")
        print("Sent!")
    elif user_type == 3:
        print("How much would you like to withdrawl from your account?: ")
        how_much_withdrawl = int(input("How much: "))
        print(f"Withdrawing {how_much_withdrawl} from account...")
        print("")
        print("Withdrawed!")
    else:
        print("Break.")

bank_system()