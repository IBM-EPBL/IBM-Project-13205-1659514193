from crypt import methods
from flask import Flask,request,jsonify
from pymongo import MongoClient
from mongopass import mongopass
from bson.objectid import ObjectId
import pickle
import numpy as np
import random
import warnings


app = Flask(__name__)

warnings.filterwarnings('ignore')

scaler_path = "./scale.pkl"
model_path = "./rainfall.pkl"
encoder_path = "./encoder.pkl"
data_path = "./data.pkl"

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
    return jsonify({"message":"User Created Successfully"})

@app.route("/login",methods=["POST"])
def login():
    x = list(myCollection.find({"email":request.json['email'],"password":request.json['password']}))
    
    for i in x:
        i["_id"]=str(i["_id"])
    d = x[0]
    return jsonify(d)

@app.route("/get",methods=["GET"])
def get():
    return jsonify({"he":"wo"})

def make_prediction(test_data):
  scaler_custom_loaded = pickle.load(open(scaler_path,'rb'))
  model_custom_loaded = pickle.load(open(model_path,'rb'))
  x_test_data = np.array(test_data).reshape(1,-1)
  x_test_data = scaler_custom_loaded.transform(x_test_data)
  prediction = model_custom_loaded.predict(x_test_data.reshape(1,-1))[0]
  if prediction == 1:
    st = "Rainy day"
  else:
    st = "Sunny day"
  return st

def data_preprocessing(test_data_location):
  lencoders = pickle.load(open(encoder_path,'rb'))
  features = pickle.load(open(data_path,'rb'))
  location = lencoders['Location'].transform([test_data_location])[0]
  Data = features[features['Location']==location]
  x_test_data_series = Data.iloc[random.randint(0,len(Data))]
  return x_test_data_series

def prediction(location):
  preprocessed_data = data_preprocessing(location)
  p = make_prediction(preprocessed_data)
  return p

@app.route("/locate",methods=["POST"])
def locate():
    location = request.json['location']
    x = prediction(location)
    return jsonify({"result":x})


if __name__ == "__main__":
    app.run(debug=True)