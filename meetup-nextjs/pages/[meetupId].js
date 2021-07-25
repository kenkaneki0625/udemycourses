import {Fragment} from 'react';
import MeetupDetail from '../components/meetups/MeetupDetails';
import { MongoClient, ObjectId} from "mongodb";

export default function MeetupDetails(props){

    return(
        
        <MeetupDetail
            image={props.meetupData.image}
            title={props.meetupData.title}
            address={props.meetupData.address}
            description={props.meetupData.description}
        />
    )
}

export async function getStaticPaths() {

    const client = await MongoClient.connect('mongodb+srv://Shaon:<password>@emaily.frhls.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find({}, {_id:1}).toArray();

    client.close();


    return {
        fallback: false,
        paths: meetups.map(meetup => ({ params : { meetupId : meetup._id.toString()}}))
        
    }
}

export async function getStaticProps(context){

    const meetupId = context.params.meetupId

    const client = await MongoClient.connect('mongodb+srv://Shaon:<password>@emaily.frhls.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
    
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const selectedmeetup = await meetupsCollection.findOne({_id: ObjectId(meetupId)});

    client.close();


    return {
        props:{
            meetupData : {
                id : selectedmeetup._id.toString(),
                title : selectedmeetup.title,
                address : selectedmeetup.address,
                image : selectedmeetup.image,
                description : selectedmeetup.description
            }
        },
        revalidate : 3600
    }
}