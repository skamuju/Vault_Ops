from flask import Flask, jsonify, request
from pymongo import MongoClient
app = Flask(__name__)


@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    client = MongoClient("mongodb+srv://s_kamuju:teamfreeze@ssf-kdqtj.mongodb.net/test?retryWrites=true&w=majority")
    db = client['Vault_Ops']
    collection = db['users']

    post = {'username': data["username"], 'email': data["email"],
            'password': data["password"], 'devices': []}

    collection.insert_one(post)
    return jsonify({"success": True})

#@app.route('/login', methods=['POST'])
#def login():
    #data = request.get_json()
    #client = MongoClient("mongodb+srv://s_kamuju:teamfreeze@ssf-kdqtj.mongodb.net/test?retryWrites=true&w=majority")
    #db = client['Vault_Ops']
    #collection = db['users']
    #post = {'username': data["username"],'password': data["password"]}
    #return jsonify({"post": db.collection['users']}) #Experimenting

    #if db.collection.find({post["password": data['password']]}): #Problem is here I think you are searching the wrong database? Not sure
        #return jsonify({"success": True})
    #else:
        #return jsonify({"complete failure, put the right password in bruh": True})

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

#@app.route('/countdb', methods=['GET'])
#def countdb():
    #client = MongoClient("mongodb+srv://s_kamuju:teamfreeze@ssf-kdqtj.mongodb.net/test?retryWrites=true&w=majority")
    #db = client['Vault_Ops']
    #collection = db['user_products']
    #return str(collection.count())

app.run()


  
