import {Fragment} from 'react';
import MeetupDetail from '../components/meetups/MeetupDetails';

export default function MeetupDetails(){
    return(
        
        <MeetupDetail
            image="https://us.123rf.com/450wm/vichie81/vichie811508/vichie81150800164/44510493-grand-place-brussels-belgium-at-dusk-.jpg?ver=6"
            title='first meetup'
            address='some street'
            description='Some description'
        />
    )
}

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            {
            params:{
                meetupId: 'm1'
            }
        },
        {
            params:{
                meetupId: 'm2'
            }
        },
        
    ]
    }
}

export async function getStaticProps(context){

    const meetupId = context.params.meetupId
    return {
        props:{
            meetupData : {
                id : meetupId,
                image : "https://us.123rf.com/450wm/vichie81/vichie811508/vichie81150800164/44510493-grand-place-brussels-belgium-at-dusk-.jpg?ver : 6",
                title : 'first meetup',
                address : 'some street',
                description : 'Some description',
            }
        },
        revalidate : 3600
    }
}