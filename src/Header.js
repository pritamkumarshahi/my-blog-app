import { PlusCircleIcon } from '@heroicons/react/24/solid'
import React from "react";

export default function Header({
    setModalState,
    setDetailsPage
}) {
    const setToMainPage = () => {
        setModalState(false)
        setDetailsPage(false)
    } 
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="title-font font-medium text-white mb-4 md:mb-0" onClick={() => setToMainPage()}>
            All Blogs
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
        </nav>
        <button 
        onClick={() => setModalState(true)}
        class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded inline-flex items-center">
            <span>Create Blog</span>
            <PlusCircleIcon className="w-4 h-5 ml-1" />
        </button>
      </div>
    </header>
  );
}