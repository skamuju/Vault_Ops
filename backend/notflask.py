from flask import Flask, jsonify, request
from pymongo import MongoClient
app = Flask(__name__)

@app.route('/', methods=['GET'])
def hello():
    return "hello world!"


@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    client = MongoClient("mongodb+srv://s_kamuju:teamfreeze@ssf-kdqtj.mongodb.net/test?retryWrites=true&w=majority")
    db = client['Vault_Ops']
    collection = db['user_products']

    post = {'username': data["username"], 'email': data["email"],
            'password': data["password"], 'devices': []}

    collection.insert_one(post)
    return jsonify({"success": True})

@app.route('/addProduct', methods=['POST'])
def addProduct():
    data = request.get_json()
    client = MongoClient("mongodb+srv://s_kamuju:teamfreeze@ssf-kdqtj.mongodb.net/test?retryWrites=true&w=majority")
    db = client['Vault_Ops']
    collection = db['user_products']

    post = {'product name': data['product name'], 'lifespan':data['product lifespan']}

    collection.insert_one(post)
    return jsonify({"success": True})

app.run()

