import React from "react";

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      ref={ref}
      {...props}
    />
  );
});

Textarea.displayName = "Textarea";

export { Textarea };
