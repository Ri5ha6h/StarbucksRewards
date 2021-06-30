import image from '../images/025.png';

function Favorite() {
  return (
    <>
      <section className="flex flex-col justify-center w-full pt-10 ">
        <div className="flex-1 pt-6 bg-primary-50">
          <h2 className="mt-2 text-xl font-medium text-center lg:text-3xl lg:font-semibold">
            Get your favorites for free
          </h2>
          <div className="max-w-xl mx-auto mt-5 lg:mt-10">
            <div className="flex justify-between py-5">
              <button className="flex-grow focus:outline-none">
                <h3 className="text-2xl font-medium">
                  25 <span className="text-base text-gold">★</span>
                </h3>
              </button>
              <button className="flex-grow focus:outline-none">
                <h3 className="text-2xl font-medium">
                  50 <span className="text-base text-gold">★</span>
                </h3>
              </button>
              <button className="flex-grow focus:outline-none">
                <h3 className="text-2xl font-medium">
                  150 <span className="text-base text-gold">★</span>
                </h3>
              </button>
              <button className="flex-grow focus:outline-none">
                <h3 className="text-2xl font-medium">
                  200 <span className="text-base text-gold">★</span>
                </h3>
              </button>
              <button className="flex-grow focus:outline-none">
                <h3 className="text-2xl font-medium">
                  400 <span className="text-base text-gold">★</span>
                </h3>
              </button>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center justify-center flex-1 py-10 bg-primary-100 lg:flex-row">
          <div className="flex justify-end flex-1">
            <img className="content-center lg:w-96" src={image} alt="25" />
          </div>
          <div className="flex-1">
            <h4 className="text-lg font-normal text-center lg:text-2xl lg:font-medium lg:text-left">
              Customize your drink
            </h4>
            <p className="py-4 text-center lg:py-5 lg:max-w-sm lg:text-left">
              Make your drink just right with an extra espresso shot, dairy
              substitute or a dash of your favorite syrup.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Favorite;
