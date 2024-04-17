from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy import MetaData

metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})

db = SQLAlchemy(metadata=metadata)
class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer(), primary_key=True)
    products=db.relationship('Product', back_populates="user")

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
    user_id=db.Column(db.Integer(), db.ForeignKey('users.id'))
    user=db.relationship('User', back_populates="products")

    
    @validates('name')
    def validate_name(self,key,name):
        if not name:
            raise validates.ValidationError("Name cannot be empty")
        existing_name=Product.query.filter(Product.name==name).first()
        if existing_name and existing_name.id!=self.id:
            raise validates.ValidationError("Name already exists")
        
        return name

    # class UserProducts(db.Models,SerializerMixin):
    #     id = db.Column(db.Integer, primary_key=True)
    #     user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    #     product_id = db.Column(db.Integer, db.ForeignKey('products.id'))
    #     user=db.relationship('User', back_populates="")