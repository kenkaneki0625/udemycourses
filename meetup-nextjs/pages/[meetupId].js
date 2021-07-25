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