import React from "react";
import Model from "./Model";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from "react-toastify";
import * as Yup from "yup";

const contactSchemaValidation = Yup.object().shape({
  name: Yup.string().required("Name is Required"),
  email: Yup.string().email("Invalid Email").required("Email is Required"),
});

const AddandUpdataContact = ({ isOpen, onClose, isUpdate, contact }) => {
  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contact");
      await addDoc(contactRef, contact);
      onClose();
      toast.success("Contact Added Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const updateContact = async (contact, id) => {
    try {
      const contactRef = doc(db, "contact", id);
      await updateDoc(contactRef, contact);
      console.log("ID passed to updateContact:", id);
      console.log("Contact data:", contact);
      onClose();
      toast.success("Contact Updated Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
 <div>
  <Model isOpen={isOpen} onClose={onClose}>
    <Formik
      validationSchema={contactSchemaValidation}
      initialValues={
        isUpdate
          ? {
              name: contact.name,
              email: contact.email,
            }
          : {
              name: "",
              email: "",
            }
      }
      onSubmit={(values) => {
        console.log(values);
        isUpdate ? updateContact(values, contact.id) : addContact(values);
      }}
    >
      <Form
        className="
          flex flex-col gap-4
          w-full
          sm:w-[80%] md:w-[80%] lg:w-[500px]
          mx-auto
        "
      >
        {/* Name Field */}
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm sm:text-base">
            Name
          </label>
          <Field
            name="name"
            className="h-10 border px-2 w-full rounded-md text-sm sm:text-base"
          />
          <div className="text-xs text-red-500">
            <ErrorMessage name="name" />
          </div>
        </div>

        {/* Email Field */}
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm sm:text-base">
            Email
          </label>
          <Field
            name="email"
            className="h-10 border px-2 w-full rounded-md text-sm sm:text-base"
          />
          <div className="text-xs text-red-500">
            <ErrorMessage name="email" />
          </div>
        </div>

        {/* Button */}
        <button
          className="
            self-end border cursor-pointer bg-orange-400 
            px-3 py-1.5 rounded-md 
            text-sm sm:text-base
            sm:self-center md:self-end
            w-full sm:w-auto
          "
        >
          {isUpdate ? "Update" : "Add"} contact
        </button>
      </Form>
    </Formik>
  </Model>
</div>

  );
};

export default AddandUpdataContact;
