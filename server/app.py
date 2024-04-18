from flask import Flask,request,make_response
from models import db, Branch
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
    return "<h1>Welcome to group C api</h1>"

class Branch(Resource):
    def get(self):
        response_dict_list = [branch.to_dict for branch in Branch.query.all()]

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

api.add_resource(Branch, '/branches')


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




if __name__ == '__main__':
    app.run(port=5555, debug=True)