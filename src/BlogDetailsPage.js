import React from "react";
import { UserCircleIcon } from '@heroicons/react/24/solid'

const BlogDetails = ({ id, title, content, author, date }) => {
  return (
    <>
     <div style={{height: "100vh"}}class="max-h-full p-6 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700" id={id}>
        <dl class="text-xs font-medium flex items-center">
        <dt class="sr-only">Reviews</dt>
        <dd class="text-indigo-600 flex items-center dark:text-indigo-400">
            <UserCircleIcon className="w-4 h-5 mr-1" />
            <span>{author}</span>1              
        </dd>
        <dd class="text-indigo-600 flex items-center dark:text-indigo-400 flex items-center ml-4">
            {date}
        </dd>
        </dl>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{content}</p>
    </div>
    </>
  );
};

export default BlogDetails;
