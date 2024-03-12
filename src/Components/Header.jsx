import getBg from "../API/bg";

export default function Header() {

  const style = {
    backgroundImage: `url(${getBg()})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <section style={style} className="xl:container hidden mx-auto md:flex justify-between">
      <div className="w-full bg-persian-blue-700 bg-opacity-55">
        <div className="xl:container mx-auto px-10 py-10 md:w-2/3">
          <div className="md:py-10 py-6">
            <h1 className="font-bold text-4xl text-white">
              Welcome to Movie-DB.
            </h1>
            <p className="text-2xl text-white">
              Source for all your favorite Movies, TV shows and more...
            </p>
          </div>
          <div className="w-full flex rounded-full border-2 border-black focus-within:ring focus-within:ring-ebony-clay-600 bg-white bg-opacity-80">
            <input
              className="w-full bg-transparent focus:outline-none indent-5 text-black"
              placeholder="Search for Movies, TV shows and more..."
              type="text"
            />
            <button className="btn rounded-full border border-gray-400 text-white bg-persian-blue-700 ">
              <span className="material-symbols-outlined">search</span>
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
