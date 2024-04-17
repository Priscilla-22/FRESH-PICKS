from app import app
from models import Customer, db

with app.app_context():
    # Delete all rows in all tables
    print('Deleting rows...')

    Customer.query.delete()

    print('Rows deleted.')

    # Create customer objects
    print('Creating customers...')

    jd = Customer(username='John Doe', email='johndoe@email.com')
    jw = Customer(username='Johnny Walker', email='jw@email.com')
    cm = Customer(username='Captain Morgan', email='capmorgan@email.com')
    rs = Customer(username='Ricky Stanicky', email='staniricky@email.com')

    print('Customers created.')

    # Add objects to session and commit
    print('Adding customers to database...')

    db.session.add_all([jd, jw, cm, rs])
    db.session.commit()
    
    print('Done!')