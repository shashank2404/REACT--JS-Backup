import React from "react";
import { useParams } from "react-router-dom";

export default function User() {
  const { userId } = useParams();

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold">User Page</h1>
      <p className="text-lg mt-4">User ID: {userId}</p>
    </div>
  );
}
