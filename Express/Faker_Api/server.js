const { json } = require("express");
const express = require("express");
const app = express();
const port = 4000;
const faker=require("faker")
 class User{
     constructor(){
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
     }
 }
 class Company {
    constructor(){
      this.name = faker.company.companyName();
      this.address = {
          street: faker.address.streetAddress(),
          city: faker.address.city(),
          state: faker.address.state() ,
      };
    }
  }
app.get("/api",(req,res)=>{
    res.json({message:"up and running!!"})
})
app.get("/api/users/new", (req, res) => {
    res.json( new User() );
});
  app.get("/api/companies/new", (req, res) => {
    res.json( new Company()  );
});
app.get("/api/user/company", (req, res) => {
    res.json({User: new User() , Company: new Company()} );
});


app.listen( port, () => console.log(`Listening on port: ${port}`) );