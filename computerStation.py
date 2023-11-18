import userData
import computerData
import computerStation
import datetime


class computerStation:
    def __init__(self, computerData, currentUser):
        self.computerData = computerData
        self.currentUser = ""
        self.startTime = datetime.datetime.now()
    
    def setUser(self, currentUser):
        self.currentUser = currentUser

    