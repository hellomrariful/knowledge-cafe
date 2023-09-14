import profile from '../../assets/images/profile.png'

const Header = () => {
  return (
    <header className='flex justify-between mt-12  items-center border-b-2 pb-4'>
      <h1 className="text-center text-3xl">Knowledge Cafe</h1>
      <img src={profile} alt="" />

    </header>
  );
};

export default Header;
