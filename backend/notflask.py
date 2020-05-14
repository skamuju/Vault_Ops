from flask import Flask, jsonify, request
from pymongo import MongoClient, operations
app = Flask(__name__)



@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    client = MongoClient("mongodb+srv://s_kamuju:teamfreeze@ssf-kdqtj.mongodb.net/test?retryWrites=true&w=majority")
    db = client['Vault_Ops']
    collection = db['users']

    post = {'username': data["username"], 'email': data["email"],
            'password': data["password"], 'devices': [], "traffic": 1}

    collection.insert_one(post)
    return jsonify({"success": True})

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    client = MongoClient("mongodb+srv://s_kamuju:teamfreeze@ssf-kdqtj.mongodb.net/test?retryWrites=true&w=majority")
    db = client['Vault_Ops']
    collection = db['users']
    post = {'username': data["username"],'password': data["password"]}
    if collection.find_one(post): 
        return jsonify({"success": True})
        collection.update_one({"traffic": 1}, {set: {"traffic": 2}})
    else:
        return jsonify({"success": False})

@app.route('/addProduct', methods=['POST'])
def addProduct():
    data = request.get_json()
    client = MongoClient("mongodb+srv://s_kamuju:teamfreeze@ssf-kdqtj.mongodb.net/test?retryWrites=true&w=majority")
    db = client['Vault_Ops']
    collection = db['user_products']
    post = {'name': data['name'], 'lifespan':data['lifespan']}
    collection.insert_one(post)
    return jsonify({"success": True})

@app.route('/getProduct', methods=['GET'])
def getProduct():
    client = MongoClient("mongodb+srv://s_kamuju:teamfreeze@ssf-kdqtj.mongodb.net/test?retryWrites=true&w=majority")
    db = client['Vault_Ops']
    collection = db['user_products']
    items = []
    for doc in collection.find({}):
            del doc["_id"]
            items.append(doc)
    items.reverse()
    return jsonify({ "data": items})

@app.route('/productAge', methods=['GET'])
def productAge():
    client = MongoClient("mongodb+srv://s_kamuju:teamfreeze@ssf-kdqtj.mongodb.net/test?retryWrites=true&w=majority")
    db = client['Vault_Ops']
    collection = db['user_products']
    items = []
    for x in collection.find({},{'lifespan': 2 }):
        del x['_id']
        items.append(x)
    return jsonify({"products": items}) 

#@app.route('/countdb', methods=['GET'])
#def countdb():
    #client = MongoClient("mongodb+srv://s_kamuju:teamfreeze@ssf-kdqtj.mongodb.net/test?retryWrites=true&w=majority")
    #db = client['Vault_Ops']
    #collection = db['user_products']
    #return str(collection.count())

app.run(host="0.0.0.0")


  
