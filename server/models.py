from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy import MetaData

metadata = MetaData(
    naming_convention={
        "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
    }
)

db = SQLAlchemy(metadata=metadata)


class Customer(db.Model, SerializerMixin):
    __tablename__ = "customers"

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, nullable=False)
    email = db.Column(db.String, unique=True, nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())
    products = db.relationship("Product", back_populates="customers")

    def to_dict(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
        }

    def __repr__(self):
        return f"<Customer {self.username} created.>"


class Product(db.Model, SerializerMixin):
    __tablename__ = "products"
    serialize_only = (
        "id",
        "name",
        "price",
        "description",
        "reviews",
        "category",
        "image",
    )
    serialize_rules = ()
    id = db.Column(db.Integer(), primary_key=True)
    name = db.Column(db.String(100))
    price = db.Column(db.Integer())
    description = db.Column(db.String(1000))
    reviews = db.Column(db.String(1000))
    category = db.Column(db.String(100))
    image = db.Column(db.String(1000))
    customer_id = db.Column(db.Integer(), db.ForeignKey("customers.id"))
    customers = db.relationship("Customer", back_populates="products")

    @validates("name")
    def validate_name(self, key, name):
        if not name:
            raise validates.ValidationError("Name cannot be empty")
        existing_name = Product.query.filter(Product.name == name).first()
        if existing_name and existing_name.id != self.id:
            raise validates.ValidationError("Name already exists")
        return name


class Cart(db.Model, SerializerMixin):
    serialize_only = ("id", "name", "price", "image", "total", "customer_id")
    serialize_rules = ()
    id = db.Column(db.Integer(), primary_key=True)
    name = db.Column(db.String())
    price = db.Column(db.Integer())
    image = db.Column(db.String())
    total = db.Column(db.Integer(), default=0)
    customer_id = db.Column(db.Integer(), db.ForeignKey("customers.id"))
    product_id = db.Column(db.Integer(), db.ForeignKey("products.id"))


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
