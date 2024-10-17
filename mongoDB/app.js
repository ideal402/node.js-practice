const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb://localhost:27017/";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db("firstDB");
    // const users = database.collection('users');

    // const userData = await users.insertOne({name:'racoon', age:20})
    // console.log("result", userData);
    // const userList = [{name:'racoon1', age:21}, {name:'racoon2', age:22}]
    // const userListData = await users.insertMany(userList)
    // console.log("result", userListData);

    // // Query for a movie that has the title 'Back to the Future'
    // const query = { name: 'racoon' };
    // const query2 = { age: {$lte : 21} };

    // const userName = await users.findOne(query);
    // const userNameList2 = await users.find(query2).toArray();
    // const userNameUpdate = await users.updateOne({name:'racoon2'},{$set: {age:20}})
    // const userDelete = await users.deleteMany({age: {$eq: 20}})
    // const userNameList = await users.find({}).toArray();

    // console.log(userName);
    // console.log(userNameList);
    // console.log(userNameList2);

    const inventory = database.collection("inventory");

    // Q1
    // const item = await inventory.insertOne({
    //   item: 'canvas',
    //   qty: 100,  tags: ['cotton'],
    //   size: { h: 28, w: 35.5, uom: 'cm' }
    // })

    // Q2
    // const items = await inventory.insertMany([
    //   {
    //     item: 'journal',
    //     qty: 25,
    //     tags: ['blank', 'red'],
    //     size: { h: 14, w: 21, uom: 'cm' },
    //   },
    //   {
    //     item: 'mat',
    //     qty: 85,
    //     tags: ['gray'],
    //     size: { h: 27.9, w: 35.5, uom: 'cm' },
    //   },
    //   {
    //     item: 'mousepad',
    //     qty: 25,
    //     tags: ['gel', 'blue'],
    //     size: { h: 19, w: 22.85, uom: 'cm' },
    //   },
    // ]);

    //Q3
    // const read = await inventory.find().toArray()

    //Q4
    // await inventory.insertMany([
    //   {
    //     item: "journal",
    //     qty: 25,
    //     size: { h: 14, w: 21, uom: "cm" },
    //     status: "A",
    //   },
    //   {
    //     item: "notebook",
    //     qty: 50,
    //     size: { h: 8.5, w: 11, uom: "in" },
    //     status: "A",
    //   },
    //   {
    //     item: "paper",
    //     qty: 100,
    //     size: { h: 8.5, w: 11, uom: "in" },
    //     status: "D",
    //   },
    //   {
    //     item: "planner",
    //     qty: 75,
    //     size: { h: 22.85, w: 30, uom: "cm" },
    //     status: "D",
    //   },
    //   {
    //     item: "postcard",
    //     qty: 45,
    //     size: { h: 10, w: 15.25, uom: "cm" },
    //     status: "A",
    //   },
    // ]);
    // const statusD = await inventory.findOne({status:'D'})

    //Q5
    // const answer = await inventory.findOne({
    //   $and: [{ status: "A" }, { qty: 50 }],
    // });

    //Q6
    // const answer = await inventory.findOne({status: {$in :['A','B']}});

    //Q7
    // const answer = await inventory.findOne({
    //   $and: [{ status: "A" }, { qty: { $lt: 30 } }],
    // });

    //Q8
    // const answer = await inventory.find({
    //   $or: [{ status: "A" }, { qty : { $lt: 30 } }],
    // }).toArray();

    //Q9
    // const answer = await inventory.find(
    //   {'size.uom':'in'}
    // ).toArray()

    //Q10
    // const answer = await inventory.find({'size.h':{$gt:10}}).toArray()

    //Q11
    const students = database.collection("students");
    // await students.insertMany([
    //   {
    //     _id: 1,
    //     test1: 95,
    //     test2: 92,
    //     test3: 90,
    //     modified: new Date("01/05/2020"),
    //   },
    //   {
    //     _id: 2,
    //     test1: 98,
    //     test2: 100,
    //     test3: 102,
    //     modified: new Date("01/05/2020"),
    //   },
    //   {
    //     _id: 3,
    //     test1: 95,
    //     test2: 110,
    //     modified: new Date("01/04/2020")
    //   },
    // ]);

    // const updateStudent = await students.updateOne(
    //   { _id: 3 },
    //   { $set: { test3: 98 } }
    // );

    //Q12
    // const answer = await students.updateMany(
    //   {},
    //   {$set : { test1: 0 , status:"modified"} }
    // )

    //Q13
    // const answer = await students.deleteOne(
    //   {test2:92}
    // )
    
    //Q14
    // const answer = await students.deleteMany(
    //   {test1: 0}
    // )


  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
