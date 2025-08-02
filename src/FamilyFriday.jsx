// FamilyFriday.jsx
// React app to reveal family photos, birthdays, and their shared Friday coincidence

import sasha1 from './photos/sasha1.jpg';
import sasha2 from './photos/sasha2.jpg';
import ira1 from './photos/ira1.jpg';
import ira2 from './photos/ira2.jpg';
import neta1 from './photos/neta1.jpg';
import neta2 from './photos/neta2.jpg';
import nomi1 from './photos/nomi1.jpg';
import nomi2 from './photos/nomi2.jpg';
import neo1 from './photos/neo1.jpg';
import neo2 from './photos/neo2.jpg';
import bianca1 from './photos/bianca1.jpg';
import bianca2 from './photos/bianca2.jpg';

import React, { useState } from 'react';
import './FamilyFriday.css';

const family = [
  { name: 'Sasha (You)', dob: '1979-07-06', photo1: sasha1, photo2: sasha2 },
  { name: 'Ira (Wife)', dob: '1981-07-31', photo1: ira1, photo2: ira2 },
  { name: 'Neta (Older Daughter)', dob: '2010-10-08', photo1: neta1, photo2: neta2 },
  { name: 'Nomi (Younger Daughter)', dob: '2015-10-16', photo1: nomi1, photo2: nomi2 },
  { name: 'Neo (Dog)', dob: '2007-10-12', photo1: neo1, photo2: neo2 },
  { name: 'Bianca (Cat)', dob: '2017-07-07', photo1: bianca1, photo2: bianca2 },
];

function getWeekday(dateStr) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const d = new Date(dateStr);
  return days[d.getDay()];
}

export default function FamilyFriday() {
  const [clickStates, setClickStates] = useState(family.map(() => 0));

  const handleClick = (index) => {
    setClickStates((prev) => {
      const newStates = [...prev];
      newStates[index] = (newStates[index] + 1) % 3;
      return newStates;
    });
  };

  const allRevealed = clickStates.every((s) => s === 2);

  return (
    <div className="app-container">
      <h1>🌞 The Friday Family</h1>
      <p>Click each member or pet to reveal the mystery!</p>

      <div className="solar-circle">
        {family.map((member, idx) => (
          <div
            key={member.name}
            className={`orbit orbit-${idx}`}
            onClick={() => handleClick(idx)}
          >
            <div className="avatar">
              <img
                src={clickStates[idx] === 1 ? member.photo1 : member.photo2}
                alt={member.name}
              />
              <div className="label">{member.name}</div>
              {clickStates[idx] >= 1 && <div className="dob">DOB: {new Date(member.dob).toLocaleDateString()}</div>}
              {clickStates[idx] === 2 && <div className="weekday">Day: {getWeekday(member.dob)}</div>}
            </div>
          </div>
        ))}
      </div>

      {allRevealed && (
        <div className="coincidence">
          <h2>🎉 What Are the Odds?</h2>
          <p>All 6 were born on a <strong>Friday</strong>!</p>
          <p>Chance: (1/7)<sup>6</sup> = 1 in 117,649</p>
          <p>
            ⚡ That's 10× rarer than being struck by lightning twice!
          </p>
        </div>
      )}
    </div>
  );
}

<div style={{ marginTop: "40px", fontSize: "12px", color: "#888" }}>
  Debug path: {typeof window !== 'undefined' && window.location.pathname}
</div>
