show dbs
use company
show collections
db.Employees.find()
db.Employees.find().pretty()
db.Employees.find({"name":"scholesy"})
db.createCollection("furniture")
show collections
db.furniture.drop()
db.createCollection("address")
show collections
db.address.drop()
use library
show collections
db.books.find()
db.books.find({"name":"php"},{})
