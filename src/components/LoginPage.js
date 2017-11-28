import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';

export const LoginPage = ({startLogin})=>(
    <div>
        <h1>Login page</h1>
        <input type="text" placeholder="login" autoFocus/>
        <input type="text" placeholder="password"/>
        <button onClick={startLogin}>Login</button>
    </div>
);

const mapDispatchToProps = (dispatch)=>({
    startLogin:()=>dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);