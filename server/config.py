from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_migrate import Migrate
from flask_cors import CORS
import os

db = SQLAlchemy()
bcrypt = Bcrypt()
migrate = Migrate()


def create_app():
    app = Flask(__name__, static_url_path='',
    static_folder='../client/build',
    template_folder='../client/build'
)
    CORS(app)
    app.secret_key = b"\xdbL\xcfMV\xac\x884\xd9\xfe1\xcd\xda\xef\xeaW"

    # Set a default database URI
    app.config["SQLALCHEMY_DATABASE_URI"] = os.environ.get("DATABASE_URL")
    print("Database URI:", app.config["SQLALCHEMY_DATABASE_URI"])
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    db.init_app(app)
    bcrypt.init_app(app)
    migrate.init_app(app, db)

    return app
