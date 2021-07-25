import NewMeetupForm from "../components/meetups/NewMeetupForm";

export default function NewMeetupPage() {
    async function addMeetupHandler (entrydata) {
        console.log('entry', entrydata)
        const response = await fetch('/api/new-meetup',{
            method : 'POST',
            body : JSON.stringify(entrydata),
            headers : {
                'Content-Type' : 'application/json'
            }
        });

        const data = await response.json();

        console.log(data);
    }
    return <NewMeetupForm onAddMeetup={addMeetupHandler}/>
}