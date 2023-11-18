import userData as ud
import computerData as cd
import computerStation as cs
import time
from frontend import webserver as ws

computerStationsInUse = []
computerList = []
userList = []

def getLongestDuration(computerStationsInUse):
    computerStationsInUse.pop(0)

def reserveComputer(user, computer):

    if len(computerStationsInUse) > 0:
        for station in computerStationsInUse:
            if computer.getComputerID() == station.getComputerData().getComputerID():
                print("Computer in use!")
                return
    computerStation = cs.computerStation(computer, user)
    computerStationsInUse.append(computerStation)

def main():

    computerList = ws.load_pcs()
    
    user1 = input("Please enter your PID: \n")
    user2 = input("Please enter your PID: \n")
    computer1 = input("Which computer would you like to reserve?\n")
    computer2 = input("Which computer would you like to reserve?\n")

    reserveComputer(ud.userData(user1), cd.computerData(computer1))
    reserveComputer(ud.userData(user2), cd.computerData(computer2))

    print(computerStationsInUse[0])

    ws.start_server()

    # time.sleep(10)
    # print(computerStationsInUse[0].getDuration())
    


    # testStation.setUser(testUser.getPID)

    # print(testStation.computerData.computerId)
    # print(testStation.currentUser)
    # print(testStation.startTime)



if __name__ == "__main__":
    main()