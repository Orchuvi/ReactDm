import React from "react";
import ContactCard from "./ContactCard";
const ContactList=(props)=>{
    const rendercontacts= props.contacts.map((contact)=>{
        return (
            <ContactCard contact={contact}/>
        );
    });
    return(
        <div className="ui celled list">
            {rendercontacts}
        </div>
    )
}

export default ContactList;