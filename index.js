const express = require('express');
const {response} = require("express");
const app = express();
const fs = require('node:fs/promises');
const path = require("node:path");

app.use(express.json())
app.use(express.urlencoded({extended: true}))


// users data file
const users_data = path.join(__dirname,'users','users.json');

async function readUsersData() {
    try {
        const data = await fs.readFile(users_data,);
        return JSON.parse(data);
    }catch (e){
        return [];
    }
}

async function writeUsersData(users){
    await fs.writeFile(users_data,JSON.stringify(users,null,2),)
}

const users = [];

// const users = [
//     {id: 1, name: "John Smith", email: "john.smith@example.com", password: "johnsmith123"},
//     {id: 2, name: "Emily Johnson", email: "emily.johnson@example.com", password: "emilyjohnson456"},
//     {id: 3, name: "Michael Brown", email: "michael.brown@example.com", password: "michaelbrown789"},
//     {id: 4, name: "Jessica Davis", email: "jessica.davis@example.com", password: "jessicadavis101"},
//     {id: 5, name: "David Wilson", email: "david.wilson@example.com", password: "davidwilson202"},
//     {id: 6, name: "Sarah Miller", email: "sarah.miller@example.com", password: "sarahmiller303"},
//     {id: 7, name: "James Taylor", email: "james.taylor@example.com", password: "jamestaylor404"},
//     {id: 8, name: "Laura Anderson", email: "laura.anderson@example.com", password: "lauraanderson505"},
//     {id: 9, name: "Robert Thomas", email: "robert.thomas@example.com", password: "robertthomas606"},
//     {id: 10, name: "Linda Jackson", email: "linda.jackson@example.com", password: "lindajackson707"},
// ]

readUsersData().then(data => {
    users.data;
}).catch(error => {
    console.log('error loading users',error)
})



app.get('/users',async (req, res) => {
    try {
        // res.send(users)
        const users = await readUsersData();
        res.json(users)
    } catch (e) {
        res.status(400).json(e.message)
    }
});

app.get('/users/:id',async (req,res)=>{
    try {
    const users = await readUsersData();
    const userId = Number(req.params.id);

    //validation
    const user = users.find(user => user.id === userId);
    if (!user){
        return res.status(404).json('user not found')
    }
    res.json(user);

   }catch (e){
        res.status(400).json(e.message);
    }
})




app.post('/users',async (req, res) => {
    try {

        const {name, email, password} = req.body;

        //validation
        if (!name.trim() || !email.trim() || !password.trim()){
            throw new Error('fill in : name, email , password')
        }

        const emailCheck =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailCheck.test(email)){
            throw new Error('invalid email,example : example@gmail.com ');
        }

        if (name.length <3) {
            throw new Error('name must be longer than 3 characters');
        }else if (name.length > 20){
            throw new Error('name cant be longer than 20 characters');
        }

        if (password.length < 6){
            throw new Error('password must be longer than 6 characters');
        }
        const users = await readUsersData();

        const index = users.findIndex((user) => user.email === email);
        if (index !== -1){
            return res.status(409).json('email already exist')
        }

        const newUser = {
            id: users[users.length - 1].id + 1,
            name,
            email,
            password
        };

        users.push(newUser);
        await writeUsersData(users);
        res.status(201).json(newUser);
    } catch (e) {
        res.status(400).json(e.message);

    }

})

app.put('/users/:userId',async (req, res) => {
    try {
        const userId = Number(req.params.userId);
        const {name, email, password} = req.body;
        // users json
        const users = await readUsersData();

        //validation
        const user = users.find(user => user.id === userId);
        if (!user){
            return res.status(404).json('user not found')
        }

        //user params
        if (name) {user.name = name;}
        if (email) {user.email = email;}
        if (password) {user.password = password;}



        if (!name.trim() || !email.trim()) {
            throw new Error('fill in : name, email , password')
        } else if (!password.trim()) {
            throw new Error('fill in : name, email , password')
        }

        const emailCheck =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailCheck.test(email)){
            throw new Error('invalid email,example : example@gmail.com ');
        }

        if (name.length <3) {
            throw new Error('name must be longer than 3 characters');
        }else if (name.length > 20){
            throw new Error('cant be longer than 20 characters');
        }

        if (password.length < 6){
            throw new Error('password must be longer than 6 characters');
        }else if (password.length > 20){
            throw new Error('password cant be longer than 20 characters');
        }

        // update user
        await writeUsersData(users);

       res.status(201).json(user);

    }catch (e){
        res.status(400).json(e.message)
    }
});


app.delete('/users/:userId',async (req, res) => {
        try {

            const userId = Number(req.params.userId);

            const users = await readUsersData();

            const index = users.findIndex((user) => user.id === userId);
            if (index === -1){
                return res.status(404).json('user not found')
            }

            //remove user by id
            users.splice(index,1);

            //save update
            await writeUsersData(users);

            res.status(202).json('user deleted');


        }catch (e){
            res.status(400).json(e.message)
        }
})






















app.listen(3000, () => {
    console.log('server is running on port 3000')

})