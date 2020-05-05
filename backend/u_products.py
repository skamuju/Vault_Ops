from pymongo import MongoClient

from backend.ASIN import tech_features, tech_info

client = MongoClient("mongodb+srv://s_kamuju:teamfreeze@ssf-kdqtj.mongodb.net/test?retryWrites=true&w=majority")
db = client.test
db = client['Vault_Ops']
collection = db['user_products']

information = {'name': tech_info[0], 'information': tech_features}
tech = {'name': tech_info[0], 'availability': tech_info[1], 'price': tech_info[2]}


collection.insert_one(tech)
