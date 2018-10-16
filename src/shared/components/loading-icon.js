import React from "react";
import icon from '../../../images/25.gif';

const iconStyle = {
    width: '80px',
    height: '80px',
    position: 'absolute',
    top: '40%',
    left: '0',
    right: '0',
    margin: '0 auto'
}

const LoadingIcon = props => (
    <div style={{textAlign:"center"}}>
        <img src={icon} width={80} height={80} style={iconStyle} />
    </div>
)

export default LoadingIcon;