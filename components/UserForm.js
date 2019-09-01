import React from 'react';

const UserForm = (props) => {
    return (
        <form onSubmit={props.getUser}>
            <input style={{margin:"20px auto", display:"block"}} type="text" name="username" />
            <button style={{margin:"0px auto 20px auto"}}>Submit</button>
        </form>
    );
}

export default UserForm



