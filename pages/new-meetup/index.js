// file route => out-domain.com/new-meetup 
import { useRouter } from 'next/router';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetupPage() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData) {
  
  const response = await fetch('/api/new-meetup', {
       method: 'POST',
       body: JSON.stringify(enteredMeetupData),
       headers: {
         'Content-Type': 'application/json'
       }
    })
    // fetch data from the api file path. This will send a req to the api/new-meetup and then trigger that function for us
    
    const data = await response.json();
    console.log(data);
    router.push('/');
    }  

    return <NewMeetupForm onAddMeetup={addMeetupHandler} />
}

export default NewMeetupPage;