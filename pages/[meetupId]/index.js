import { Fragment } from 'react';
import MeetupDetail from '../../components/meetups/MeetupDetail'
import {MongoClient, ObjectId} from 'mongodb';

function MeetupDetails({props}) {
    return (
      <Fragment>
        <MeetupDetail
          title={props.meetupData.title}
          address={props.meetupData.address}
          image={props.meetupData.image}
          description={props.meetupData.description}
        />
      </Fragment>
    );
}

//NB: getStaticPaths is a component you need to export in a page component file if it's a dynamic page and if you are using only getStaticProps. We use getStaticPaths to prerender all the versions of the page with all the supported ids
 
export async function getStaticPaths() {

  const client = await MongoClient.connect('mongodb+srv://SiRPENt:&unkanm1@cluster0.yqbu3.mongodb.net/meetups?retryWrites=true&w=majority');
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find({}, {_id:1}).toArray() //the expression inside the find method means only include the id but no other field values. This way we fetch the doc objects but they each will only contain the ids;
  client.close()
  return {
    fallback: false,
    // this tells NextJS if all the page ids were generated. If set to false, it tells NextJS that all the page ids were included and returns a 404 error if an invalid id is found. If set to true, NextJS will dynamically generate a page for an id that is not provided

    paths: meetups.map((meetup) => ({
      params: {meetupId: meetup._id.toString() },
    }))
    //and yes, paths has to be an array. Here, we map through the meetups to get individual ids
  };
}

export async function getStaticProps(context) {
  //we can turn it to an async await function if we want to fetch data from somwhere
  const meetupId = context.params.meetupId; // this to get the path of the url. MeetupId because that's the identifier we named the dynamic file with.
  const client = await MongoClient.connect(
    "mongodb+srv://SiRPENt:&unkanm1@cluster0.yqbu3.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const selectedMeetup = await meetupsCollection.findOne({_id: ObjectId(meetupId)}) //fetch data from database and filter by id. Criteria for id to be filtered is if id === meetupId which is the id we get from path's url
  console.log(selectedMeetup)
  client.close()

  return {
    props: {
    meetupData: {id: selectedMeetup._id.toString(),
    title: selectedMeetup.title,
    address: selectedMeetup.address,
    image: selectedMeetup.image,
    description: selectedMeetup.description,}
    }
  }

}
export default MeetupDetails;