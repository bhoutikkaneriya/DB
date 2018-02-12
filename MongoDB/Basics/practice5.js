show dbs
use company
db.Employees.find()
db.Employees.update(
  {"name":"bhoutik"},{$set: {"skills":"full stack"}}
)


db.Employees.update(
{"position":"analyst"},{$set:{"skills":"mongo"}},{multi: true}
)
db.Employees.update({"age":"25"},{$set:{"skills":"mongo"}},{multi:true})
show dbs
use company
show collections
db.Employees.find()
db.Employees.update({"age":"28"},{$set:{"skills":"all"}},{multi:true})