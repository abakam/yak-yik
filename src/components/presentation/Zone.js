import React from 'react';
import styles from './styles'

const Zone = props =>  {
    const style = styles.zone;
    
    let zipCode = props.zone.zipCodes[0];
    return (
    
        <div style={style.container} >
            <h2 style={style.header}>
                <a style={style.title} href="#">{ props.zone.name }</a>
            </h2>
            <span className="detail">{zipCode}</span><br />
            <span className="detail">{props.zone.numComments} Comments</span>
        </div>
    
    );
}

export default Zone