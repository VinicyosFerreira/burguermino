import Header from '../components/Header';
import { MAIN_BURGERS } from '../constants/MainBurgers';
import MenuBurgersDialog from '../components/MenuBurgersDialog';
import { useState } from 'react';
import Button from '../components/Button';
import Footer from '../components/Footer';
const MenuPage = () => {
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [burger, setBurger] = useState();
  const openDialog = (burger) => {
    setBurger(burger);
    setIsOpenDialog(true);
  };

  const closeDialog = () => {
    setIsOpenDialog(false);
  };

  return (
    <div>
      <Header />
      <h2 className="my-10 text-center text-2xl font-semibold text-primary">
        Menu de burguers
      </h2>
      <div className="mx-auto mb-14 w-[90%]">
        <div className="grid grid-cols-4 grid-rows-2 place-items-center gap-3">
          {MAIN_BURGERS.map((burger) => (
            <div key={burger.id} className="relative">
              <p className="text-center font-semibold">{burger.name}</p>
              <img
                src={burger.imgUrl}
                alt=""
                className="h-[200px] w-[320px] rounded-lg object-cover"
              />
              <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center opacity-0 backdrop-blur-sm transition-all delay-100 duration-500 hover:opacity-100">
                <Button
                  className="w-[200px]"
                  onClick={() => openDialog(burger)}
                >
                  Mais detalhes
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isOpenDialog && (
        <MenuBurgersDialog burger={burger} closeDialog={closeDialog} />
      )}
      <Footer />
    </div>
  );
};

export default MenuPage;
