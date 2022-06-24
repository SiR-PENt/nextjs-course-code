// file route => our-domain.com/new-meetup 
import { useRouter } from 'next/router';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import Fragment from 'react';
import Head from 'next/head';

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
    // post data to the api file path. This will send a post req to the api/new-meetup and then trigger that function for us
    
    const data = await response.json();
    console.log(data);
    router.push('/');
    }  

    return (
      <Fragment>
        <Head>
          <title>Add a New Meetup</title>
          <meta name='description' content='Add your own meetup and create amazing networking opportunity'></meta>
        </Head>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />;
      </Fragment>
    );
}

export default NewMeetupPage;