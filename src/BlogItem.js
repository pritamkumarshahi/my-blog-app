import React from "react";
import { UserCircleIcon } from '@heroicons/react/24/solid'

import { truncate } from "./utils/truncate";

const BlogItem = ({ id, title, content, author, date, setDetailsId }) => {
  return (
    <>
     <div class="max-h-64 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" id={id}>
        <dl class="text-xs font-medium flex items-center row-start-2 sm:row-start-3 lg:row-start-2">
        <dt class="sr-only">Reviews</dt>
        <dd class="text-indigo-600 flex items-center dark:text-indigo-400">
            <UserCircleIcon className="w-4 h-5 mr-1" />
            <span>{author}</span>
        </dd>
        <dd class="text-indigo-600 flex items-center dark:text-indigo-400 flex items-center ml-5">
            {date}
        </dd>
        </dl>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{truncate(content)}</p>
        <button 
        onClick={() => setDetailsId(id)}
        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </button>
    </div>
    </>
  );
};

export default BlogItem;
