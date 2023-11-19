from flask import Flask 
from flask import render_template, request, redirect, url_for, jsonify
import os
import sys
import string
import json
working_directory = os.getcwd()
sys.path.insert(1, working_directory)

dimensions = [5, 5]
computers = []

duration = 0
import computerData as cd
import computerStation as cs

app = Flask(__name__, '/static') 




row_id = list(string.ascii_uppercase)

#Directories
@app.route("/", methods=["GET", "POST"]) 
def homepage(): 
    return render_template('UI.html')
@app.route("/sendJSONdata", methods=["GET", "POST"])
def send_json():
    jsonFile = jsonify({"length": dimensions[0], "width": dimensions[1]})
    return jsonFile
@app.route("/sendJSONdatatwo", methods=["GET", "POST"])
def send_jsontwo():
    jsonFile = json.dumps({"computers" : computers})
    return jsonFile

@app.route("/getJSONdata", methods=["POST"])
def receive_json():
    if request.form.get("removed"):
        computers.remove(computers[int(request.form.get("removed"))])
    if request.form.get("PCs"):
        computers.append(request.form.get("PCs"))
    print(computers)
    return ""

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

@app.route("/sendJSONdataDuration", methods=["POST"])
def send_json_duration():
    jsonFile = jsonify({"duration": cs.computerStation.getDuration()})
    return jsonFile


def load_pcs():
    pc_list = []

    for index in range(len(computers)):
        pc_list.append(cd.computerData(computers[index]))
    
    return pc_list


#Used Imported Functions
def start_server():
    load_pcs() 
    app.run(debug=True)

if __name__ == "__main__":
    start_server()


