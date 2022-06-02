import { Fragment } from 'react';
import MeetupDetail from '../../components/meetups/MeetupDetail'

function MeetupDetails() {
    return (
      <MeetupDetail title='First Meetup' address='Some Strret 5, Some City'
      image='https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Ftower%2F&psig=AOvVaw3TL3K7nsDTUuKcfDO4BpkN&ust=1651373133841000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNj77LniuvcCFQAAAAAdAAAAABAD'
      description='This is a first meetup'/>
    );
}

export default MeetupDetails;