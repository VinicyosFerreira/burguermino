import { createPortal } from 'react-dom';
import Button from '../components/Button';

const MenuOptionsDialog = ({ optionType, closeDialog }) => {
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

            <h3 className="texl-xl text-center font-bold">{optionType.name}</h3>

            <div className="my-3 flex items-center gap-5 px-4 py-4">
              <div className="space-y-2">
                <div className="w-[220px]">
                  <img
                    src={optionType.imgUrl}
                    className="rounded-lg object-cover"
                    alt={optionType.name}
                  />
                </div>
              </div>

              <div className="flex flex-col justify-center space-y-1">
                <p className="text-sm font-semibold">Descrição</p>
                <p>{optionType.description}</p>
                <p className="font-semibold">R${optionType.price}</p>
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

export default MenuOptionsDialog;
