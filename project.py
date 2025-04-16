from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

# Create an engine instance connected to your database
engine = create_engine('postgresql://username:password@localhost:5432/your_database')

# Create a configured "Session" class
Session = sessionmaker(bind=engine)

# Create a session
session = Session()

# Example query
result = engine.execute("SELECT NOW()")
for row in result:
    print(row)
