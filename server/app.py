from flask import Flask,request,make_response
from models import db
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

if __name__ == '__main__':
    app.run(port=5555, debug=True)