const keys = require("../keys/keys");
const Person = require("../models/person");
const MongoClient = require("mongodb").MongoClient;
const MongoObjectId = require("mongodb").ObjectId;


const context = new MongoClient(keys.MONGO_URI);
const _person = "person";

// open connection
module.exports.openConnection = async function () {
    try {
        await context.connect();

    } catch (e) {
        throw e;
    }
}

// close connection
module.exports.closeConnection = async function () {
    try {
        await context.close();
    } catch (e) {
        throw e;
    }
}


// CRUD
// Create 
module.exports.createPerson = async function (candidate) {
    try {
        const person = new Person(candidate.firstName, candidate.lastName);
        const result = await context.db(keys.MONGO_DBNAME).collection(_person).insertOne(person);

        console.log("inserted id:", result.insertedId);

    } catch (e) {
        throw e;
    }
}

// Read one by Id
module.exports.readPersonById = async function (id) {
    try {
        const person = await context.db(keys.MONGO_DBNAME).collection(_person).findOne({_id: new MongoObjectId(id)});
        console.log(person);

    } catch (e) {
        throw e;
    }
}

// Read All
module.exports.readAllPersons = async function () {
    try {
        const queryResult = context.db(keys.MONGO_DBNAME).collection(_person).find({});
        const persons = await queryResult.toArray();
        console.log(persons);

    } catch (e) {
        throw e;
    }
}

// Update
module.exports.updatePerson = async function (candidate) {
    try {
        const candidateId = new MongoObjectId(candidate._id);
        const person = await context.db(keys.MONGO_DBNAME).collection(_person).findOne({_id: candidateId});
        if (person) {
            const updatedPerson = {
                firstName: candidate.firstName,
                lastName: candidate.lastName
            };
            
            const result = await context.db(keys.MONGO_DBNAME).collection(_person).updateOne({_id: candidateId}, { $set: updatedPerson});
            console.log(result);
        }
    } catch (e) {
        throw e;
    }
}

// Delete by Id
module.exports.deletePersonById = async function (id) {
    try {
        const result = await context.db(keys.MONGO_DBNAME).collection(_person).deleteOne({_id: new MongoObjectId(id)});
        console.log(result);

    } catch (e) {
        throw e;
    }
}