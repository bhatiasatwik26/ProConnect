import { useSelector } from "react-redux";

const Dashboard = () => {
    // Use the useSelector hook to get data from the Redux store
    const users = useSelector((state) => state.Signup.users);
    return (
        <div>
            <h1>ALL THE SIGNED UP USERS</h1>
            <ul>
                {users && users.length > 0 ? (
                    users.map((item, index) => (
                        <li key={index}>
                            Name: {item.user.username}, Email: {item.user.email}
                        </li>
                    ))
                ) : (
                    <p>No users found</p>
                )}
            </ul>
        </div>
    );
};

export default Dashboard;
