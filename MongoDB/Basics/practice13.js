show dbs
use california
db.createCollection("longbeach")
db.createCollection("losangeles")
show collections
db.longbeach.drop()
db.losangeles.drop()
db.createCollection("long_beach")
db
db.long_beach.insertOne({name:"city_of_long_beach",famous:["beach","mountains","nature"],beach:{famous:"new_port",nearest:"whale"}})
db.longbeach.find()
db.long_beach.renameCollection("longbeach")
db.longbeach.find({name:"city_of_long_beach"},{famous:1,beach:1})
db.losangeles.insert({airport:"LAX",baseball_team:"Dodgers",basketball_team:"LA Lakers"})
db.losangeles.find()
db.losangeles.renameCollection("hollywood")
show collections
db.hollywood.renameCollection("losangeles")
db.createCollection("san franisko")
db["san franisko"].insert({k:"j"})
db["san franisko"].find()
db["san franisko"].renameCollection("san_francisko")
show collections