import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearErrors, createUser } from '../../actions/userAction';
import MetaData from '../layout/MetaData';
import './Form.css';

const Form = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [age, setAge] = useState(0);
    const [password, setPassword] = useState('');
    const [contact, setContact] = useState(0);

    const { error, success } = useSelector(state => state.users)

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (success) {
            alert.success('User created successfully!!');

            navigate('/login');
        }
    }, [dispatch, error, navigate, success])

    const createUserSubmit = (e) => {
        e.preventDefault();

        const details = {
            "name": username,
            "age": age,
            "password": password,
            "contactNo": contact
        }

        dispatch(createUser(details));
        navigate('/');
    }

    return (
        <>
            <MetaData title="Create user form" />
            <div className="createDetailsContainer">
                <div className="createDetailsBox">
                    <h2 className="createDetailsTitle">Create New User</h2>

                    <form
                        className="createDetailsForm"
                        onSubmit={createUserSubmit}
                    >
                        <div className="user-name">
                            <input
                                type="text"
                                placeholder="write your name"
                                required
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>

                        <div className="user-age">
                            <input
                                type="number"
                                placeholder="write your age"
                                required
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                            />
                        </div>
                        <div className="user-password">
                            <input
                                type="password"
                                placeholder="write your password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="user-contact-no">
                            <input
                                type="number"
                                placeholder="write you contact no"
                                required
                                value={contact}
                                onChange={(e) => setContact(e.target.value)}
                            />
                        </div>
                        <input
                            type="submit"
                            value="Create"
                            className="updateDetailsBtn"
                        />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Form