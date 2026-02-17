"use client";
import { useState } from "react";
import "./../../(styles)/custom-dropdown.styles.css";

const regions = [
  "Filter by Region",
  "Africa",
  "Americas",
  "Asia",
  "Europe",
  "Oceania",
];

export default function CustomDropdown({ setFilter }: { setFilter: Function }) {
  const [selected, setSelected] = useState<string | null>("Filter by Region");
  const [open, setOpen] = useState(false);

  const handleSelect = (region: string) => {
    setSelected(region);
    setFilter(region);
    setOpen(false);
  };

  return (
    <div className="dropdown">
      <button
        className="dropdown-trigger"
        onClick={() => setOpen((prev) => !prev)}
      >
        {selected ?? "Filter by Region"}
      </button>

      {open && (
        <ul className="dropdown-menu">
          {regions
            .filter((r) => r !== selected)
            .map((region) => (
              <li key={region}>
                <button onClick={() => handleSelect(region)}>{region}</button>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}
