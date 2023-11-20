"use client";

import { useEffect, useState } from "react";

type VisitorCounterProps = {
  style: string;
};

export default function VisitorCounter({ style }: VisitorCounterProps) {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    fetch("/api/visitor")
      .then((res) => res.json())
      .then((data) => {
        setVisitorCount(data.count);
      })
      .catch((error) => {
        console.error("Error fetching visitor count", error);
      });
  }, []);

  return <div className={style}>Visiteurs total: {visitorCount}</div>;
}
