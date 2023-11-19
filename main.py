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
                return
        
    computerStation = cs.computerStation(cd.computerData(computer), ud.userData(user))
    computerStationsInUse.append(computerStation)

def main():

    computerList = ws.load_pcs()

    userID = input("Please enter your PID : \n")
    reserveComputer(userID, ws.reservePC())

    ws.start_server()



if __name__ == "__main__":
    main()