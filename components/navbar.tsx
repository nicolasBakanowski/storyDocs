import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  MdClose,
  MdWork,
  MdMenu,
  MdExitToApp,
} from "react-icons/md";
import { RootState } from "@/redux/store";
import { logout } from "../redux/slices/userSlice";
import { changeToAdmin } from "@/redux/actions/userAction";
const Navbar = () => {
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const isIndexPage = router.pathname === "/";

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const openMenu = () => {
    setMenuOpen(true);
  };
  const { isAdmin, username, token } = useSelector((state: RootState) => state.user);

  return (
    <nav className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center relative">
      {menuOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
      )}

      {!isIndexPage ? (
        <button onClick={() => router.back()}>
          <div className="flex items-center">
            <span>Volver</span>
          </div>
        </button>
      ) : (
        <button>
          <div className="flex items-center px-9"></div>
        </button>
      )}
      <div className="text-2xl font-bold flex w-1/3 justify-center">
        <Link href="/">StoryDocs</Link>
      </div>
      <div className="flex items-center space-x-5">
        {username ? (
          <div className="relative inline-block text-left z-50">
            <button
              className="text-white focus:outline-none"
              onClick={toggleMenu}
            >
              <div className="flex items-center space-x-1" onClick={openMenu}>
                <MdMenu size={40} className="pt-2" />
              </div>
            </button>
            <div
              className={`${menuOpen ? "translate-x-0" : "translate-x-full"
                } fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-4 transform transition-transform ease-in-out duration-300 z-50`}
            >
              <div className="flex items-center pb-6">
                <span className="text-gray-950">{username}</span>
                <button className="text-gray-700 pl-10" onClick={toggleMenu}>
                  <MdClose size={24} />
                </button>
              </div>

              <ul>
                {isAdmin && (
                  <li className="mb-2  py-2 border-t border-gray-300 my-5">
                    <button
                      className="flex items-center space-x-2 text-gray-700 hover:bg-gray-100 py-2 rounded-lg"
                      onClick={() => {
                        router.push("/admin");
                        toggleMenu();
                      }}
                    >
                      <MdWork size={20} />
                      <span>Admin Panel</span>
                    </button>
                  </li>
                )}
                <li>
                  <button
                    className="flex items-center space-x-2 text-red-600 hover:bg-gray-100 py-2 px-3 rounded-lg"
                    onClick={() => {
                      dispatch(logout());
                    }}
                  >
                    <MdExitToApp size={20} />
                    <span>Cerrar Sesión</span>
                  </button>
                  <button
                    key={`${username}-${token}`}
                    className="flex items-center space-x-2 text-green-600 hover:bg-gray-100 py-2 px-3 rounded-lg"
                    onClick={() => {
                      username && token &&
                        dispatch(changeToAdmin(username, token) as any);
                    }}
                  >
                    <MdExitToApp size={20} />
                    <span>cambiar a admin</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <Link href="/login" className="block md:inline">
            <button className="text-white focus:outline-none">
              <div className="flex items-center space-x-1">
                <span>Login</span>
              </div>
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};


export default Navbar;
