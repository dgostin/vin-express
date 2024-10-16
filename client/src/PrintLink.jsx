import React from "react";

function PrintLink() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button className="bg-green-600 py-3 px-5 rounded-lg" onClick={handlePrint}>
      Print
    </button>
  );
}

export default PrintLink;
