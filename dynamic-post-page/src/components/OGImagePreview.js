// File: components/OGImagePreview.js
import React from "react";

const OGImagePreview = ({ ogImage, isSubmitted }) => {
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">OG Image Preview</h2>
      {ogImage ? (
        <img src={ogImage} alt="OG Image" className="w-full h-auto" />
      ) : (
        <p>Loading OG Image...</p>
      )}
      {isSubmitted && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">
            Meta Tag (added to HTML):
          </h3>
          <code className="bg-gray-100 p-2 rounded block break-all">
            {`<meta property="og:image" content="${ogImage}" />`}
          </code>
        </div>
      )}
    </div>
  );
};

export default OGImagePreview;
