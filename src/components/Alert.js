
//no need to look this it's complicated
import React from 'react';

function Alert(props) {
    const { alert } = props;
    return (
        <>
            {alert && (
                <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
                    {alert.type}: {alert.msg}
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            )}
        </>
    );
}

export default Alert;
