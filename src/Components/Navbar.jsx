import { useState } from "react";
import logo from "../assets/logo/logo-line/svg/logo-no-background.svg";

  export default function Navbar(){

    return (
        <nav className="bg-seashell-200 flex justify-center">
            <div className="p-4">
                <a href="https://developer.themoviedb.org/docs/getting-started">
                    <img src={ logo } className="h-9" alt="Movie DB Logo" />
                </a>
            </div>
        </nav>
    )
  };