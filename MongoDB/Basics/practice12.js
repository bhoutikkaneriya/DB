show dbs
use school
show collections
db.student.find()
use company
show collections
db.Employees.find()
db.Employees.insert({"name":"mary","age":39,"position":"tester","skills":"web"})
db.Employees.find({"age":{$gt:"32"}})
db.Employees.find({"name":"bhoutik","postion":"developer"})
db.Employees.update({"name":"bhoutik"},{$set:{"position":"developter"}})
db.Employees.update({"postion":"developer"},{$set:{"position":"developer"}})
db.Employees.remove({"name":"bhoutik"})
db.Employees.update({"name":"sheetal"},{$rename:{"postion":"position"}})
db.Employees.update({"name":"pirlo"},{$rename:{"postion":"position"}})
db.Employees.update({"name":"pirlo"},{$set:{"skills":"python"}})
db.Employees.update({"name":"rossi"},{$rename:{"postion":"position","skills":"skillset"}})