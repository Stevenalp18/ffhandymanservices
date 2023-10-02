import { useEffect, useState } from "react";

export const IMAGE_CAROUSEL = [
  {
    id: 0,
    image: {
      url: "/assets/exterior-home-1.jpeg",

      alt: "Large Exterior of home being painted",
    },
  },
  {
    id: 1,
    image: {
      url: "/assets/kitchen-remodel-1.jpeg",
      alt: "Kitchen Remodeling Finished Work",
    },
  },
  {
    id: 2,
    image: {
      url: "/assets/kitchen-remodel-2.jpeg",
      alt: "Changed Countertop and Backsplash in Kitchen",
    },
  },
  {
    id: 3,
    image: {
      url: "/assets/kitchen-remodel-3.jpeg",
      alt: "Cabinets Repainted in kitchen",
    },
  },
  {
    id: 4,
    image: {
      url: "/assets/basement-floor-1.jpeg",
      alt: "Changed the basement wooden floors",
    },
  },
  {
    id: 5,
    image: {
      url: "/assets/bathroom-renovation-1.jpeg",
      alt: "Renovated the bathroom completely",
    },
  },
  {
    id: 6,
    image: {
      url: "/assets/patio-paint.jpeg",
      alt: "Patio Painted in gray",
    },
  },
  {
    id: 7,
    image: {
      url: "/assets/deck-work-1.jpeg",
      alt: "Deck cleaned, prepped, power washed, and stained",
    },
  },
];

export default function Hero() {
  const [count, setCount] = useState(0);
  const [currentImage, setCurrentImage] = useState(
    IMAGE_CAROUSEL[count].image.url
  );
  useEffect(() => {
    setCurrentImage(IMAGE_CAROUSEL[count].image);
  }, [count]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % IMAGE_CAROUSEL.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="z-0 pt-0 md:pt-20">
        <div className="relative w-full lg:h-[800px] md:h-[700px] h-screen pb-1 border-2">
          <img
            src={currentImage.url}
            alt={IMAGE_CAROUSEL[count].image.alt}
            className="w-full h-full object-cover blur-[2px]"
          />
          <div className="absolute left-0 right-0 top-0 bottom-40 m-auto w-4/5 md:w-3/5 lg:w-2/5 text-center flex justify-center align-middle">
            <div className="my-auto rounded-xl px-6 pb-6">
              <div className="text-center">
                <img
                  src="/assets/logo-black.svg"
                  alt="Black Logo"
                  width={200}
                  className="m-auto "
                />
                <h1 className="text-5xl text-black leading-relaxed font-['Young_Serif']">
                  FF HANDYMAN SERVICES
                </h1>
                <p className="text-3xl text-black font-['Young_Serif']">
                  DC | MD | VA
                </p>
              </div>
              {/* <div className="flex justify-center gap-4">
                <button
                  className="relative bg-slate-100/50 p-1 rounded-xl"
                  onClick={() => {
                    if (count - 1 === -1) {
                      setCount(IMAGE_CAROUSEL.length - 1);
                    } else if (count !== -1) {
                      setCount(count - 1);
                    }
                  }}
                >
                  <img src="./left-arrow.png" width={24} alt="left-arrow" />
                </button>
                <button
                  className="relative bg-slate-100/50 rounded-xl p-1"
                  onClick={() => {
                    if (count + 1 === IMAGE_CAROUSEL.length) {
                      setCount(count - IMAGE_CAROUSEL.length + 1);
                    } else if (count < IMAGE_CAROUSEL.length) {
                      setCount(count + 1);
                    }
                  }}
                >
                  <img src="./right-arrow.png" width={24} alt="right-arrow" />
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
