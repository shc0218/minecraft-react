import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useQuery} from "react-query";
import axios from "axios";

function UserInfo() {
    const [userData, setUserData] = useState({
        UUID: "",
        Name: "",
        Health: 0,
        Level: 0,
        HungryLevel: 0,
        Location: [
            0,
            0,
            0
        ]
    });
    const fetchUser = async () => {
        const { data } = await axios.post('/api/user/getUser', {UUID: sessionStorage.getItem('UUID')});
        setUserData({
            UUID: data.UUID,
            Name: data.UserName,
            Health: data.UserHealth,
            Level: data.UserLevel,
            HungryLevel: data.UserHungryLevel,
            Location: data.UserLocation
        });
        return data;
    };
    const navigate = useNavigate();
    useEffect(() => {
        fetchUser()
    }, [fetchUser]);
    const { error, isLoading, isError } = useQuery('users', fetchUser);
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <p>{userData.Name}</p>
            <p>UUID: {userData.UUID}</p>
            <p>Lv.{userData.Level}</p>
            <p>{userData.Health}Hp</p>
            <p>Hungry: {userData.HungryLevel}</p>
            <p>{userData.Location[0]}, {userData.Location[1]}, {userData.Location[2]}</p>
            <button onClick={() => navigate(-1)}>back</button>
        </div>
    );
}

export default UserInfo;
