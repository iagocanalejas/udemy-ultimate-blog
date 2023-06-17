import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

type ModalProps = {
  title?: string;
  isOpen: boolean;
  onClose: () => void;
};

const Modal = ({
  title,
  isOpen,
  onClose,
  children,
}: React.PropsWithChildren<ModalProps>) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog onClose={() => onClose} className="relative z-50">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="fixed inset-0 flex items-center justify-center">
            <Dialog.Panel className="mx-auto max-w-sm rounded bg-white p-4">
              <Dialog.Title>{title}</Dialog.Title>

              {children}
            </Dialog.Panel>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;
