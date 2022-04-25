import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
    const {friendid}=useParams();
    const [friend,setFriend]=useState({});
    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/users/${friendid}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setFriend(data))
    },[friendid])
    return (
        <div>
            <h1>name:{friend.name}</h1>
            <h2>Email:{friend.email}</h2>
            <address>
                <h1>Website:{friend.website}</h1>
                <h3>Address:{friend.address?.city}</h3>
                <h3>Address:{friend.address?.street}</h3>
                <h3>Zipcode:{friend.address?.zipcode}</h3>
            </address>
        </div>
    );
};

export default FriendDetails;