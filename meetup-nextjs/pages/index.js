import MeetupList from '../components/meetups/MeetupList';
import { useEffect,useState } from 'react';

const DUMMY_MEETUPS = [
    {
        key : '1',
        id : 'm1',
        image : 'https://us.123rf.com/450wm/vichie81/vichie811508/vichie81150800164/44510493-grand-place-brussels-belgium-at-dusk-.jpg?ver=6',
        title : 'A',
        address : 'aa',
    },
    {
        key : '2',
        id : 'm2',
        image : 'https://us.123rf.com/450wm/vichie81/vichie811508/vichie81150800164/44510493-grand-place-brussels-belgium-at-dusk-.jpg?ver=6',
        title : 'B',
        address : 'bb',
    },
    {
        key : '3',
        id : 'm3',
        image : 'https://us.123rf.com/450wm/vichie81/vichie811508/vichie81150800164/44510493-grand-place-brussels-belgium-at-dusk-.jpg?ver=6',
        title : 'C',
        address : 'cc',
    },
]

export default function HomePage(props){

    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(()=>{
        setLoadedMeetups(DUMMY_MEETUPS);

    },[])
    return <MeetupList meetups={loadedMeetups}/>
}

export async function getStaticProps(){
    return {
        props:{
            meetups : DUMMY_MEETUPS
        }
    }
}