import userData as ud
import computerData as cd
import computerStation as cs

computerStationsInUse = []

def main():

    testUser = ud.userData("A12345678")
    testComputer = cd.computerData("A1")
    testStation = cs.computerStation(testComputer, testUser)
    testStation.setUser(testUser.getPID)

    print(testStation.computerData.computerId)
    print(testStation.currentUser)
    print(testStation.startTime)

if __name__ == "__main__":
    main()