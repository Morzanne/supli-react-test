import React from 'react';
import cx from 'classnames';
import PT from 'prop-types';


const Img = ({ altMessage, alt, Tag, responsive, className: baseClassName, ...props }) => {
    const className = cx({ 'img-fluid': responsive }, baseClassName);
    const commonProps = {
        alt,
        className,
        ...props,
    };

    return <Tag {...commonProps} />;
};

Img.defaultProps = {
    Tag: 'img',
    responsive: false,
};

Img.propTypes = {
    responsive: PT.bool,
};

export default Img;
