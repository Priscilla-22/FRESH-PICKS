from flask import Flask,request,make_response,jsonify,session
from models import db,Product
from flask_migrate import Migrate
from flask_restful import Api,Resource
from flask_cors import CORS
import os

app=Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI']= 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
api=Api(app)
migrate=Migrate(app,db)

db.init_app(app)



@app.route('/')
def home():
    return "<h1>Welcome to group C api</h1>"

class Products(Resource):
    def get(self):
        product=[products.to_dict() for products in Product.query.all()]
        response= make_response(
            jsonify(product),
            200
        )
        return response
    def post(self):
        data=request.get_json()
        if not session['user_id']:
            return jsonify({"message":"Please login to continue"}),401
        
        new_product=Product(
            name=data.get['name'],
            price=data.get['price'],
            description=data.get['description'],
            reviews=data.get['reviews'],
            category=data.get['category'],
            image=data.get['image'],
            user_id=data.get['user_id']
            )
        db.session.add(new_product)
        db.session.commit()
    
api.add_resource(Products,'/products', endpoint="/products")

if __name__ == '__main__':
    app.run(port=5555, debug=True)