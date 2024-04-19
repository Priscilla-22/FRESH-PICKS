from flask import Flask,request,make_response
from models import db
from flask_migrate import Migrate
from flask_cors import CORS
from flask_restful import Api,Resource
from flask_cors import CORS
import os

app=Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI']= 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
secret_key=b'\xdbL\xcfMV\xac\x884\xd9\xfe1\xcd\xda\xef\xeaW'
api=Api(app)

CORS(app)
migrate=Migrate(app,db)

db.init_app(app)


@app.route('/')
def home():
    return "<h1>Welcome to group C api</h1>"

if __name__ == '__main__':
    app.run(port=5555, debug=True)