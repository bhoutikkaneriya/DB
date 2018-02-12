show dbs
use library
db.createCollection("books")
db.createCollection("computers")
db.books.insert({"name":"javascript","date":"2012","edition":"4","publication":"wiley"})
db.books.insert({"name":"node","date":"2013","edition":"2","publication":"pearson"})
db.books.insert([{"name":"mongo","date":"2015","edition":"3","publication":"wiley"},
{"name":"php","date":"2015","edition":"2","publication":"tata"},
{"name":"mysql","date":"2013","edition":"3","publication":"pearson"},
{"name":"python","date":"2014","edition":"3","publication":"tata"}
])
show collections
db.books.find()
db.books.find({"name":"node"})
show collections
db.computers.drop()
db.books.find()
db.books.find({"date":"2017"},{"edition":"2"})
db.books.find({"date":{$gt:"2014"}})
db.books.find({"edition":{$gte:"4"}})

