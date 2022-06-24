// the api folder has to be named api. And it has to be in the pages folder.  THey don't return html code, they are about returning http request such as patch, post, delete, get request with json data attached to them. API routes allow you to build your owm api endpoints as part of a next project. When you add files to the folder, the file names act as file segment in the url. For this file, the path is
// /api/new-meetup
import { MongoClient} from 'mongodb'

async function handler(req, res) {
   if(req.method === 'POST'){//This tells us that only post req to this route will trigger this function
   const data = req.body;
   //we will save this data to a database
   const client = await MongoClient.connect('mongodb+srv://SiRPENt:&unkanm1@cluster0.yqbu3.mongodb.net/meetups?retryWrites=true&w=majority')
   const db = client.db();
   const meetupsCollection = db.collection('meetups') //name of the collection
   const result = await meetupsCollection.insertOne(data)//built-in query commands for inserting one new doc into this collection. A doc could be one new object, which contains title, image, address, description
   console.log(result);
   client.close(); //after saving is successful

   //the process below is for sending a response back. It is done with the res paramenter

   res.status(201).json({ message: 'Meetup inserted' })
   }
}
export default handler
