import React from "react";
import ContactItem from "../../../Compoents/Pages/ContactItem/ContactItem";

const Contact = () => {
  let address = "123, Any street, Any city";
  return (
    <ContactItem address = {address}>Company Address:</ContactItem>
  )
}
export default Contact;