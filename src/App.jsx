import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import Contactcard from "./components/Contactcard";
  import { ToastContainer, toast } from 'react-toastify';

import AddandUpdataContact from "./components/AddandUpdataContact";
import useDisclouse from "./hooks/useDisclouse";
import NotContactFound from "./components/NotContactFound";


const App = () => {
   const [contacts, setContacts] = useState([]);
   const {isOpen, onOpen, onClose} = useDisclouse();
   


     useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contact");

        onSnapshot(contactsRef, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactLists);
          console.log(contactLists)
          return contactLists;
        });
      } catch (error) {
        console.log(error);
      }
    };

    getContacts();
  }, []);


const filterContacts = (e) => {
    const value = e.target.value;

    const contactsRef = collection(db, "contact");

    onSnapshot(contactsRef, (snapshot) => {
      const contactLists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      const filteredContacts = contactLists.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );

      setContacts(filteredContacts);

      return filteredContacts;
    });
  };


  return (
<>
  <div className="flex flex-col justify-center items-center gap-4">
    <Navbar />

    {/* Search + Add Button */}
    <div className="flex justify-center items-center ml-1 gap-2">
      <div className="relative flex flex-grow items-center gap-5">
        <FiSearch className="absolute left-2 text-2xl sm:text-3xl text-white" />
        <input
          onChange={filterContacts}
          type="text"
          placeholder="Search Contact"
          className="h-10 sm:h-10 lg:w-[328px]  rounded-md border border-white bg-transparent pl-9 pr-2 text-white text-sm sm:text-base"
        />
      </div>

      <AiFillPlusCircle
        onClick={onOpen}
        className="cursor-pointer text-4xl sm:text-5xl text-white"
      />
    </div>

    {/* Contact List */}
    <div className="flex flex-col gap-3">
      {contacts.length <= 0 ? (
        <NotContactFound />
      ) : (
        contacts.map((contact) => (
          <Contactcard key={contact.id} contact={contact} />
        ))
      )}
    </div>
  </div>

  <AddandUpdataContact isOpen={isOpen} onClose={onClose} />
  <ToastContainer position="bottom-center" />
</>


  );
};

export default App;
