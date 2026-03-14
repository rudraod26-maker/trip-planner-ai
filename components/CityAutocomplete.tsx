"use client";

import { useState } from "react";
import { destinations } from "@/lib/destinations";

type Props = {
  placeholder: string;
  onSelect: (value: string) => void;
};

export default function CityAutocomplete({ placeholder, onSelect }: Props) {

  const [query, setQuery] = useState("");
  const [results, setResults] = useState<typeof destinations>([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleChange = (value: string) => {

    setQuery(value);
    onSelect(value);

    if (value.length === 0) {
      setResults([]);
      setShowDropdown(false);
      return;
    }

    const filtered = destinations.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    setResults(filtered.slice(0, 6));
    setShowDropdown(true);
  };

  const selectDestination = (name: string) => {
    setQuery(name);
    setShowDropdown(false);
    setResults([]);
    onSelect(name);
  };

  return (
    <div className="relative w-full">

      <input
        value={query}
        onChange={(e) => handleChange(e.target.value)}
        placeholder={placeholder}
        className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {showDropdown && (
        <div className="absolute bg-white border rounded-lg w-full mt-1 shadow-lg z-20">

          {results.length > 0 ? (
            results.map((item) => (
              <div
                key={item.name}
                className="p-3 hover:bg-gray-100 cursor-pointer flex justify-between"
                onClick={() => selectDestination(item.name)}
              >
                <span>{item.name}</span>
              </div>
            ))
          ) : (
            <div className="p-3 text-sm text-gray-500">
              No suggestions. Press Enter to use "{query}"
            </div>
          )}

        </div>
      )}

    </div>
  );
}