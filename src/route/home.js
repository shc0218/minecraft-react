import React from 'react';
import {useQuery} from "react-query";
import axios from "axios";
import {Link} from "react-router-dom";
const fetchUsers = async () => {
    const { data } = await axios.post('/api/user/getAll');
    return data;
};


function Home() {
    // const [user, setUser] = useState([]);
    const { data, error, isLoading, isError } = useQuery('users', fetchUsers);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="App">
            {data.map((item) => (
                    <div key={item.UUID}>
                        <div>
                            Name: {item.UserName},&nbsp;
                            lv: {item.UserLevel},&nbsp;
                            [{item.UserLocation[0]},&nbsp;
                            {item.UserLocation[1]},&nbsp;
                            {item.UserLocation[2]}]&nbsp;
                            <Link to={`/Info/${item.UserName}`}>UserInfo</Link>
                        </div>
                    </div>
                )
            )}
            <Link to="/">logout</Link>
        </div>
    );
}

export default Home;
