"use client";
import React from "react";
import { InlineWidget } from "react-calendly";

const SelectDate = () => {
  return (
    <div className="App px-6 sm:px-4">
      <InlineWidget url="https://calendly.com/magentodeveloper1993" />
    </div>
  );
};

export default SelectDate;