from models import Product,db
from app import app

with app.app_context():
    db.drop_all()
    db.create_all()
    
    
    products=[]
    
    
    products.append(Product(
        name="Melons",
        price=100,
        description="This is the first product",
        reviews="This is the first product review",
        category="fruits",
        image="https://res.cloudinary.com/doifxgf1h/image/upload/v1713289558/GROCERY%20ITEMS/melons_tayuul.jpg",
        customer_id=1
    ))
    products.append(Product(
        name="Apples",
        price=150,
        description="This is the first product",
        reviews="This is the first product review",
        category="fruits",
        image="https://res.cloudinary.com/doifxgf1h/image/upload/v1713289473/GROCERY%20ITEMS/apples_bzlwlt.jpg",
        customer_id=1
    ))
    products.append(Product(
        name="Mangoes",
        price=80,
        description="This is the first product",
        reviews="This is the first product review",
        category="fruits",
        image="https://res.cloudinary.com/doifxgf1h/image/upload/v1713289460/GROCERY%20ITEMS/mangoes_aeqb3e.jpg",
        customer_id=3
    ))
    products.append(Product(
        name="Pears",
        price=80,
        description="This is the first product",
        reviews="This is the first product review",
        category="fruits",
        image="https://res.cloudinary.com/doifxgf1h/image/upload/v1713289486/GROCERY%20ITEMS/pears_l43ysa.jpg",
        customer_id=2
    ))
    products.append(Product(
        name="Sweet Potatoes",
        price=100,
        description="This is the first product",
        reviews="This is the first product review",
        category="Veggies",
        image="https://res.cloudinary.com/doifxgf1h/image/upload/v1713289410/GROCERY%20ITEMS/sweet_lbi5fr.jpg",
        customer_id=5
    ))
    products.append(Product(
        name="Carrots",
        price=100,
        description="This is the first product",
        reviews="This is the first product review",
        category="Veggies",
        image="https://res.cloudinary.com/doifxgf1h/image/upload/v1713289428/GROCERY%20ITEMS/carrots_sllaod.jpg",
        customer_id=4
    ))
    products.append(Product(
        name="Bananas",
        price=100,
        description="This is the first product",
        reviews="This is the first product review",
        category="Fruits",
        image="https://res.cloudinary.com/doifxgf1h/image/upload/v1713289443/GROCERY%20ITEMS/banana_cfomsq.jpg",
        customer_id=4
    ))
    db.session.add_all(products)
    db.session.commit()