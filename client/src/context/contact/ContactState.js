import React, { useReducer } from "react";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";

import { ADD_CONTACT } from "../types";

const ContactState = (props) => {
  const initialSate = {
    name: null,
    email: null,
    subject: null,
    message: null
  };

  const [state, dispatch] = useReducer(contactReducer, initialSate);

  //   add contact to db

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
