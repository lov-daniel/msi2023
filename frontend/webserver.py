from flask import Flask 
from flask import render_template, request
import os
import sys
import string

working_directory = os.getcwd()
sys.path.insert(1, working_directory)

computers = []

import computerData as cd

app = Flask(__name__, '/static') 

row_id = list(string.ascii_uppercase)
pc_count = 10
row_length = 5

#Directories
@app.route("/", methods=["GET", "POST"]) 
def homepage(): 

    request.UI

    return render_template('UI.html')

def load_pcs():
    pc_list = []

    for row in range(row_length):
        for pc in range(pc_count):
            pc_list.append(cd.computerData(f"{row_id[row]}{pc}"))
    
    return pc_list


#Used Imported Functions
def start_server():
    load_pcs()
    app.run(debug=True)

start_server()


