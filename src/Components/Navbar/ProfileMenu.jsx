export default function ProfileMenu(props) {
  return (
    <div className="relative inline-block px-2.5 py-1 hidden">
      <button
        ref={props.menuRef}
        onClick={() => props.setIsOpenProfile(!props.isOpenProfile)}
        className="flex justify-center items-center px-2 py-1 border rounded-md border-gray-300"
      >
        <span className="mr-2">Dimitris</span>
        <span className="material-symbols-outlined text-gray-500">
          expand_more
        </span>
      </button>
      <div
        className={`${
          props.isOpenProfile ? "block" : "hidden"
        } absolute md:right-0 z-20 w-56 py-2 mt-2 overflow-hidden origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800`}
      >
        <a
          href="#"
          className="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <img
            className="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9"
            src="https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBibHVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=face&w=500&q=200"
            alt="jane avatar"
          />
          <div className="mx-1">
            <h1 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
              Dimitris
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              View Profile
            </p>
          </div>
        </a>

        <hr className="border-gray-200 dark:border-gray-700 " />

        <a
          href="#"
          className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Discussions
        </a>

        <a
          href="#"
          className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Lists
        </a>

        <a
          href="#"
          className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Ratings
        </a>

        <a
          href="#"
          className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Watchlist
        </a>

        <hr className="border-gray-200 dark:border-gray-700 " />

        <a
          href="#"
          className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Edit Profile
        </a>

        <a
          href="#"
          className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Settings
        </a>

        <hr className="border-gray-200 dark:border-gray-700 " />

        <a
          href="#"
          className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Sign Out
        </a>
      </div>
    </div>
  );
}
