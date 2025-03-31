"use client";

import { useEffect, useState } from "react";

type BlogDetailsType = {
  title: string;
  content: string;
};

export const BlogDetails = ({ title, content }: BlogDetailsType) => {
  const [time, setTime] = useState<string>(title);
  const [isHydrated, setIsHydrated] = useState(false); // State to track hydration

  useEffect(() => {
    setTimeout(() => {
      setTime(""); // Set time to empty after first render (hydration)
      setIsHydrated(true); // Mark hydration as complete
    }, 2000);
  }, []);

  return (
    <div>
      <h1>
        {title} : {isHydrated ? time : "..."}{" "}
        {/* Show loading indicator before hydration */}
      </h1>
      <p>{content}</p>
    </div>
  );
};
