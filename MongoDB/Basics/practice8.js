use company
show collections
db.Employees.find()
db.Employees.update({"name":"pirlo"},{$set:{"age":"38"}})
db.Employees.find({"age":"25","skills":"mongo"})
db.Employees.find({$or:[{"age":"25"},{"skills":"none"}]})
db.Employees.find({"age":{$gte:"38"}})

db.Employees.remove({"name":"bonucci"})

db.Employees.find({"name":"bhoutik"},{"name":1,"postion":1}).pretty()

db.Employees.find({},{"name":"1"})

db.Employees.find().limit(4)

db.Employees.find().skip(3)

db.Employees.find().sort({"name":1})

db.Employees.ensureIndex({"name":1})

db.Employees.getIndexes()

db.Employees.dropIndex({"name":1})