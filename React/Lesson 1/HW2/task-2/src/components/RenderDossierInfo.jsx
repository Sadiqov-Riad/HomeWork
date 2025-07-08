import React from 'react';

function RenderDossierInfo(props) {
    return (
        <div className='PersonalCard'>
            <img src={props.photo} alt={props.fullName} />
            <p>{props.fullName}</p>
            <p><b>Age:</b> {props.age}</p>
            <p><b>City:</b> {props.city}</p>
            <p><b>Workplace:</b> {props.work}</p>
            <div className='AdditionalInfo'>
                <p><b>Email:</b> {props.email}</p>
                <p><b>Phone number:</b> {props.phone}</p>
            </div>
        </div>
    );
}

export default RenderDossierInfo;

