import React, { useContext } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { BsBell } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { signIn, signOut, useSession } from "next-auth/react";
import { HiLogout } from "react-icons/hi";
import { GlobalContext } from "~/contexts/GlobalContextProvider";

const MainLayout = ({ children }: React.PropsWithChildren) => {
  const { data: sessionData, status } = useSession();
  const { setWriteModalOpen } = useContext(GlobalContext);

  return (
    <div className="flex h-full w-full flex-col">
      <header className="flex h-20 flex-row items-center justify-around border-b border-gray-200 bg-white py-3">
        <div>
          <IoReorderThreeOutline className="text-3xl text-gray-600" />
        </div>
        <div className="text-xl font-thin">MyLogo</div>
        {status === "authenticated" ? (
          <div className="flex items-center space-x-4">
            <div>
              <BsBell className="text-2xl text-gray-600" />
            </div>

            <div>
              <div className="h-5 w-5 rounded-full bg-gray-600"></div>
            </div>

            <div>
              <button
                onClick={() => setWriteModalOpen(true)}
                className="flex items-center space-x-3 rounded border border-gray-200 px-4 py-2 transition
                                hover:border-gray-900 hover:text-gray-900"
              >
                <div>Write</div>
                <div>
                  <FiEdit className="text-xl" />
                </div>
              </button>
            </div>
            <div>
              <button
                onClick={() => signOut()}
                className="flex items-center space-x-3 rounded border border-gray-200 px-4 py-2 transition
                                hover:border-gray-900 hover:text-gray-900"
              >
                <div>Logout</div>
                <div>
                  <HiLogout className="text-xl" />
                </div>
              </button>
            </div>
          </div>
        ) : (
          <div>
            <button
              onClick={() => signIn()}
              className="flex items-center space-x-3 rounded border border-gray-200 px-4 py-2 transition
                                hover:border-gray-900 hover:text-gray-900"
            >
              Signin
            </button>
          </div>
        )}
      </header>

      {children}
    </div>
  );
};

export default MainLayout;
