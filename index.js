const PersonService = require("./services/personService");

async function main () {
    try {
        await PersonService.openConnection();
        
        
        // await PersonService.createPerson({firstName:"John", lastName: "Smith"});
        // await PersonService.createPerson({firstName:"Alice", lastName: "Crown"});

        await PersonService.readAllPersons();
        
        //await PersonService.readPersonById("61e979fb51dd0a6c43bf416b");

        // await PersonService.updatePerson({
        //     _id: "61e979fb51dd0a6c43bf416b",
        //     firstName: 'John',
        //     lastName: 'Lock'              
        // });
        // await PersonService.readAllPersons();

        await PersonService.deletePersonById("61e979fb51dd0a6c43bf416b");

        await PersonService.readAllPersons();
        
        await PersonService.closeConnection();

    } catch(e) {
        console.log(e);
    }
}

main();