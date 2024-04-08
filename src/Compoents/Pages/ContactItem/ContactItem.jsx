import React from 'react';

const ContactItem = (props) => {
  console.log("inside contactitem");
  return (
    <div>
      {props.Children} {props.address}
      {props.childComProps()}
    </div>
  );
};
export default React.memo(ContactItem);
