show dbs
db
use company
db.createCollection("Employees")
db.createCollection("furniture")
db.Employees.insert({"name":"bhoutik","age":"25","postion":"developer","skills":"web"})
db.Employees.insert({"name":"sheetal","age":"35","postion":"analyst","skills":"full stack"})
db.Employees.find().pretty()
db.Employees.insert([{"name":"scholesy","age":"15","postion":"developer","skills":"mongo"
},{"name":"pirlo","age":"28","postion":"analyst","skills":"full stack"
},{"name":"rossi","age":"55","postion":"developer","skills":"mongo"
}])

db.Employees.insert([{"name":"rooney","age":"21","postion":"developer","skills":"web"
},{"name":"lampard","age":"28","postion":"analyst","skills":"mongo"
}])

db.Employees.find({"name":"bhoutik"})
db.Employees.find()
db.Employees.find({"skills":"mongo"},{"position":"developer"})
db.Employees.find({$or :[{"skills":"mongo"},{"position":"developer"}]})
