

function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
        <img width="40" height="40" src="/img/logo.svg" alt="logo" />
          <div className="ml-15">
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>

          <ul className="d-flex">
            <li className="mr-30">
              <img width="18" height="18" src="/img/card.svg" alt="card" />
              <span className="ml-30">1205 грн.</span>
            </li>
            <li >
              <img src="/img/user.svg" alt="" />
            </li>
          </ul>
      </header>
      <div className="content p-40">
        <h1 className="mb-40">Все кроссовки</h1>
        <div className="sneakers">
          <div className="card">
            <img width="133" height="112" src="/img/sneakers/1.jpg" alt="sneakers" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>7000 грн</b>
              </div>
              <button className="">
                <img width="11" height="11" src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width="133" height="112" src="/img/sneakers/2.jpg" alt="sneakers" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>7000 грн</b>
              </div>
              <button className="">
                <img width="11" height="11" src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width="133" height="112" src="/img/sneakers/3.jpg" alt="sneakers" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>7000 грн</b>
              </div>
              <button className="">
                <img width="11" height="11" src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width="133" height="112" src="/img/sneakers/4.jpg" alt="sneakers" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>7000 грн</b>
              </div>
              <button className="">
                <img width="11" height="11" src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width="133" height="112" src="/img/sneakers/5.jpg" alt="sneakers" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>7000 грн</b>
              </div>
              <button className="">
                <img width="11" height="11" src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width="133" height="112" src="/img/sneakers/6.jpg" alt="sneakers" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>7000 грн</b>
              </div>
              <button className="">
                <img width="11" height="11" src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width="133" height="112" src="/img/sneakers/7.jpg" alt="sneakers" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>7000 грн</b>
              </div>
              <button className="">
                <img width="11" height="11" src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width="133" height="112" src="/img/sneakers/8.jpg" alt="sneakers" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>7000 грн</b>
              </div>
              <button className="">
                <img width="11" height="11" src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
