from flask import Flask 
from flask import render_template, request, redirect, url_for, jsonify
import os
import sys
import string

working_directory = os.getcwd()
sys.path.insert(1, working_directory)

dimensions = [5, 5]
computers = []

import computerData as cd


app = Flask(__name__, '/static') 

def receiveData(data):
    return data

row_id = list(string.ascii_uppercase)
pc_count = 10
row_length = 5

#Directories
@app.route("/", methods=["GET", "POST"]) 
def homepage(): 
    return render_template('UI.html')
    
@app.route("/sendJSONdata", methods=["GET", "POST"])
def send_json():
    jsonFile = jsonify({"length": dimensions[0], "width": dimensions[1]})
    return jsonFile

@app.route("/getJSONdata", methods=["POST"])
def receive_json():
    data = request.args.get("PCs", "No computers found.")
    print(data)

@app.route('/login', methods=["GET", "POST"])
def login():
    error = None
    if request.method == "POST":
        if request.form.get("username") != "admin" or request.form.get("password") != "admin":
            error = "invalid credentials"
            return render_template('login.html', error=error)
        else:
            return(redirect(url_for('admin')))
    return render_template('login.html')
                   
@app.route("/admin", methods=["GET", "POST"])
def admin():
    if request.method == "POST":
        if request.form["length"] != 0 and request.form["width"]:
            dimensions[0] = request.form.get("length", 5)
            dimensions[1] = request.form.get("width", 5)
    return render_template("admin.html")


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


