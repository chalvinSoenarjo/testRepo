import React, { useState } from 'react';
import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";

type AssignmentsProp = {
  tileCount: number;
};


/* I am in Assignments, with an S */
export function Assignments({ tileCount }: AssignmentsProp) {

  const [tiles, setTiles] = useState<number[]>([]);

  const addTile = () => {
    setTiles([...tiles, tiles.length + 1]);
  };

  const deleteTile = (index: number) => {
    const updatedTiles = [...tiles];
    updatedTiles.splice(index, 1);
    setTiles(updatedTiles);
  };

  // Add tiles based on the tileCount prop
  React.useEffect(() => {
    for (let i = tiles.length + 1; i <= tileCount; i++) {
      addTile();
    }
  }, [tileCount]);
  return (

    <>
      <section className={styles.assignments}> {/* This is the assignment panel */}


        <header className={styles.header}>{/*  This is the header panel, "created assingments" and "completed assignments are inside */}
          <div>
            <p>Created Assignments</p>
            <span> {tileCount} </span>
          </div>

          <div>
            <p className={styles.textPurple}>Completed Assignments</p>
            <span>1 of {tileCount} </span>
          </div>
        </header>

        <div>
          {tiles.map((tileNumber, index) => (
            <Assignment 
            key={index}
            tileNumber={tileNumber}
            onDelete={() => deleteTile(index)}/>
          ))}
        </div>
        {/* This is the list where the assignment tiles will go */}
        {/*  <div className={styles.list}>  

          
        <Assignment />
        <Assignment />
       
      </div> */}
      </section>
    </>
  );
}
