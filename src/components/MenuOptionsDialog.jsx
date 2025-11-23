import { createPortal } from 'react-dom';
import Button from '../components/Button';
import { ADD_CART } from '../actions/cart-action';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const MenuOptionsDialog = ({ optionType, closeDialog }) => {
  const { dispatchCart } = useContext(CartContext);

  return (
    <>
      {createPortal(
        <div className="fixed left-0 top-0 z-50 flex min-h-screen w-full items-center justify-center backdrop-blur">
          <div className="rounded-xl bg-background/75 md:w-[520px]">
            <div className="text-end">
              <Button
                className="text-center text-xl"
                variant={{ color: 'ghost' }}
                onClick={closeDialog}
              >
                X
              </Button>
            </div>

            <h3 className="texl-xl text-center font-bold">{optionType.name}</h3>

            <div className="my-3 flex flex-col items-center gap-5 py-4 file:px-4 md:flex-row">
              <div className="space-y-2">
                <div className="w-[220px]">
                  <img
                    src={optionType.imgUrl}
                    className="rounded-lg object-cover"
                    alt={optionType.name}
                  />
                </div>
              </div>

              <div className="flex flex-col justify-center space-y-1 p-4 md:p-0">
                <p className="text-sm font-semibold">Descrição</p>
                <p>{optionType.description}</p>
                <p className="font-semibold">R${optionType.price}</p>
                <Button
                  className="mx-auto w-[220px]"
                  onClick={() => ADD_CART(dispatchCart, optionType)}
                >
                  Adicionar ao carrinho
                </Button>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default MenuOptionsDialog;
