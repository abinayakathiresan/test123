import React from 'react';

const ContactItem = (props) => {
  return (
    <div>
      {props.Children} {props.address}
    </div>
  );
};
export default ContactItem;
