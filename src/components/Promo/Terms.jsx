import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const PromoTerms = ({ terms }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-3">Terms and Conditions</h3>
      <ul className="space-y-2">
        {terms.map((term, index) => (
          <li key={index} className="flex items-start">
            <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
            <span>{term}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PromoTerms;
