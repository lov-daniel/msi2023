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


def main():

    computerList = ws.load_pcs()

    testUser = ud.userData("A12345678")
    testComputer = cd.computerData("A1")
    # testStation = cs.computerStation(testComputer, testUser)
    
    # All computers and users saved
    computerList.append(testComputer)
    userList.append(testUser)

    # if user wants to use computer:
    testStation = cs.computerStation(testComputer, testUser)
    computerStationsInUse.append(testStation)
    print("hello")

    ws.start_server()

    # time.sleep(10)
    # print(computerStationsInUse[0].getDuration())
    


    # testStation.setUser(testUser.getPID)

    # print(testStation.computerData.computerId)
    # print(testStation.currentUser)
    # print(testStation.startTime)



if __name__ == "__main__":
    main()