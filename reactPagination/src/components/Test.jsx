import React, { useEffect, useRef } from "react";

const Test = () => {

  const boxRef = useRef(null);

  useEffect(() => {

    const observer = new IntersectionObserver((entries) => {
        
        
        const target = entries[0];

      console.log("taregt off observer",target)
      
      console.log("Visible?", target.isIntersecting);
      console.log("Visible?", target.isVisible);
      
    });

    console.log(observer)
    
    observer.observe(boxRef.current);

    return () => {
      observer.disconnect();
    };

  }, []);

  return (
    <div>

      <div className="h-screen">
        Scroll down
      </div>

      <div
        ref={boxRef}
        className="h-20 bg-red-500"
      >
        WATCH ME
      </div>

    </div>
  );
};

export default Test;