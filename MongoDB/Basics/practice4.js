db company
use company
show collections
db.Employees.find()
db.Employees.find({"name":"sheetal"})
db.Employees.find({"age":{$gt:"28"}})
db.Employees.find()
db.Employees.find({"age":{$gte:"28"}})
db.Employees.find({"age":"28"},{"position":"analyst"})
db.Employees.find({$or:[{"age":{$gte:"28"}},{"position":"developer"}]})
show collections
db.furniture.find()
db.furniture.drop()
show collections
use sports
show collections
db.hockey.find()
db.rugby.find()
db.dropDatabase()
show dbs
use company
show collections
db.createCollection("furniture")
db.furniture.insert({"name":"bhoutik","age":"25"})
db.furniture.find()
db.furniture.insert({"name":"bhtk","age":"26"})
db.furniture.insert([{"name":"paul","age":"35"},{"name":"pirlo","age":"40"},{"name":"rossi","age":"30"}])

show dbs
show collections
db.Employees.find()
db.Employees.insert({"name":"bonucci","age":"29","position":"analyst","skills":"web"})
db.Employees.insert([{"name":"messi","age":"24","position":"developer","skills":"full stack"},{"name":"xavi","age":"32","position":"analyst","skills":"web"}])
db
db.createCollection("demo 2")
db.createCollection("demo 3")
show collections
db.demo2.drop()
db["demo 3"].drop()
db.demo2.drop()
db.furniture.drop()
show collections
db.demo2.remove()
db["demo 2"].drop()
db.createCollection("demo 1")
show collections
db["demo 1"].drop()
