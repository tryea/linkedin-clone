import React, {useEffect, useState} from 'react'
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create"
import InputOption from './InputOption';
import ImageIcon from "@material-ui/icons/Image"
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';
import { db } from './Firebase';
import firebase from 'firebase';

function Feed() {
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").orderBy('timeStamp', 'desc').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )))
        ))
    }, [])
    
    const sendPost = async e => {
        e.preventDefault();
        console.log(posts);
        await db.collection('posts').add({
            name: 'Ersapta Aristo',
            description: 'This is a test',
            message: input,
            photoUrl: '',
            timeStamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        console.log(posts);
        setInput('');
    }
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input type="text" value={input} onChange={ e => setInput(e.target.value) } />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
                    <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
                    <InputOption Icon={CalendarViewDayIcon} title="Write Article" color="#7FC15E" />
                </div>
            </div>
            {/* Posts */}
            {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
                <Post key={id} name={name} description={description} message={message} />
            ))}      
            {/* <Post name="Ersapta Aristo" description="Full-Stack Developer" message="My result after doing 100 days of coding" /> */}
        </div>
    )
}

export default Feed
