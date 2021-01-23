import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserList } from './actions/UserList';
import { updateUser } from './actions/User';
import { updateMachineList } from './actions/MachineList';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Link, Route, Redirect } from 'react-router-dom'
import React, { Suspense } from 'react';
import { Spinner } from 'reactstrap'
import io from 'socket.io-client'
import Login from './components/Login/Login';
import MachineList from './components/machine_list/MachineList';
import UserList from './components/user_list/UserList';
import ScriptList from './components/script_list/ScriptList';
import SessionList from './components/session_list/SessionList';
import Register from './components/register/Register';
import AddMachine from './components/machine/AddMachine';
import AddScript from './components/script/AddScript';
import CreateSession from './components/session/CreateSession';

function App() {
    /////////////////////////////////////////////
    const dispatch = useDispatch()

    const socket = io('http://localhost:5000/client')

    socket.on('server-send-ack-connection', message => {
        console.log('server-send-ack-connection', message);
    })

    socket.on('server-send-update-user-list', message => {
        console.log('server-send-update-user-list', message);
    })

    socket.on('server-send-update-machine-list', message => {
        console.log('server-send-update-machine-list', message);
        dispatch(updateMachineList(message.machineList))
    })

    socket.on('server-send-notice-finish-session', message => {
        console.log('server-send-notice-finish-session', message);
    })

    socket.on('server-send-ack-control-devices', message => {
        console.log('server-send-ack-control-devices', message);
    })

    socket.on('server-send-data', message => {
        console.log('server-send-data', message);
    })
    /////////////////////////////////////////////

    return (
        <>
            <Suspense fallback={<Spinner style={{ width: "3rem", height: "3rem", position: "fixed", top: 'calc(50% - 1.5rem)', left: 'calc(50% - 1.5rem)' }} />}>
                <Router>
                    <Header />
                    <Switch>
                        <Redirect exact from='/' to='/login' />
                        <Route path='/login' component={Login} />
                        <Route path='/machines' component={MachineList} />
                        <Route path='/users' component={UserList} />
                        <Route path='/scripts' component={ScriptList} />
                        <Route path='/sessions' component={SessionList} />
                        <Route path='/register' component={Register} />
                        <Route path='/add-machine' component={AddMachine} />
                        <Route path='/add-script' component={AddScript} />
                        <Route path='/create-session' component={CreateSession} />
                    </Switch>
                </Router>
            </Suspense>
        </>
    )
}

export default App;
