import ButtonLinks from './Subcomponents/ButtonLinks';

function Header() {
  return (
    <div className="sticky top-0 z-10 flex items-center justify-between px-2 py-2 md:top-24 bg-primary-300 md:px-20 md:py-4 lg:px-24 xl:px-32">
      <h2 className="font-bold tracking-widest text-white uppercase">
        StarbucksĀ® Rewards
      </h2>

      <ButtonLinks className="flex-shrink-0 text-white border-white md:hidden">
        Join in the app
      </ButtonLinks>
    </div>
  );
}

export default Header;
