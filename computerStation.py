import userData
import computerData
import computerStation
import datetime


class computerStation:
    def __init__(self, computerData, currentUser):
        self.computerData = computerData
        self.currentUser = currentUser
        self.startTime = datetime.datetime.now()


    # def __del__(self):


    def setUser(self, currentUser):
        self.currentUser = currentUser

    def getComputerData(self):
        return self.computerData 

    def getDuration(self):
        return datetime.datetime.now() - self.startTime
    
    