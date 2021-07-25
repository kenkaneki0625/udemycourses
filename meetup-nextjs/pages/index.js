import MeetupList from '../components/meetups/MeetupList';
import { MongoClient} from "mongodb";

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

// export async function getServerSideProps(context){
//     const req = context.req;
//     const res = context.res;

//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     };
// }

export async function getStaticProps(){
    const client = await MongoClient.connect('mongodb+srv://Shaon:<password>@emaily.frhls.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find().toArray();

    client.close();

    return {
        props:{
            meetups : meetups.map(meetup => ({
                title : meetup.title,
                address : meetup.address,
                image : meetup.image,
                id : meetup._id.toString()
            }))
        },
        revalidate : 3600
    }
}