import logo_dark from "../assets/logo/logo-dark/svg/logo-no-background.svg";
import logo_light from "../assets/logo/logo-line/svg/logo-no-background.svg";

export default function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-base-100 border-t border-persian-blue-700 dark:text-white">
      <aside>
        <img src={ logo_dark } className="dark:block hidden h-7" alt="Movie-DB logo" />
        <img src={ logo_light } className="dark:hidden block h-7" alt="Movie-DB logo" />
        <p className="font-bold">
          Movie-DB Ltd.<br />
          Your Movie source since Today
        </p>
        <p>Copyright © 2024 - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a>
            <i class="fa-brands fa-github fa-2xl"></i>
          </a>
          <a>
            <i class="fa-brands fa-youtube fa-2xl"></i>
          </a>
          <a>
            <i class="fa-brands fa-facebook fa-2xl"></i>
          </a>
        </div>
      </nav>
    </footer>
  );
}
