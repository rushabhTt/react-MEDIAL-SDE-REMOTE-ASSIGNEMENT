import React from "react";

const Card = ({ children, className, ...props }) => {
  return (
    <div className={`bg-white shadow-md rounded-lg ${className}`} {...props}>
      {children}
    </div>
  );
};

Card.Header = ({ children, className, ...props }) => {
  return (
    <div className={`px-6 py-4 border-b ${className}`} {...props}>
      {children}
    </div>
  );
};

Card.Title = ({ children, className, ...props }) => {
  return (
    <h2 className={`text-xl font-semibold ${className}`} {...props}>
      {children}
    </h2>
  );
};

Card.Content = ({ children, className, ...props }) => {
  return (
    <div className={`px-6 py-4 ${className}`} {...props}>
      {children}
    </div>
  );
};

export { Card };
