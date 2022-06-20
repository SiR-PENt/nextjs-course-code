import { Fragment } from 'react';
import MeetupDetail from '../../components/meetups/MeetupDetail'

function MeetupDetails() {
    return (
      <Fragment>
        <MeetupDetail
          title="First Meetup"
          address="Some Strret 5, Some City"
          image="https://media.istockphoto.com/photos/the-leaning-tower-in-pisa-picture-id929861782?k=20&m=929861782&s=612x612&w=0&h=fPhTAo1b8DGV98Mg-I2MJVtiYa9d83HvUCCE9qY4f-w="
          description="This is a first meetup"
        />
      </Fragment>
    );
}

//NB: getStaticPaths is a component you need to export in a page component file if it's a dynamic page and if you are using only getStaticProps. We use getStaticPaths to prerender all the versions of the page with all the supported ids
 
export async function getStaticPaths() {
  return {
    fallback: false,
    // this tells NextJS if all the page ids were generated. If set to false, it tells NextJS that all the page ids were included and returns a 404 error if an invalid id is found. If set to true, NextJS will dynamically generate a page for an id that is not provided 
    paths: [{
      params: {
      meetupId: 'm1',
    }},
       {
         params: {
           meetupId: 'm2'
         }
       }]
  }
}

export async function getStaticProps(context) {
  console.log(context)
  //we can turn it to an async await function if we want to fetch data from somwhere
  const meetupId = context.params.meetupId; // this to get the path of the url. MeetupId because that's the identifier we named the dynamic file with.

  return {
    props: {
      meetupData: {
          id: meetupId, //set id to meetUpId here to get component specific id
          title:"First Meetup",
          address:"Some Strret 5, Some City",
          image:"https://media.istockphoto.com/photos/the-leaning-tower-in-pisa-picture-id929861782?k=20&m=929861782&s=612x612&w=0&h=fPhTAo1b8DGV98Mg-I2MJVtiYa9d83HvUCCE9qY4f-w=",
          description:"This is a first meetup"
      }
    }
  }

}
export default MeetupDetails;