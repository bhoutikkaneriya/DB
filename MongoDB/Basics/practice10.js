show dbs
use school
show collections
db.student.find()
db.student.find({"name":"bhoutik"})
db.students.insert({"name":"bhtk","age":24,"loca":"india"})
db
show collections
db.students.drop()
show collections
db.student.find({"age":{$gt:29}})
db.student.find()
db.student.find({"name":"shyam","age":{$gt:26}})
db.createCollection("parents")
db.student.find()
db.students.find({
$or : [{"fname": "mark"},{"age":"15"}]
})

db.student.find({"name":"bhoutik","grade":"10th"})

db.student.find({
$or: [{"name":"bhoutikk"},{"age":{$gte:25}}]
})

db.students.update(
{"id":"1234"} , 
{$set : {"fname": "steve"}},
{multi : true}
)
db.student.find()
db.student.find({$or:[{"name":"bhoutikk"},{"age":26}]
})

db.student.find({"name":"bhoutik",$or:[{"age":25},{"grade":"7th"}]})


