import React from 'react';
import "./user.css";


class User extends React.Component{
    render(){
        const users = this.props.users.map(user =>(
            <div className = "user" key={user.id}>
                <h3>{user.name}</h3>
                <p>{user.email}</p>
            </div>
        ));

        return(
            <div className="user-container">
                <h2>Users</h2>
                {users}
            </div>
        );
    }
}


export default User;