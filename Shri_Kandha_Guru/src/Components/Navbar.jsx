import React from "react";
import { Link, Outlet } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";

export default function Navbar() {
  return (
    <>
      <div className="p-3 bg-slate-900 text-white">
        <ul className="flex w-full justify-between">
          <Link to="/">
            <li className="px-4 py-1 font-semibold">Shri Kandha Guru Tex</li>
          </Link>
          <div className="flex gap-3 mr-8">
            <Link to="/delivery">
              <li className="px-4 py-1 bg-gray-700 font-semibold bg-opacity-35 rounded-lg">
                Delivery
              </li>
            </Link>
            <Link to="/dyeing">
              <li className="px-4 py-1 bg-gray-700 font-semibold bg-opacity-35 rounded-lg">
                Dyeing
              </li>
            </Link>
            <Link to="/invoice">
              <li className="px-4 py-1 bg-gray-700 font-semibold bg-opacity-35 rounded-lg">
                Sales Invoice
              </li>
            </Link>
            <Link to="/account">
              <li className="text-2xl px-3 py-1 flex items-center bg-gray-700 font-bold bg-opacity-35 rounded-lg">
                <VscAccount></VscAccount>
              </li>
            </Link>
          </div>
        </ul>
      </div>
      <Outlet />
    </>
  );
}
