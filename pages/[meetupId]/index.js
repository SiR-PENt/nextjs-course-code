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

export default MeetupDetails;