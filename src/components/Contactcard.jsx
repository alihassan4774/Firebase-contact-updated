import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { db } from "../config/firebase";
import AddandUpdataContact from "./AddandUpdataContact";
import useDisclouse from "../hooks/useDisclouse";
import { toast } from "react-toastify";

const Contactcard = ({ contact }) => {
  const { isOpen, onOpen, onClose } = useDisclouse();

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contact", id));
        toast.success("Contact Deleted Successfully");
    } catch (error) {
      console.log(error);
    }
  };
  return (
   <div>
  <div
    key={contact.id}
    className="
      flex items-center justify-between gap-16 rounded-lg bg-yellow-200 p-2 px-4
      max-md:p-2 max-md:px-4 max-md:gap-4
    "
  >
    {/* Left Section */}
    <div className="flex gap-1 max-md:gap-1">
      <HiOutlineUserCircle className="text-4xl text-orange-400 max-md:text-xl" />
      <div>
        <h2 className="font-medium text-base max-md:text-xs">{contact.name}</h2>
        <p className="text-sm max-md:text-[10px]">{contact.email}</p>
      </div>
    </div>

    {/* Right Section */}
    <div className="flex text-3xl max-md:text-lg gap-1">
      <RiEditCircleLine onClick={onOpen} className="cursor-pointer" />
      <IoMdTrash
        onClick={() => deleteContact(contact.id)}
        className="cursor-pointer text-orange-400"
      />
    </div>
  </div>

  <AddandUpdataContact
    contact={contact}
    isUpdate
    isOpen={isOpen}
    onClose={onClose}
  />
</div>

  );
};

export default Contactcard;
