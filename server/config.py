from flask_bcrypt import Bcrypt
from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from flask_migrate import Migrate
import os
from datetime import datetime
metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})
BASE_DIR = os.path.abspath(os.path.dirname(__file__))

db = SQLAlchemy(metadata=metadata)

app = Flask(__name__)
CORS(app)
app.secret_key = b'\xdbL\xcfMV\xac\x884\xd9\xfe1\xcd\xda\xef\xeaW'

bcrypt = Bcrypt(app)

app.config['SQLALCHEMY_DATABASE_URI'] =os.environ.get('DATABASE_URL')
# postgres://fresh_picks_user:eJEA14psatSb6g8FIzTiS0cGlOOhZbpC@dpg-cojpe9ocmk4c73c0f6r0-a.oregon-postgres.render.com/fresh_picks
print("Database URI:", app.config['SQLALCHEMY_DATABASE_URI'])
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

migrate = Migrate(app, db)

db.init_app(app)
