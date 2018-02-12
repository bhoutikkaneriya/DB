use classes
show collections
db.desai.find()
db.desai.renameCollection("bhoutik_classes")
db.bhoutik_classes.renameCollection("desai")
db.desai.find({name:"sheetal",address:"churchgate"})
db.desai.find({age:{$gt:20}})
db.desai.find({$or:[{name:"bhoutik"},{address:"churchgate"}]})
db.desai.find({$or:[{name:"pratik"},{age:{$gt:25}}]})

>db.students.update(
{"id":"1234"} , 
{$set : {"fname": "steve"}},
{multi : true}
)
db.desai.find()
db.desai.update({age:22},{$set:{name:"dharam"}})
db.desai.update({name:"bhoutik"},{$set:{name:"braddy"}})
db.desai.insert({name:"bhoutik",age:26,addresss:"santacruz",skills:["java","mean","aws"]})
db.desai.update({age:22},{$set:{address:"navi mumbai"}},{multi:true})
db.desai.update({name:"john"},{$rename:{addresss:"address"}})
db.desai.update({age:26},{name:"bhoutik"})
db.desai.update({name:"bhoutik"},{$set:{skills:["aws"]}},{multi:true})
db.desai.update({name:"bhoutik"},{$rename:{skills:"skills_set"}},{multi:true})
db.desai.update({name:"bhoutik"},{$rename:{skills_set:"skill"}},{multi:true})
save


db.desai1.insert({name:"asdasd",age:26,addresss:"bandra",skills:["meaaan"]})
db.desai1.insert({name:"mark",age:25,addresss:"cruz",skills:["aws"]})
show collections
db.desai1.find()
db.desai1.remove({age:26})
db.desai1.update({name:"mark"},{$set:{age:35}})
db.desai1.update({name:"mark"},{$rename:{age:"DOB"}})
db.desai1.find({name:"mark"},{name:1})
db.desai.find()
db.desai.find().sort({name:1})
db.desai.save()
db.createCollection("indexes")
db.indexes.insert([
{name:"mark",age:25,location:"india",salary:300},
{name:"john",age:20,location:"japan",salary:100},
{name:"nolan",age:18,location:"usa",salary:500},
{name:"peter",age:32,location:"peru",salary:700},
{name:"eric",age:28,location:"nepal",salary:200},
{name:"scot",age:38,location:"bhutan",salary:150}
])
db.indexes.find().sort({age:1})
db.indexes.find({salary:{$gt:150}},{name:1,location:1})
db.indexes.find({name:"john"}).explain("executionStats")
db.indexes.ensureIndex({name:1})
db.indexes.getIndexes()