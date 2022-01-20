// const keys = require("../keys/keys");
// const MongoClient = require("mongodb").MongoClient;

// const context = new MongoClient(keys.MONGO_URI);



// async function main () {

//     try {
//         await context.connect();
//         const dataBase = context.db("soap_hbs");
//         const accounts = dataBase.collection('accounts');
    
//         // query
//         const allAccounts = accounts.find({});
//         const asArray = await allAccounts.toArray();
    
//         console.log(asArray);

//     } catch (e) {
//         throw e;

//     } finally {
//         await context.close();

//     }
// }

// main();