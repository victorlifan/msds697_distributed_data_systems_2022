////////////////////////////////////////////////////////
//     To run this script mongo < day1_examples.js    //
////////////////////////////////////////////////////////

// Array – [Element1, Element2,…]
diane = {"favorite": ["Children"]}

diane = {"favorite": ["Children", 7, ["Database", "Machine Learning"]]}

// Embeded Documents
diane = {"name" : "Diane MK Woodbridge",
         "address" : {"street" : "101 Howard St", "city" : "San Francisco",
         "state" : "CA"}}

//ObjectId
ObjectId()

//Basic Math
x = 200
x / 23

//JavaScript
Math.sin(Math.PI)

msds_string = "USF MSDS"
msds_string = msds_string.replace("MSDS", "Master in Data Science")

// Example 1 
// Create msds697 database and create a collection called "friends".
// Insert diane and yannet to "friends".
// Create and insert "Diane" document into the collection.

diane = {"name" : "Diane MK Woodbridge",
         "address" : {"street" : "101 Howard St", "city" : "San Francisco",
         "state" : "CA"}}
yannet = {"name":"Yannet Interian", 
          "address" : {"street" : "101 Howard", "city" : "San Francisco", 
          "state" : "CA"}}
shan = {"name":"Shan Wang"}          
     

// Create/Insert
use msds697
db.friends.drop()
db.createCollection('friends')
db.friends.insertMany([diane,yannet])
db.friends.insertMany([yannet,shan])
//Bulk Insert 
// db.friend.drop()
db.friends.find()
// Example 2
//Import raw data - do it on the terminal (not on Mongo shell

// mongoimport --db msds697 --collection business --file ~/Desktop/classes/spring_1/697_DISTRIBUTED_DATA_SYSTEMS/msds697_distributed_data_systems_2022/Data/business.json

//mongoimport db.getCollection("unknown").find({})--db msds697 --collection business --file ../Data/business.json

db.business.findOne()
// Example 3
// Find all documents where address’s city is San Francisco.
db.friends.find({'address.city':'San Francisco'})
// Find one document where address’s city is San Francisco.
db.friends.findOne({'address.city':'San Francisco'})

// Example 4
//Find all businesses in "Manhattan" in "business" under the “msds697” database.
//db.business.findOne()
db.business.find({'borough':'Manhattan'})
//Only business names?
//db.business.find({'borough':"Manhattan",'name':true,'_id':false})//,{'name':true,'_id':false})
db.business.find({'borough':"Manhattan"},{'name':1,'_id':0})
// Example 5
// Set "title" as "Assistant Professor", to all the documents 
// where "name" is set as "Diane MK Woodbridge".
db.friends.updateMany({'name':'Diane MK Woodbridge'},{$set:{'title':"Assistant Professor"}})


//Unset "title", to all the documents,  
// where "name" is set as "Diane MK Woodbridge”.
db.friends.updateMany({'name':'Diane MK Woodbridge'},{$unset:{'title':''}})
                   
// Set "title" as "Administrative", to all the documents 
// where "name" is set as "Kirsten Keihl".
// If there is no corresponding document, create one.

db.friends.updateMany({'name':'Kirsten Keihl'},{$set:{'title':'Administrative'}},{upsert:1})

db.friends.find({'name':'Kirsten Keihl'})

// Example 6
// Increase "kidsCount" by 1 for all documents, where "name" is "Shan Wang".

db.friends.updateMany({'name':'Shan Wang'},{$inc:{'kidsCount':-1}})
db.friends.find({'name':'Shan Wang'})
// Rename "address" field to "officeAddress" for all the documents.
db.friends.updateMany({},{$rename: {'address':'officeAddress'}})

db.friends.findOne()
// Example 7
// For documents where "name" is "Diane MK Woodbridge", 
// set "numCats" to 1, 
// if it is either not set or the existing value larger than 1.
//$min : updates the value of the field to a specified value 
//       if the specified value is less than the current value of the field. 


// For documents where "name" is "Diane MK Woodbridge", 
// set "numDogs" to 1, 
// if it is either not set or the existing value is smaller than 1.
//$max : Only updates the field to a specified value 
//       if the specified value is greater than the existing field value.



// Example 8
// In the "business" collection, for "White Castle" on "Pennsylvania Avenue" , 
// insert a new grades with "date" : today, "grade" : "A", and "score" : 9.
db.business.find({"name":"White Castle", "address.street":"Pennsylvania Avenue"})

// Remove the last grades for for "White Castle" on "Pennsylvania Avenue" 



// Remove all reviews with Cs for restaurant_id, 40364467 .



// Example 9 
//Change all scores of "40356483" from 10 to 11.
//$


//$[] 
db.business.drop()
//mongoimport --db msds697 --collection business --file business.json

	   
//$[<identifier>]
db.business.drop()
//mongoimport --db msds697 --collection business --file business.json



// Example 10
// In "friends" collection,
// Delete one item which officeAddress' city is “San Francisco”
// Delete all items which officeAddress' city is “San Francisco”
// What is the best way to drop all? 
//// .deleteMany({}) vs .drop()

//Remove One


//Remove Many


//Drop the entire collection.



//Extra -
// For documents in business where zipcode is 10462, and street is "Castle Hill Avenue",
// Update its grade to "A+" if score is greater than 10.
db.business.find({"address.zipcode" : "10462", "address.street" : "Castle Hill Avenue"})

