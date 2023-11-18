import userData as ud
import computerData as cd
import computerStation as cs

def main():

    testUser = ud.userData("A12345678")
    testComputer = cd.computerData("A1")
    testStation = cs.computerStation(testComputer, testUser)

    print(testStation.computerData.computerId)
    print(testStation.userData.PID)

if __name__ == "__main__":
    main()