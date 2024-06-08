import React, {useEffect, useState} from 'react';
import {useQuery} from "react-query";
import axios from "axios";
import {Link} from "react-router-dom";
function Home() {
    const fetchUsers = async () => {
        const { data } = await axios.post('/api/user/getAll');
        setUsersData(data)
    };

    const [usersData, setUsersData] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    const { error, isLoading, isError } = useQuery('users', fetchUsers);
    const OnClickUserInfo = (UserName, UUID) => {
        sessionStorage.setItem("UUID", UUID);
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }
    return (
        <div>
            {usersData.map((item) => (
                    <div key={item.UUID}>
                        <div>
                            Name: {item.UserName},&nbsp;
                            lv: {item.UserLevel},&nbsp;
                            [{item.UserLocation[0]},&nbsp;
                            {item.UserLocation[1]},&nbsp;
                            {item.UserLocation[2]}]&nbsp;
                            <Link to={"/info/" + item.UserName} onClick={() => OnClickUserInfo(item.UserName, item.UUID)}>UserInfo</Link>
                        </div>
                    </div>
                )
            )}
            <Link to="/">logout</Link>
        </div>
    );
}

export default Home;
