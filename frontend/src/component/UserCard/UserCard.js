import React from 'react'
import { Link } from 'react-router-dom';
import './UserCard.css';

const UserCard = (props) => {
    const { name, age, contactNo, _id } = props;

    return (
        <Link className='userCard' to={`/users/${_id}`}>
            <p>NAME: {name}</p>
            <p>AGE: {age}</p>
            <p>CONTACT: {contactNo}</p>
        </Link>
    )
}

export default UserCard