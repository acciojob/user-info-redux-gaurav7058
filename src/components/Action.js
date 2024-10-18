import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { userEmail, userName } from '../utils/useReducer'; // Adjust path as necessary

export default function Action() {
    const dispatch = useDispatch();
    
    // Access current values from Redux store
    const currentName = useSelector(store => store.user.name);
    const currentEmail = useSelector(store => store.user.email);

    return (
        <div>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={currentName} // Set the value to the current name from the store
                    onChange={(e) => dispatch(userName(e.target.value))} // Dispatch the new name directly
                /><br />
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={currentEmail} // Set the value to the current email from the store
                    onChange={(e) => dispatch(userEmail(e.target.value))} // Dispatch the new email directly
                /><br />
            </div>

            <div className="output"> {/* Fixed class name here */}
                <h1>User Information</h1>
                <p>Name: {currentName}</p> {/* Directly display currentName */}
                <p>Email: {currentEmail}</p> {/* Directly display currentEmail */}
            </div>
        </div>
    );
}
