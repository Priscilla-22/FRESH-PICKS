from flask import Flask, jsonify,request,make_response
from models import Customer, db
from flask_migrate import Migrate
from flask_restful import Api,Resource
import os

app=Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']= 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

api=Api(app)

migrate=Migrate(app,db)

db.init_app(app)


@app.route('/')
def home():
    return "<h1>FRESH PICKS API</h1>"

class CustomerResource(Resource):

    def get(self, id):
        if id:
            customer = Customer.query.get(id)
            if not customer:
                return {'error': 'Customer not found.'}, 404
            return customer.to_dict(), 200
        else:
            customers = Customer.query.all()
            if not customers:
                return {'error': 'There are no customers to display.'}, 400
            return customers.to_dict(), 200

    def post(self):
        data = request.json
        required = ['username', 'email']
        if not all(field in data for field in required):
            return {'error': 'Missing username or email.'}, 400
        
        username = data['username']
        email = data['email']

        customer = Customer(username=username, email=email)

        db.session.add(customer)
        db.session.commit()

        return {'Customer created successfully.'}, 201

    def update(self, id):
        customer = Customer.get(id)
        pass

    def delete(self, id):
        customer = Customer.query.get(id)
        if not customer:
            return {'error':'Customer not found'}, 404
        db.session.delete(customer)
        db.session.commit()

        return {'Customer deleted successfully.'}, 204

api.add_resource(CustomerResource, '/customers', '/customers/<int:id>')    

if __name__ == '__main__':
    app.run(port=5555, debug=True)