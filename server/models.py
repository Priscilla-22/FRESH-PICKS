from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy import MetaData

metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})

db = SQLAlchemy(metadata=metadata)

class Branch(db.Model, SerializerMixin):
    __tablename__ = 'branches'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    location = db.Column(db.String, nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())

    @validates('name')
    def validate_name(self, key, name):
        ex_branch = Branch.query.filter(Branch.name == name).first()
        if ex_branch:
            raise NameError("Name already exists")
        return name
    @validates('location')
    def validate_location(self, key, location):
        ex_location = Branch.query.filter(Branch.location == location).first()
        if ex_location:
            raise NameError("Location already exists")
        return location

    def __repr__(self):
        return f'Branch {self.id}, {self.name}, {self.location}, {self.created_at}'