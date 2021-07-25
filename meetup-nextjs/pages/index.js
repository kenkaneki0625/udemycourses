import MeetupList from '../components/meetups/MeetupList';

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

    return <MeetupList meetups={props.meetups}/>
}

export async function getStaticProps(){
    return {
        props:{
            meetups : DUMMY_MEETUPS
        }
    }
}