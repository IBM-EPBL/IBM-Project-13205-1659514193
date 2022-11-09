from crypt import methods
from flask import Flask,request
from pymongo import MongoClient
from mongopass import mongopass
app = Flask(__name__)


client = MongoClient(mongopass)
db = client.curd
myCollection = db.myColl

@app.route("/signup",methods=["POST"])
def signup():
    name = request.json['user']
    email = request.json['email']
    password = request.json['password']
    myVal = {"name":name,"email":email,"password":password}
    x = myCollection.insert_one(myVal)
    print(x)
    return "sucess"

@app.route("/login")
def login():
    return {1:[1,2,3]}

if __name__ == "__main__":
    app.run(debug=True)