from app import app
from models import db, Branch


with app.app_context():

    Branch.query.delete()

    b1 = Branch(name = "Fresh Picks-TRM Branch", location = "Roysambu", image = "./images/TRM.jpg")
    b2 = Branch(name = 'Fresh Picks-Sarit Branch', location = "Westlands", image = "./images/Sarit centre.jpg")
    b3 = Branch(name = 'Fresh Picks-Mountain View Mall Branch', 
                location = "Mombasa Road", 
                image = "./images/maintain view mall.jpg")
    
    db.session.add_all([b1, b2, b3])
    db.session.commit()
    
