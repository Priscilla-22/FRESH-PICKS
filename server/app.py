from flask import Flask,request,make_response,jsonify,session
from models import db,Product,Cart, Branch, Customer
from flask_migrate import Migrate
from flask_restful import Api,Resource
from flask_cors import CORS
import os

app=Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI']= 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
secret_key=b'\xdbL\xcfMV\xac\x884\xd9\xfe1\xcd\xda\xef\xeaW'
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
        data = request.get_json()
        # user_id = session.get('user_id')
        # if not user_id:
        #     return jsonify({"message": "Please login to continue"}), 401
        
        new_product = Product(
            name=data.get('name'),
            price=data.get('price'),
            description=data.get('description'),
            reviews=data.get('reviews'),
            category=data.get('category'),
            image=data.get('image'),
              # Assign user_id from session
        )
        db.session.add(new_product)
        db.session.commit()
        return jsonify({"message": "Product added successfully"}), 201
        
class ProductsId(Resource):
    def get(self,id):
        product=Product.query.filter_by(id=id).first()
        response= make_response(
            jsonify(product.to_dict()),
            200
        )
        return response
    def patch(self, id):

        review = Product.query.filter_by(id=id).first()
        for attr in request.form:
            setattr(review, attr, request.form[attr])

        db.session.add(review)
        db.session.commit()

        response_dict = review.to_dict()

        response = make_response(
            response_dict,
            200
        )

        return response
class Carts(Resource):
    def get(self): 
        cart_items=[item.to_dict() for item in Cart.query.all()]
        if cart_items:
            
            return jsonify(cart_items)
        else:
            return jsonify({}), 404

    def post(self):
        data = request.get_json()
        cart_item = Cart(
            product_id=data.get('product_id'),
            name=data.get('name'),
            price=data.get('price'),
            image=data.get('image'),
            # customer_id=session.get('user_id')
        )
        db.session.add(cart_item)
        db.session.commit()
        
        return jsonify({"message": "Cart added successfully"}), 201
        
class CartsId(Resource):
    def delete(self, id):
        print(id)  
        item = Cart.query.filter_by(id=id).first()
        if item:
            db.session.delete(item)
            db.session.commit()
            return jsonify({"message": "Item deleted successfully"}), 200
        else:
            return jsonify({"message": "Item not found"}), 404

            
        
    
api.add_resource(Products,'/products', endpoint="/products")
api.add_resource(ProductsId,'/products/<int:id>',endpoint="/products/<int:id>")
api.add_resource(Carts,'/cart',endpoint="/cart")
api.add_resource(CartsId,'/cart/<int:id>',endpoint="/cart/<int:id>")

class Branches(Resource):
    def get(self):
        response_dict_list = [branch.to_dict() for branch in Branch.query.all()]

        response = make_response(response_dict_list, 200)
        return response
    
    def post(self):
        new_branch = Branch(
            name = request.form['name'],
            location = request.form['location']
        )

        db.session.add(new_branch)
        db.session.commit()

        response_dict = new_branch.to_dict()
        response = make_response(response_dict, 201)

        return response

api.add_resource(Branches, '/branches')


class BranchByID(Resource):
    def get(self, id):
        response_dict = Branch.query.filter(Branch.id == id).first().to_dict()

        response = make_response(response_dict, 200)
        return response
    
    def patch(self, id):
        branch = Branch.query.filter(Branch.id == id).first()

        for attr in request.form:
            setattr(branch, attr, request.form[attr])

        db.session.add(branch)
        db.session.commit()

        response = make_response(branch.to_dict, 200)
        return response
    
    def delete(self, id):
        branch = Branch.query.filter(Branch.id == id).first()

        db.session.delete(branch)
        db.session.commit()

        response = make_response(
            {"message": f"Branch {id} was closed"},
            200
        )
        return response
    
api.add_resource(BranchByID, '/branches/<int:id>')


class CustomerResource(Resource):
    def get(self, id=None):
        if id:
            customer = Customer.query.get(id)
            if not customer:
                return {'error': 'Customer not found'}, 404
            return make_response(customer.to_dict(), 200)
        else:
            customers = Customer.query.all()
            if not customers:
                return {'error': 'There are no customers to display.'}, 404
            return make_response([c.to_dict() for c in customers]), 200
        
    def post(self):
        data = request.get_json()
        new_customer = Customer(
            username = data['username'],
            email = data['email']
        )

        db.session.add(new_customer)
        db.session.commit()
        return {'success': 'Customer created successfully.'}, 201

    def patch(self, id):
        customer = Customer.query.filter_by(id=id).first()
        if not customer:
            return {'error': 'Customer not found.'}, 404
        data = request.json
        for key, value in data.items():
            setattr(customer, key, value)
        db.session.commit()
        return {'success': 'Customer updated sucessfully.'}, 200    
    
    def delete(self, id):
        customer = Customer.query.get(id)
        if not customer:
            return {'error':'Customer not found.'}, 404
        db.session.delete(customer)
        db.session.commit()
        return {'success': 'Customer deleted successfully.'}, 204
    
api.add_resource(Customer, '/customers', '/customers/<int:id>')




if __name__ == '__main__':
    app.run(port=5555, debug=True)