//data save- file
const fs = require('fs');

const chalk = require('chalk');
const { parse } = require('path');
const { count } = require('console');

const db_file = "data.json";

//console.log("db.js");

// const name = "chandana";

// //create
// const add =()=> {
//    console.log(chalk.bold.blue("adding"));
// }

// //view
// const view =()=> console.log(chalk.inverse.yellow("view"));

// module.exports = {
//     add,
//     view
// };

//addGuest updateGuest deleteGuest readGuest listGuest

const addGuest =(name,address,contacts,visit_date)=> {
    const guest =loadGuest();
    const length = guest.length;
    // console.log(length);
    let id=1;
    if(length>0){
        id=guest[length-1].id+1;
    }
    guest.push({
        // name:name,
        // address:address,
        // contacts:contacts,
        // visit_date:visit_date
        id,
        name, //short hand
        address,
        contacts,
        visit_date
    });

    saveGuest(guest);


    console.log(chalk.red.bold("Data saved !"));
}

const updateGuest =(id,name,address,contacts,visit_date)=> {

    const upg = loadGuest();
    const gindex = upg.findIndex((upgg)=>{
        return upgg.id===id;
    });

    //console.log(gindex);

    if (gindex!=-1){
        const upgg = upg[gindex];

        // if(name){
        //     console.log(name);
        // }else{
        //     console.log("No Name");
        // }

        upgg.name = name? name:upgg.name; //name kyna ekama thiyenava nam name ma ganna ehema nethnam 
        upgg.address = address? address:upgg.address;
        upgg.contacts = contacts? contacts:upgg.contacts;
        upgg.visit_date = visit_date? visit_date:upgg.visit_date;

        console.log(chalk.magentaBright.bold("Record Update ",id));
        saveGuest(upg);
    }else{
        console.log(chalk.dim.bold("No Record found!",id));
    }

    //console.log(chalk.cyanBright.bold("Update ",id));
}

const deleteGuest =(id)=> {
    const dt = loadGuest();
    const dt2 =dt.filter((dt)=> {
        return dt.id!=id;
    });

    if(dt.length>dt2.length){
        saveGuest(dt2);
        console.log(chalk.red.inverse("Delete Guest id = ", id));
    }else{
        console.log(chalk.redBright.inverse("No Record Found id =", id));
    }
    // saveGuest(dt2);
    // console.log(chalk.yellowBright.bold("Delete Guest ", id));

    // console.log(chalk.yellowBright.bold("delete ",id));
}

const readGuest =(id)=> {
    const men = loadGuest();
    const read = men.find((read)=>{
        return read.id === id 
    });
    if(read){
        console.log(chalk.green.bold("read ",id));
        console.log(read);
    }else{
        console.log(chalk.blueBright.bold("No Record Found !"));
    }

}

// const readGuest =(id)=> {        //practice
//     const men = loadGuest();
//     const read = men.find((read)=>{
//         return read.id === id
//     });

//     console.log(chalk.grey.bold("Read Guest",id));
//     console.log(read);
// }



const listGuest =()=> {
    console.log(chalk.blueBright.bold("Guest list"));

    const list = loadGuest();
    list.forEach((run)=>{
        console.log(run); 
    })
}

const saveGuest =(guest)=> {
    const dataJSON = JSON.stringify(guest);
    fs.writeFileSync(db_file,dataJSON);
}


// const loadGuest =()=> {
//     const dataBuffer = fs.readFileSync(db_file);
//     const dataJSON = dataBuffer.toString();
//     const data = JSON.parse(dataJSON);
//     return data;
// }

const loadGuest =()=> {
    try{
        const dataBuffer = fs.readFileSync(db_file);
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);// short kirimak

    }catch(e){
        return[];
    }
    
}

module.exports = {
    addGuest,
    updateGuest,
    deleteGuest,
    readGuest,
    listGuest
}


//
  