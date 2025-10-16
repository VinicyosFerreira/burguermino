import Header from '../components/Header';
import MenuBurgersDialog from '../components/MenuOptionsDialog';
import { useState } from 'react';
import Footer from '../components/Footer';
import MenuOptions from '../components/MenuOptions';

const MenuPage = () => {
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [optionType, setOptionType] = useState();
  const openDialog = (optionType) => {
    setOptionType(optionType);
    setIsOpenDialog(true);
  };

  const closeDialog = () => {
    setIsOpenDialog(false);
  };

  return (
    <div>
      <Header />
      <MenuOptions
        openDialog={openDialog}
        optionType="BURGER"
        title="Menu de burgers"
      />
      {isOpenDialog && (
        <MenuBurgersDialog optionType={optionType} closeDialog={closeDialog} />
      )}
      <MenuOptions
        openDialog={openDialog}
        optionType="DRINK"
        title="Menu de bebidas"
      />
      <Footer />
    </div>
  );
};

export default MenuPage;
