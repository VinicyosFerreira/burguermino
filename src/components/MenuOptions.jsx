import { MENU_OPTIONS } from '../constants/MenuOptions';
import Button from '../components/Button';

const MenuOptions = ({ optionType, openDialog, title }) => {
  const optionTypeFunction = () => {
    if (optionType === 'BURGER') {
      const burgerOptions = MENU_OPTIONS.filter(
        (burger) => burger.optionType === 'BURGER'
      );
      return burgerOptions;
    }

    if (optionType === 'DRINK') {
      const drinkOptions = MENU_OPTIONS.filter(
        (drink) => drink.optionType === 'DRINK'
      );
      return drinkOptions;
    }
  };

  const optionTypeSelected = optionTypeFunction();

  return (
    <>
      <h2 className="my-10 text-center text-2xl font-semibold text-primary">
        {title}
      </h2>
      <div className="mx-auto mb-14 w-[90%]">
        <div className="grid grid-cols-4 grid-rows-2 place-items-center gap-3">
          {optionTypeSelected.map((optionType) => (
            <div key={optionType.id} className="relative">
              <p className="text-center font-semibold">{optionType.name}</p>
              <img
                src={optionType.imgUrl}
                alt={optionType.name}
                className="h-[200px] w-[320px] rounded-lg"
              />
              <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center opacity-0 backdrop-blur-sm transition-all delay-100 duration-500 hover:opacity-100">
                <Button
                  className="w-[200px]"
                  onClick={() => openDialog(optionType)}
                >
                  Mais detalhes
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MenuOptions;
