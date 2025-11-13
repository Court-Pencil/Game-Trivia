import React from "react";

export default function EndScreen({onRestart, results}) {
   const { score, total } = results || {};
  const percentage = total ? ((score / total) * 100).toFixed(2) : 0;
  return (

  )
}