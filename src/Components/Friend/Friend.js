import React from 'react';
import { useNavigate } from "react-router-dom";
const Friend = (props) => {
    const{name,username,id}=props.friend;
    let navigate = useNavigate();
    const showFriendDetail=()=>{
        const path=`/friend/${id}`;
        navigate(path)
    }
    return (
        <div>
            <h1>name:{name}</h1>
            <button onClick={showFriendDetail}>{username}id:{id}</button>
        </div>
    );
};

export default Friend;