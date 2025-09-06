"use client";
export default function User({ params }) {
  return (
    <div>
      <h1>{params.id}</h1>
    </div>
  );
}
