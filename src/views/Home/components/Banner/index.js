import "./index.css";

function Banner() {
  return (
    <div className="banner mb-5">
      <div className="background">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#70d6ff"
            fillOpacity="1"
            d="M0,64L48,80C96,96,192,128,288,149.3C384,171,480,181,576,176C672,171,768,149,864,133.3C960,117,1056,107,1152,138.7C1248,171,1344,245,1392,282.7L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto flex flex-col sm:flex-row">
        <div className="img-container basis-1/2 flex justify-center items-center p-0 sm:pl-5">
          <img
            src="https://images.unsplash.com/photo-1644866686516-0da93fe45a9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
            alt=""
            className="banner-img"
          />
        </div>
        <div className="text basis-1/2 p-5 sm:p-10 flex flex-col justify-center">
          <h1 className="font-black text-3xl sm:text-4xl mb-5">
            Lorem ipsum <br />
            dolor sit amet <br />
            consectetur adipisicing elit.
          </h1>

          <span className="mb-5">Lorem ipsum dolor sit amet.</span>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log("uwu");
            }}
            className="banner-form flex"
          >
            <input
              type="text"
              v-model="foo"
              name="foo"
              placeholder="lorem"
              className="custom-input border-none basis-4/5 p-2"
            />
            <button type="submit" className="submit basis-1/5">
              send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Banner;
