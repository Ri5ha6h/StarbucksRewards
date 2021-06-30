import ButtonLinks from './Subcomponents/ButtonLinks';

function Header() {
  return (
    <div className="sticky top-0 flex items-center justify-between px-2 py-2 bg-primary-300 md:px-20 md:py-4 lg:px-24 xl:px-32">
      <h2 className="font-bold tracking-widest text-white uppercase">
        Starbucks® Rewards
      </h2>

      <ButtonLinks className="flex-shrink-0 border-white text-white  md:hidden">Join in the app</ButtonLinks>
    </div>
  );
}

export default Header;
