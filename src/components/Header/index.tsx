import React, { useState } from "react";
import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";


type HeaderProps = {
  onClick: () => void;
};


export function Header({ onClick }: HeaderProps) {
 

  return (

    <>
      <header className={styles.header}>
        {/* This is simply to show you how to use helper functions */}
        <h1>{uppercase("bcit")} Assignment Tracker</h1>
        <form className={styles.newAssignmentForm}>
          <input
            placeholder="Add a new assignment"
            type="text"
        
          />
          <button type="button" onClick={onClick}>
            Create <AiOutlinePlusCircle size={20} />
          </button>
        </form>
      </header>

    </>
  );
}
