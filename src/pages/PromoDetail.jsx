import React from "react";
import { useParams } from "react-router-dom";
import promotions from "../components/Promo/Data";
import PromoImage from "../components/Promo/Image";
import PromoTerms from "../components/Promo/Terms";
import Promo from "../components/Home/Promo";

const PromoDetail = () => {
  const { id } = useParams();
  const promo = promotions.find((p) => p.id === parseInt(id));

  if (!promo) {
    return (
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <strong className="font-bold">Error! </strong>
        <span className="block sm:inline">Promotion not found</span>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="w-full max-w-4xl mx-auto overflow-hidden">
        <PromoImage promo={promo} />
        <div className="p-6">
          <p className="text-lg mb-6">{promo.description}</p>
          <PromoTerms terms={promo.termsAndConditions} />
          <button
            className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
            onClick={() => alert("Offer claimed!")}
          >
            Claim Offer
          </button>
        </div>
      </div>
      <Promo />
    </div>
  );
};

export default PromoDetail;
