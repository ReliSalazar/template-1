import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";

function Features() {
  return (
    <div className="features-container container mx-auto">
      <div
        className="
        features-about
        text-center
        flex flex-col
        justify-center
        items-center
        gap-5
        sm:px-20
        p-5
      "
      >
        <h2 className="features-title font-black text-xl sm:text-2xl">
          Lorem ipsum dolor sit amet.
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum est
          soluta porro ad quasi laborum consectetur eveniet quia placeat saepe
          vel assumenda quae fugiat cumque qui magnam deleniti magni dolor,
          ipsum illo ut numquam! A in repudiandae cumque minus natus,
          reprehenderit eum, impedit nihil blanditiis unde debitis eos eaque
          officiis.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
          dolorum saepe odit sit earum dolor numquam! Molestias optio fugiat
          error quaerat reiciendis natus quidem necessitatibus nobis facilis
          voluptate. Sint laborum facilis fugiat quo, asperiores optio adipisci
          laudantium, commodi dolorum consequuntur voluptas at blanditiis? Ipsum
          necessitatibus cupiditate ab ducimus rerum adipisci!
        </p>
      </div>

      <div className="features flex flex-row flex-wrap justify-center p-10">
        <div className="feature basis-full sm:basis-1/3 p-5 md:p-10 flex-col text-center">
          <p className="text-2xl lg:text-4xl mb-5">
            <FontAwesomeIcon icon={["fas", "laptop-code"]} />
          </p>
          <p className="font-black text-lg md:text-xl lg:text-2xl mb-2">
            Lorem, ipsum dolor.
          </p>
          <p className="lg:text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum,
            earum.
          </p>
        </div>

        <div className="feature basis-full sm:basis-1/3 p-5 md:p-10 flex-col text-center">
          <p className="text-2xl lg:text-4xl mb-5">
            <FontAwesomeIcon icon={["fas", "rocket"]} />
          </p>
          <p className="font-black text-lg md:text-xl lg:text-2xl mb-2">
            Lorem, ipsum dolor.
          </p>
          <p className="lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            nostrum?
          </p>
        </div>

        <div className="feature basis-full sm:basis-1/3 p-5 md:p-10 flex-col text-center">
          <p className="text-2xl lg:text-4xl mb-5">
            <FontAwesomeIcon icon={["fas", "clock"]} />
          </p>
          <p className="font-black text-lg md:text-xl lg:text-2xl mb-2">
            Lorem, ipsum dolor.
          </p>
          <p className="lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            distinctio.
          </p>
        </div>

        <div className="feature basis-full sm:basis-1/3 p-5 md:p-10 flex-col text-center">
          <p className="text-2xl lg:text-4xl mb-5">
            <FontAwesomeIcon icon={["fas", "truck"]} />
          </p>
          <p className="font-black text-lg md:text-xl lg:text-2xl mb-2">
            Lorem, ipsum dolor.
          </p>
          <p className="lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            fugit!
          </p>
        </div>

        <div className="feature basis-full sm:basis-1/3 p-5 md:p-10 flex-col text-center">
          <p className="text-2xl lg:text-4xl mb-5">
            <FontAwesomeIcon icon={["fas", "shopping-cart"]} />
          </p>
          <p className="font-black text-lg md:text-xl lg:text-2xl mb-2">
            Lorem, ipsum dolor.
          </p>
          <p className="lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
            minima.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
