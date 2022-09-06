import React, { Fragment, useEffect } from 'react';
import { useAlert } from 'react-alert';
import { useSelector, useDispatch } from 'react-redux';
import { clearErrors, getUsers } from '../../actions/userAction';
import Loader from '../layout/Loader/Loader';
// import { clearErrors, getProduct } from '../../actions/productAction';
// import Loader from '../layout/Loader/Loader';
// import Product from './Product/ProductCard.js';
import MetaData from '../layout/MetaData';
import UserCard from '../UserCard/UserCard';
import './Home.css';

const Home = () => {
    const dispatch = useDispatch();
    const alert = useAlert();

    const { users, loading, error } = useSelector((state) => state.users);

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        dispatch(getUsers());
    }, [alert, dispatch, error])
    return (
        <>
            {loading ? <Loader /> :
                <>
                    <MetaData title='Users' />
                    <h1 className='heading' style={{ 'marginLeft': '10px' }}>USERS</h1>
                    <div className="userList">
                        {users && users.data && users.data.length > 0 && users.data.map((user, index) => {
                            return (
                                <UserCard key={`${user.name} ${index}`} {...user} />
                            )
                        })}
                    </div>
                </>
            }
        </>
    )
}

export default Home