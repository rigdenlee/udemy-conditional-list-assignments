import React from "react";

const validationComponent = (props) => {
    let lengthCheck = null;
        if(props.count <= 5 && props.count !== 0) {
            lengthCheck = <p>Text too short!</p>;
        } else if(props.count > 5 || props.count >= 10) {
            lengthCheck = <p>Text long enough!</p>;
        }
    return (
        <div>
            {lengthCheck}
        </div>
    );
}

export default validationComponent;