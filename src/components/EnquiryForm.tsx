"use client";

import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Yup Validation Schema for the Enquiry Form
const EnquirySchema = Yup.object().shape({
  parentName: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Parent's name is required! 👩‍👦"),
  kidName: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Explorer's name is required! 🎒"),
  kidAge: Yup.number()
    .typeError("Please enter a valid age number 🎂")
    .integer("Age must be a whole number")
    .min(3, "Must be at least 3 years old to enroll")
    .max(18, "Must be under 18 years old to enroll")
    .required("Explorer's age is required! 🎂"),
  gradeLevel: Yup.string()
    .required("Pathway selection is required! 🎯"),
  email: Yup.string()
    .email("Oops, that looks like an invalid email! ✉️")
    .required("Email address is required! ✉️"),
  message: Yup.string()
    .max(500, "Message is too long (max 500 characters)"),
});

export default function EnquiryForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const initialValues = {
    parentName: "",
    kidName: "",
    kidAge: "",
    gradeLevel: "Kindergarten",
    email: "",
    message: "",
  };

  const handleSubmit = (values: typeof initialValues, { resetForm }: { resetForm: () => void }) => {
    // Mimic API submission
    console.log("Form Submitted:", values);
    setIsSubmitted(true);
    resetForm();
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12 flex flex-col items-center gap-6 relative z-10 animate-float-medium">
        <div className="w-24 h-24 rounded-full bg-emerald-100 border-4 border-emerald-400 flex items-center justify-center text-5xl">
          🎈
        </div>
        <h3 className="font-header text-2xl sm:text-3xl font-bold text-emerald-800">Blast Off Successful!</h3>
        <p className="text-slate-600 font-medium max-w-md">
          Yay! Your query spaceship has launched safely. We will read your message and send an answer owl to your inbox very soon!
        </p>
        <button
          type="button"
          onClick={() => setIsSubmitted(false)}
          className="playful-btn bg-indigo-600 hover:bg-indigo-700 text-white font-header font-bold text-sm px-6 py-2.5 rounded-full"
        >
          Send another query
        </button>
      </div>
    );
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={EnquirySchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form className="space-y-6 relative z-10">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Parent Name field */}
            <div>
              <label htmlFor="parentName" className="block text-sm font-bold text-slate-700 mb-2 font-header">
                Parent's Name 👩‍👦
              </label>
              <Field
                id="parentName"
                name="parentName"
                type="text"
                placeholder="e.g., Jane Kapoor"
                className={`block w-full rounded-2xl border-2 px-4 py-3 text-slate-800 font-medium transition-colors outline-none ${
                  touched.parentName && errors.parentName
                    ? "border-pink-400 focus:border-pink-500 bg-pink-50/20"
                    : "border-indigo-100 hover:border-indigo-300 focus:border-indigo-500"
                }`}
              />
              <ErrorMessage
                name="parentName"
                component="div"
                className="text-pink-500 text-xs font-bold mt-1.5 flex items-center gap-1"
              />
            </div>

            {/* Kid Name field */}
            <div>
              <label htmlFor="kidName" className="block text-sm font-bold text-slate-700 mb-2 font-header">
                Explorer's Name (Kid) 🎒
              </label>
              <Field
                id="kidName"
                name="kidName"
                type="text"
                placeholder="e.g., Kabir"
                className={`block w-full rounded-2xl border-2 px-4 py-3 text-slate-800 font-medium transition-colors outline-none ${
                  touched.kidName && errors.kidName
                    ? "border-pink-400 focus:border-pink-500 bg-pink-50/20"
                    : "border-indigo-100 hover:border-indigo-300 focus:border-indigo-500"
                }`}
              />
              <ErrorMessage
                name="kidName"
                component="div"
                className="text-pink-500 text-xs font-bold mt-1.5 flex items-center gap-1"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Kid Age field */}
            <div>
              <label htmlFor="kidAge" className="block text-sm font-bold text-slate-700 mb-2 font-header">
                Explorer's Age 🎂
              </label>
              <Field
                id="kidAge"
                name="kidAge"
                type="number"
                placeholder="e.g., 8"
                min="3"
                max="18"
                className={`block w-full rounded-2xl border-2 px-4 py-3 text-slate-800 font-medium transition-colors outline-none ${
                  touched.kidAge && errors.kidAge
                    ? "border-pink-400 focus:border-pink-500 bg-pink-50/20"
                    : "border-indigo-100 hover:border-indigo-300 focus:border-indigo-500"
                }`}
              />
              <ErrorMessage
                name="kidAge"
                component="div"
                className="text-pink-500 text-xs font-bold mt-1.5 flex items-center gap-1"
              />
            </div>

            {/* Grade level select */}
            <div>
              <label htmlFor="gradeLevel" className="block text-sm font-bold text-slate-700 mb-2 font-header">
                Admissions Pathway 🎯
              </label>
              <Field
                as="select"
                id="gradeLevel"
                name="gradeLevel"
                className="block w-full rounded-2xl border-2 border-indigo-100 hover:border-indigo-300 focus:border-indigo-500 focus:ring-0 px-4 py-3 text-slate-800 font-medium transition-colors outline-none bg-white"
              >
                <option value="Kindergarten">Kindergarten (Ages 3-5)</option>
                <option value="Primary School">Primary School (Ages 6-10)</option>
                <option value="Middle School">Middle School (Ages 11-13)</option>
                <option value="High School">High School (Ages 14-17)</option>
              </Field>
              <ErrorMessage
                name="gradeLevel"
                component="div"
                className="text-pink-500 text-xs font-bold mt-1.5 flex items-center gap-1"
              />
            </div>
          </div>

          {/* Email field */}
          <div>
            <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2 font-header">
              Email Address ✉️
            </label>
            <Field
              id="email"
              name="email"
              type="email"
              placeholder="e.g., family@email.com"
              className={`block w-full rounded-2xl border-2 px-4 py-3 text-slate-800 font-medium transition-colors outline-none ${
                touched.email && errors.email
                  ? "border-pink-400 focus:border-pink-500 bg-pink-50/20"
                  : "border-indigo-100 hover:border-indigo-300 focus:border-indigo-500"
              }`}
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-pink-500 text-xs font-bold mt-1.5 flex items-center gap-1"
            />
          </div>

          {/* Message field */}
          <div>
            <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2 font-header">
              What are your explorer's favorite topics? 🚀
            </label>
            <Field
              as="textarea"
              id="message"
              name="message"
              rows={4}
              placeholder="e.g., Kabir loves drawing planets and building with blocks!"
              className="block w-full rounded-2xl border-2 border-indigo-100 hover:border-indigo-300 focus:border-indigo-500 focus:ring-0 px-4 py-3 text-slate-800 font-medium transition-colors outline-none resize-none"
            />
            <ErrorMessage
              name="message"
              component="div"
              className="text-pink-500 text-xs font-bold mt-1.5 flex items-center gap-1"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full playful-btn bg-pink-500 hover:bg-pink-600 text-white font-header font-bold text-lg py-4 rounded-2xl flex items-center justify-center gap-2 disabled:opacity-55"
            >
              {isSubmitting ? "Launching..." : "Launch Spaceship! 🚀"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
