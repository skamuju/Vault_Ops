from flask import Flask, jsonify, request
from pymongo import MongoClient

from backend.ASIN import tech_dict, information_amazon

app = Flask(__name__)

@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    client = MongoClient("mongodb+srv://s_kamuju:teamfreeze@ssf-kdqtj.mongodb.net/test?retryWrites=true&w=majority")
    db = client.test
    db = client['Vault_Ops']
    collection = db['users']
    post = {'username': data["username"], 'email': data["email"],
            'password': data["password"], 'devices': []}

    collection.insert_one(post)
    return jsonify({ "success": True })

@app.route('/device', methods=['POST'])
def device():
    data = request.get_json()
    client = MongoClient("mongodb+srv://s_kamuju:teamfreeze@ssf-kdqtj.mongodb.net/test?retryWrites=true&w=majority")
    db = client.test
    db = client['Vault_Ops']
    collection = db['user_products']
    ASIN = tech_dict[data["name"]]
    url = "http://www.amazon.com/dp/"  + ASIN
    tech_info = information_amazon(url)
    post = {'name': tech_info["name"], 'availability': tech_info["availability"], 'price': tech_info['price']}

    collection.insert_one(post)
    return jsonify({ "success": True })

app.run()