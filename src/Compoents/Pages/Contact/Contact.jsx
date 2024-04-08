import React, { useCallback, useState } from "react";
import ContactItem from "../../../Compoents/Pages/ContactItem/ContactItem";

const Contact = () => {
  let address = "123, Any street, Any city";

  const[count, setCount] = useState(0);

  const handleCounter= ()=> {
    setCount(count+1);
  }

  const parFn = useCallback(() => {
    let name = "abinaya";
    console.log("my name is" + name);
  },[]);
  return (
    <div>
      <div> <button onClick = {handleCounter}>Couter</button></div> <div>{count}</div>
    <ContactItem address = {address} childComProps = {parFn}>Company Address:</ContactItem>
    </div>

  )
}
export default Contact;