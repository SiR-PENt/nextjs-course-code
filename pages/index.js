
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
    {
      id:'m1',
      title:'A First Meetup',
      image:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Ftower%2F&psig=AOvVaw3TL3K7nsDTUuKcfDO4BpkN&ust=1651373133841000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNj77LniuvcCFQAAAAAdAAAAABAD',
      address:'Some address 5, 12345 Some City',
     description:'This is the first Meetup'
    }
    ,
    {
       id:'m2',
       title:'A Second Meetup',
      image:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Ftower%2F&psig=AOvVaw3TL3K7nsDTUuKcfDO4BpkN&ust=1651373133841000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNj77LniuvcCFQAAAAAdAAAAABAD',
      address:'Some address 5, 12345 Some City',
     description:'This is the Second Meetup'
    }
]

function HomePage() {
    return <MeetupList meetups={DUMMY_MEETUPS} />
          
}

export default HomePage;