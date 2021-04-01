import React from 'react';
import { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser] = useState({});
    return (
        <div>
            <div>
                <nav className="navbar navbar-light bg-light justify-content-between">
                    <Link to="/" className="navbar-brand">E-Bazar</Link>
                    <Link to="/home"> Home </Link>
                    <Link to="/checkOut"> Order</Link>
                    <Link to="/admin">Admin</Link>
                    
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                More
                        </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="/manageProduct">Manage Product</Dropdown.Item>
                                <Dropdown.Item href="/admin">Add Product</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    
                    <Link to="/login"> Login </Link>
                    <UserContext.Provider value={[loggedInUser]}>
                        <p className="text-center">{loggedInUser.name}</p>
                    </UserContext.Provider>

                </nav>
            </div>
        </div>
    );
};

export default Header;