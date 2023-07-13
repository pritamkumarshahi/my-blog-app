import React from "react";

const CreateBlog = (props) => {
  return (
    <div className="flex flex-col w-full pt-6 sm:pt-0 bg-gray-50 p-20 mt-10">
      <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md">
        <form onSubmit={props.SaveBlog}>
          <div>
            <label
              htmlFor="author"
              className="block text-sm font-medium text-gray-700 undefined"
            >
              Author
            </label>
            <div className="flex flex-col items-start">
              <input
                type="text"
                name="author"
                required
                placeholder="write your name.."
                onChange={props.saveBlogAuthor}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 undefined"
            >
              Title
            </label>
            <div className="flex flex-col items-start">
              <input
                type="title"
                name="title"
                onChange={props.saveBlogTitle}
                required
                ref={props.getTitle}
                placeholder="write your blog title.."
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 undefined"
            >
              Content
            </label>
            <div className="flex flex-col items-start">
              <textarea
                id="message"
                rows="10"
                onChange={props.saveConent}
                required
                ref={props.getContent}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Write your thoughts here..."
              ></textarea>
            </div>
          </div>
          <div className="flex items-center justify-end mt-10">
            <button
                onClick={props.CancelBlog}
                className="bg-blue-500 font-semibold text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded inline-flex items-center inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out rounded-md false"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 font-semibold text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded inline-flex items-center inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out rounded-md false"
              >
              Save Change
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
