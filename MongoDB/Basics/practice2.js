db
show dbs
show collections
db
use football
show collections
db.football_collection.drop()
db.createCollection("test1")
db.test1.insert({"name":"Bhoutik","age":"25","pob":"mumbai"})
db.test2.insert({"name":"sheetal","age":"25","pob":"sonepat"})
db.test1.find()
db.test1.drop()
show collections
use demo
show dbs
db.prac1.insert({"name":"d1","age":"35","location":"bombay"})
show dbs
show collections
db
db.createCollection("prac2")
db.prac2.insert({"name":"bhtk","age":"11","agegegeg":"25454"})
db.prac2.find()
db.prac2.drop()
show collections
db.dropDatabase()
show dbs
db


db.test1.insert({"EmpNo":"1",
"FirstName":"Andrew",
"LastName":"Neil",
"Age":"30",
"Gender":"Male",
"Skill":"MongoDB",
"Phone":"408-1234567",
"Email":"Andrew.Neil@gmail.com",
"Salary":"80000"
})
db.test1.find()


db.test3.insert([
{
"EmpNo":"1",
"FirstName":"Andrew",
"LastName":"Neil",
"Age":"30",
"Gender":"Male",
"Skill":"MongoDB",
"Phone":"408-1234567",
"Email":"Andrew.Neil@gmail.com",
"Salary":"80000"
},
{
"EmpNo":"2",
"FirstName":"Brian",
"LastName":"Hall",
"Age":"27",
"Gender":"Male",
"Skill":"Javascript",
"Phone":"408-1298367",
"Email":"Brian.Hall@gmail.com",
"Salary":"60000"
}
])
db.test3.find()
db.test3.find({"FirstName":"Brian"})


db.test4.insert({"name":"bhtk","age":"25","location":"santacruz"})

"EmpNo":"4",
"FirstName":"Debbie",
"LastName":"Long",
"Age":"32",
"Gender":"Female",
"Skill":"Project Management",
"Phone":"408-1299963",
"Email":"Debbie.Long@gmail.com",
"Salary":"105000"
},
{
"EmpNo":"5",
"FirstName":"Ethan",
"LastName":"Murphy",
"Age":"45",
"Gender":"Male",
"Skill":"C#",
"Phone":"408-3314567",
"Email":"Ethan.Murphy@gmail.com",
"Salary":"120000"
}
]
)
db.test3.find().pretty()
db.test4.find({"EmpNo":{$gt:"4"}})
db.test3.find({"EmpNo":{$g:"1"}})
db.test4.find({"EmpNo":{$gt:"4"}})


db.test4.find()
db.test4.find({"EmpNo":"4","EmpNo":"5"})
db.test4.find({ $or: [{"EmpNo":"4"},{"EmpNo":"5"}]})
