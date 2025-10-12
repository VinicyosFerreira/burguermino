import { createPortal } from 'react-dom';
import Button from '../components/Button';
const MenuBurgersDialog = ({ burger, closeDialog }) => {
  return (
    <>
      {createPortal(
        <div className="fixed left-0 top-0 z-50 flex min-h-screen w-full items-center justify-center backdrop-blur">
          <div className="w-[520px] rounded-xl bg-background/75">
            <div className="text-end">
              <Button
                className="text-center text-xl"
                variant={{ color: 'ghost' }}
                onClick={closeDialog}
              >
                X
              </Button>
            </div>

            <h3 className="texl-lg text-center">Detalhes do burguer</h3>

            <div className="my-3 flex gap-5 px-4 py-4">
              <div className="space-y-2">
                <p className="font-bold">{burger.name}</p>

                <div className="w-[220px]">
                  <img
                    src={burger.imgUrl}
                    className="rounded-lg object-cover"
                    alt={burger.name}
                  />
                </div>
              </div>

              <div className="flex flex-col justify-center space-y-1">
                <p className="text-sm font-semibold">Ingredientes</p>
                <p>{burger.description}</p>
                <p className="font-semibold">R${burger.price}</p>
                <Button className="w-[220px]">Adicionar ao carrinho</Button>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default MenuBurgersDialog;
