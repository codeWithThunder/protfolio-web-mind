/* ****************[MUST]****************** */
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const express = require('express');
const cors = require('cors');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

/* ****************[BODY]****************** */
app.get('/', (req, res) => {
    res.send("hi I'am Atikulla")
})
app.get('/about', (req, res) => {
    res.send('about')
})

/* ***************[MongoDB]**************** */

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.xhcokob.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {

    // Project All
    try {
        await client.connect();
        const collection = client.db("project_main_option").collection("project_main_all");
        // get Project All Data
        app.get('/projects-all', async (req, res) => {
            const query = {};
            const cursor = collection.find(query);
            const projects = await cursor.toArray();
            res.send(projects);
        })
    }
    catch {
        console.dir
    }
    // Project 1
    try {
        await client.connect();
        const collection = client.db("project_main_option").collection("project_main_1");
        // get Project Graphic Data
        app.get('/projects-1', async (req, res) => {
            const query = {};
            const cursor = collection.find(query);
            const projects = await cursor.toArray();
            res.send(projects);
        })
    }
    catch {
        console.dir
    }
    // Project 2
    try {
        await client.connect();
        const collection = client.db("project_main_option").collection("project_main_2");
        // get Project Graphic Data
        app.get('/projects-2', async (req, res) => {
            const query = {};
            const cursor = collection.find(query);
            const projects = await cursor.toArray();
            res.send(projects);
        })
    }
    catch {
        console.dir
    }
    // Project 3
    try {
        await client.connect();
        const collection = client.db("project_main_option").collection("project_main_3");
        // get Project Graphic Data
        app.get('/projects-3', async (req, res) => {
            const query = {};
            const cursor = collection.find(query);
            const projects = await cursor.toArray();
            res.send(projects);
        })
    }
    catch {
        console.dir
    }
    // Project 3 Inner Data 1
    try {
        await client.connect();
        const collection = client.db("project_main_option").collection("project_main_3_1");
        // get Project Data
        app.get('/projects-3-1', async (req, res) => {
            const query = {};
            const cursor = collection.find(query);
            const projects = await cursor.toArray();
            res.send(projects);
        })
    }
    catch {
        console.dir
    }
    // Project 3 Inner Data 2
    try {
        await client.connect();
        const collection = client.db("project_main_option").collection("project_main_3_2");
        // get Project Data
        app.get('/projects-3-2', async (req, res) => {
            const query = {};
            const cursor = collection.find(query);
            const projects = await cursor.toArray();
            res.send(projects);
        })
    }
    catch {
        console.dir
    }
    // Project 3 Inner Data 3
    try {
        await client.connect();
        const collection = client.db("project_main_option").collection("project_main_3_3");
        // get Project Data
        app.get('/projects-3-3', async (req, res) => {
            const query = {};
            const cursor = collection.find(query);
            const projects = await cursor.toArray();
            res.send(projects);
        })
    }
    catch {
        console.dir
    }
    // Project 3 Inner Data 4
    try {
        await client.connect();
        const collection = client.db("project_main_option").collection("project_main_3_4");
        // get Project Data
        app.get('/projects-3-4', async (req, res) => {
            const query = {};
            const cursor = collection.find(query);
            const projects = await cursor.toArray();
            res.send(projects);
        })
    }
    catch {
        console.dir
    }
    /* **************************{Blog}************************* */
    // Blog Link
    try {
        await client.connect();
        const collection = client.db("blogs").collection("blog");
        // get blog Data
        app.get('/blog', async (req, res) => {
            const query = {};
            const cursor = collection.find(query);
            const projects = await cursor.toArray();
            res.send(projects);
        })
        // POST Blog : Add a New Blog
        app.post('/blog', async (req, res) => {
            const newBlog = req.body;
            console.log('adding new user', newBlog);
            const result = await collection.insertOne(newBlog);
            res.send(result);
        })
        // delete a Blog
        app.delete("/blog/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const result = await collection.deleteOne(query);
            res.send(result);
        });
        // Update blog
        app.get('/blog/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const result = await collection.findOne(query);
            res.send(result);
        })
        //update blog put
        app.put('/blog/:id', async (req, res) => {
            const id = req.params.id;
            const updatedBlog = req.body;
            const filter = { _id: ObjectId(id) };
            const opction = { upsert: true };
            const updateDoc = {
                $set: {
                    image: updatedBlog.image,
                    name: updatedBlog.name,
                    date: updatedBlog.date,
                    articel1: updatedBlog.articel1
                }
            };
            const result = await collection.updateOne(filter, updateDoc, opction);
            res.send(result);
        })
    }
    catch {
        console.dir
    }

}


run().catch(console.dir);
/* ****************[MUST]****************** */
app.listen(port, () => {
    console.log('node is start');
})