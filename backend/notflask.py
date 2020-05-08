from flask import Flask, jsonify, request
from pymongo import MongoClient
from backend.ASIN import tech_dict, information_amazon

app = Flask(__name__)


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


@app.route('/addDevice', methods=['POST'])
def device():
    data = request.get_json()
    client = MongoClient("mongodb+srv://s_kamuju:teamfreeze@ssf-kdqtj.mongodb.net/test?retryWrites=true&w=majority")
    db = client['Vault_Ops']
    collection = db['user_products']
    ASIN = tech_dict[data["name"]]
    url = "http://www.amazon.com/dp/" + ASIN
    tech_info,tech_features = information_amazon(url)
    post = {'name': tech_info[0], 'availability': tech_info[1], 'price': tech_info[2]}

    collection.insert_one(post)
    return jsonify({"success": True})

app.run()
