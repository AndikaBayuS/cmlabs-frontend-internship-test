import { Player } from "@lottiefiles/react-lottie-player";
import foodCarousel from "~/utils/lottie-food-carousel.json";

export default function Hero() {
  return (
    <div className="md:h96 bg-gray-100 text-gray-800">
      <div className="mx-auto flex h-full max-w-screen-lg flex-col-reverse items-center justify-between p-10 md:flex-row md:px-0">
        <div className="mt-10 md:mt-0">
          <p className="font-semibold">mealapp API website</p>
          <h3 className="mt-3 text-4xl font-semibold">
            See All The Delicious Foods
          </h3>
        </div>
        <div>
          <Player
            autoplay
            loop
            src={foodCarousel}
            style={{ height: "250px", width: "250px" }}
          />
        </div>
      </div>
    </div>
  );
}
