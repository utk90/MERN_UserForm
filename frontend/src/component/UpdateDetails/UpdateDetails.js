import React, { useEffect, useState } from 'react'
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { clearErrors, deleteUser, getUserById, updateUser } from '../../actions/userAction';
import Loader from '../layout/Loader/Loader';
import MetaData from '../layout/MetaData';
import './UpdateDetails.css';

const UserDetails = () => {
    const dispatch = useDispatch();
    const alert = useAlert();
    const navigate = useNavigate();
    const { id } = useParams();
    const { user, loading, error } = useSelector((state) => state.users)
    const [username, setUsername] = useState('');
    const [age, setAge] = useState(0);
    const [password, setPassword] = useState('');
    const [contact, setContact] = useState(0);

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (user?.data?._id !== id) {
            dispatch(getUserById(id));
        } else if (username === '' && age === 0 && password === '' && contact === 0) {
            setUsername(user?.data?.name);
            setAge(user?.data?.age);
            setPassword(user?.data?.password);
            setContact(user?.data?.contactNo);
        }

    }, [age, alert, contact, dispatch, error, id, loading, password, user, username]);

    const updateDetailsSubmit = (e) => {
        e.preventDefault();

        const details = {
            "name": username,
            "age": age,
            "password": password,
            "contactNo": contact
        }

        dispatch(updateUser(details, id));
        navigate('/');
    }

    const deleteHandler = () => {
        dispatch(deleteUser(id));
        navigate('/');
    }

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <MetaData title="Change User Details" />
                    <div className="updateDetailsContainer">
                        <div className="updateDetailsBox">
                            <h2 className="updateDetailsTitle">Update Details</h2>

                            <form
                                className="updateDetailsForm"
                                onSubmit={updateDetailsSubmit}
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
                                    value="Update"
                                    className="updateDetailsBtn"
                                />
                                <button onClick={deleteHandler}>Delete</button>
                            </form>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default UserDetails