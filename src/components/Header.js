function Header() {
  return (
    <header className='d-flex justify-between align-center p-40'>
      <div className='d-flex align-center'>
        <img width='40' height='40' src='/img/logo.svg' alt='logo' />
        <div className='ml-15'>
          <h3 className='text-uppercase'>React Sneakers</h3>
          <p className='opacity-5'>Магазин лучших кроссовок</p>
        </div>
      </div>

      <ul className='d-flex'>
        <li className='mr-30'>
          <img width='18' height='18' src='/img/card.svg' alt='card' />
          <span className='ml-30'>1205 грн.</span>
        </li>
        <li>
          <img src='/img/user.svg' alt='' />
        </li>
      </ul>
    </header>
  );
}

export default Header;
