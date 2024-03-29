import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Navigation from '../../comps/Navigation';
import Post from '../../comps/Post';
import ThreeMenu from '../../comps/ThreeMenu';
import DeletePopup from '../../comps/DeletePopup';
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import treated from 'assets/treated.png';

const Container = styled.div`
border: 1px solid black;
width: 414px;
height: 868px;
overflow-y: scroll;
overflow-x: hidden;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
position: relative;

    &::-webkit-scrollbar {
        display: none;
    }

#text {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 21px;
}
`;

const Main = styled.div`
margin-top:20px;
display: flex;
align-items: center;
justify-content: center;

`;
const Overlay = styled.div`
    background-color: rgba(0,0,0,0.5);
    width: 414px;
    height: 868px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
`;
const PostPage = () => {
    const history = useHistory();

    const [popup1, setPopup1] = useState(null);
    const [popup2, setPopup2] = useState(null);


    const More = () => {
        setPopup1(true);
    }
    const HandleClick1 = (selected) => {
        if (selected === 1) {
            history.push('/EditPost')
        } else if (selected === 2) {
            setPopup1(false)
            setPopup2(true)
        } else if (selected === 3) {
            setPopup1(false)
        }
    }
    const HandleClick2 = (selected) => {
        if (selected === 1) {
            setPopup2(false)
        } else if (selected === 2) {
            //delete the post
        }
    }

    const [posts, setPosts] = useState([]);

    const GetPosts = async () => {
        const resp = await axios.get("https://pluto-db.herokuapp.com/api/getAllPosts");
        // const resp = await axios.get("https://localhost:8080/api/getAllPosts");
        console.log(resp.data.posts);

        setPosts([
            ...resp.data.posts
        ]);
        console.log(posts, "posts")
    }

    const [num, setNum] = useState();
    const [selected, setSelected] = useState();
    const [treatsource, setTreatSource] = useState()


    const LikePicture = async () => {
        setTreatSource(treated);
        console.log("hi")
    }

    useEffect(() => {
        //when the page loads, do the following
        GetPosts();
    }, [])

    return <Container>

        {posts.map((o, i) => <Post
            src={o.image}
            un={o.username}
            caption={o.caption}
            treatsrc={treatsource}
            onClick={LikePicture}
            ClickMore={More}
        />)}

        <Navigation minwidth="400px" />
        {popup1 ? <div>
            <Overlay >
                <ThreeMenu
                    onClick={HandleClick1}
                />
            </Overlay>
        </div> : null}
        {popup2 ? <div>
            <Overlay >
                <DeletePopup
                    onClick={HandleClick2}
                />
            </Overlay>
        </div> : null}
    </Container>
}

export default PostPage