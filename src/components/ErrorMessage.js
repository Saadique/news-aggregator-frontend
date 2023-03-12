import { InlineAlert } from 'evergreen-ui';
import React from 'react';

const ErrorMessage = ({ style, message, customClass = '' }) => {

    return (
        <>
            {
                message &&
                <InlineAlert intent="danger" style={style} className={`text-red-500 text-xs ${customClass} break-words`}>
                    {message}
                </InlineAlert>
            }
        </>
    );
};

export default ErrorMessage;