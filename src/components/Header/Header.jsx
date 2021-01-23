import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { clearUser } from '../../actions/User';
import shipper from '../../functions/shipper/Shipper';

const Header = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const [collapsed, setCollapsed] = useState(true);
    const user = useSelector(state => state.user)

    const toggleNavbar = () => setCollapsed(!collapsed);

    const collapse = () => {
        setCollapsed(true)
    }

    const goUsers = () => {
        collapse()
        history.push('/users')
    }

    const goMachines = () => {
        collapse()
        history.push('/machines')
    }

    const goScripts = () => {
        collapse()
        history.push('/scripts')
    }

    const goSessionList = () => {
        collapse()
        history.push('/sessions')
    }

    const logout = () => {
        shipper.post('/user/logout', {})
            .then(res => {
                console.log('Server send ACK logout:', res)
                dispatch(clearUser())
                collapse()
                history.push('/login')
            })
            .catch(err => { console.log('ERROR:', err.message); })
    }

    const login = () => {
        history.push('/login')
        collapse()
    }

    const goRegister = () => {
        collapse()
        history.push('/register')
    }

    const goAddMachine = () => {
        collapse()
        history.push('/add-machine')
    }

    const goAddScripts = () => {
        collapse()
        history.push('/add-script')
    }

    const goCreateSession = () => {
        collapse()
        history.push('/create-session')
    }

    const itemStatusUser = () => {
        if (user.email !== null) {
            return (
                <NavItem>
                    <NavLink onClick={logout}>Log out</NavLink>
                </NavItem>
            )
        } else {
            return (
                <NavItem>
                    <NavLink onClick={login}>Log in</NavLink>
                </NavItem>
            )
        }
    }

    return (
        <div>
            <Navbar color="dark" dark style={{ width: '100vw' }}  >
                <NavbarBrand href="/" className="mr-auto">SMART DRYER SYSTEM</NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink onClick={goUsers}>Danh sách tài khoản</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={goRegister}>Tạo tài khoản</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={goScripts}>Công thức sấy</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={goAddScripts}>Tạo Công thức sấy</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={goMachines}>Danh sách máy sấy</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={goCreateSession}>Tạo phiên sấy</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={goAddMachine}>Tạo máy sấy</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={goSessionList}>Thống kê dữ liệu</NavLink>
                        </NavItem>
                        {itemStatusUser()}
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;