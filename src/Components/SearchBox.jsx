import { useEffect, useState } from "react";
import { APIContainer } from "../API/tmdb";
import Spline from "@splinetool/react-spline";

export default function SearcBox() {
  return (
    <div className="md:flex justify-around items-center">
      <div className="mx-7 md:mx-0 md:ml-10">
        <h1 className="text-4xl font-bold">Welcome to Movie-DB.</h1>
        <h2 className="text-2xl font-semibold">
          Your 2nd best source for Movies, TV Shows and People . . .
        </h2>
      </div>
      <div className="w-2/3 opacity-0 md:opacity-100">
        <Spline scene="https://prod.spline.design/WQ5KTeJT-5h28609/scene.splinecode" />
      </div>
    </div>
  );
}
