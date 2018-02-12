show dbs
use company
show collections
db.Employees.find().pretty()
db.Employees.find({"name":"bhoutik"})
db.Employees.find({"name":"rossi"})
db.Employees.find({"age":"28","skills":"all"})
db.Employees.find({"age":{$ne:"28"}})
db.Employees.find({$or:[{"age":{$gte:"40"}},{"skills":"mongo"}]})
db.Employees.find()
db.Employees.update({"name":"rossi"},{$set:{"age":"25"}})

show collections
db.createCollection("furniture")
db.furniture.drop()

use house
db.createCollection("plans")
show dbs
use house
db.dropDatabase()
use company
show collections
db.Employees.find()
db.Employees.find({"age":"29"})
db.Employees.find({"age":"28","skills":"all"})
db.Employees.find({$or:[{"age":"32"},{"skills":"all"}]})
db.Employees.update({"age":"32"},{$set:{"name":"herrera"}})

