//const name = require("./guestdb.js");

//console input
//const chalk = require('chalk');

const db = require("./guestdb.js");
const yargs = require("yargs");
const { argv } = require("yargs");

//yargs.version("1.1.2"); 

yargs.command({
    command: "add",
    describe: "To add a guest",
    builder:{
        name: {
            describe:"Name",
            demandOption: true,
            type:"string"
        },
        address: {
            describe: "address",
            demandOption: true,
            type:"string"
        },
        contacts:{
            describe: "contact",
            demandOption:true,
            type: "number"
        },
        visit_date:{
            describe: "visit_date",
            demandOption:true,
            type: "string"
        }
    },
    handler(argv){
        db.addGuest(argv.name,argv.address,argv.contacts,argv.visit_date);

        // console.log("Name = ",argv.name);
        // console.log("Address = ",argv.address);
        // console.log("contact no = ",argv.contacts);
        // console.log("visit date = ",argv.visit_date);
    }
});

yargs.command({
    command: "update",
    describe: "To update a guest",

    builder:{
        id:{
            describe:"ID",
            demandOption: true,
            type: "number"
        },
        name: {
            describe:"Name",
            demandOption: false,
            type:"string"
        },
        address: {
            describe:"Address",
            type:"string"
        },
        contacts: {
            describe:"contact no",
            demandOption:false,
            type:"number"
        },
        visit_date:{
            describe:"visit_date",
            type:"string"
        }

    },


    handler(argv){               
        db.updateGuest(argv.id,argv.name,argv.address,argv.contacts,argv.visit_date);
    }

});

yargs.command({
    command: "delete",
    describe: "To delete a guest",
    builder:{
        id: {
            describe: "id",
            demandOption: true,
            type: "number"
        }
    },

        handler(argv){               
            db.deleteGuest(argv.id);
        }
    

});

yargs.command({
    command: "read",
    describe: "To read a guest",
    builder:{
        id: {
            describe: "id",
            demandOption: true,
            type: "number"
        }
    },
    handler(argv){
        db.readGuest(argv.id);
    }

});

yargs.command({
    command: "list",
    describe: "To List a guest",
    
    handler(){
        db.listGuest();
    }
});




// yargs.command({
//     command: ''
// });

//console.log(process.argv);

yargs.parse();

//console.log(yargs.argv);


// console.log("app.js");
// db.add();
// db.view();


//console.log(chalk.red.bold("Hello World"));




// yargs.command({
//     command:'add',
//     describe: 'To add a guest',
//     handler:function(){
//         db.addGuest();
//     }
// });


// db.addGuest();
// db.updateGuest();
// db.deleteGuest();
// db.readGuest();
// db.listGuest();




// const command = process.argv;
// if (command[2] == "add"){
//     db.addGuest();
// }else if (command[2] == "update"){
//     db.updateGuest();
// }else if(command[2] == "delete"){
//     db.deleteGuest();
// }else if(command[2] == "read"){
//     db.readGuest();
// }else if(command[2] == "list"){
//     db.listGuest();
// }

