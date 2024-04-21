
from config import db,bcrypt
from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy import MetaData
from sqlalchemy import Column, Integer, Float
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base
import datetime
Base = declarative_base()



class Customer(db.Model, SerializerMixin):
    __tablename__ = 'customers'
    serialize_only = ('id', 'username', 'email', 'password', 'created_at', 'updated_at')
    serialize_rules = ()

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, nullable=False)
    email = db.Column(db.String, unique=True, nullable=True)
    _password = db.Column(db.String, nullable=False)
   
    created_at = db.Column(db.DateTime(), server_default=db.func.now())
    updated_at = db.Column(db.DateTime(), onupdate=db.func.now())
    products = db.relationship('Product', back_populates="customers")

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'password': self.password,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            'products': [p.to_dict() for p in self.products]
        }
        
    @validates('password_confirmation')
    def validate_password_confirmation(self,key,password_confirmation):
        if password_confirmation!= self.password:
            raise validates.ValidationError("Passwords do not match")
        return password_confirmation
    
    @validates('email')
    def validate_email(self,key,email):
        if not email:
            raise validates.ValidationError("Email cannot be empty")
        existing_email=Customer.query.filter(Customer.email==email).first()
        if existing_email and existing_email.id!=self.id:
            raise validates.ValidationError("Email already exists")
    @property
    def password(self):
        return self._password
    @password.setter
    def password(self, plain_password_text):
        self._password = bcrypt.generate_password_hash(plain_password_text).decode('utf-8')    
    def check_password(self, attempted_password):
        return bcrypt.check_password_hash(self.password, attempted_password)
    
    def __repr__(self):
        return f'<Customer {self.username} created.>'

    

class Product(db.Model, SerializerMixin):
    __tablename__ = 'products'
    serialize_only=('id', 'name', 'price', 'description', 'reviews', 'category', 'image')
    serialize_rules=()
    id=db.Column(db.Integer(), primary_key=True)
    name=db.Column(db.String(100))
    price=db.Column(db.Integer())
    description=db.Column(db.String(1000))
    reviews=db.Column(db.String(1000))
    category=db.Column(db.String(100))
    image=db.Column(db.String(1000))
    customer_id=db.Column(db.Integer(), db.ForeignKey('customers.id'))
    customers=db.relationship('Customer', back_populates="products")


    
    @validates('name')
    def validate_name(self,key,name):
        if not name:
            raise validates.ValidationError("Name cannot be empty")
        existing_name=Product.query.filter(Product.name==name).first()
        if existing_name and existing_name.id!=self.id:
            raise validates.ValidationError("Name already exists")
        
        return name
    
class Cart(db.Model,SerializerMixin):
    serialize_only =("id","name","price", "image", "total", "customer_id")
    serialize_rules=()
    id=db.Column(db.Integer(),primary_key=True)
    name=db.Column(db.String())
    price=db.Column(db.Integer())
    image=db.Column(db.String())
    total=db.Column(db.Integer(), default=0)
    customer_id=db.Column(db.Integer(),db.ForeignKey('customers.id'))
    product_id=db.Column(db.Integer(),db.ForeignKey('products.id'))
    

class Branch(db.Model, SerializerMixin):
    __tablename__ = "branches"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    location = db.Column(db.String, nullable=False)
    image = db.Column(db.String, nullable=True)
    created_at = db.Column(db.DateTime, server_default=db.func.now())

    @validates("name")
    def validate_name(self, key, name):
        ex_branch = Branch.query.filter(Branch.name == name).first()
        if ex_branch:
            raise NameError("Name already exists")
        return name

    @validates("location")
    def validate_location(self, key, location):
        ex_location = Branch.query.filter(Branch.location == location).first()
        if ex_location:
            raise NameError("Location already exists")
        return location

    def __repr__(self):
        return f"Branch {self.id}, {self.name}, {self.location}, {self.created_at}"           
    