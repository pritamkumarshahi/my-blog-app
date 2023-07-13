import React, { useState, useRef } from "react";
import CreateBlog from "./BlogForm";
import BlogItem from "./BlogItem";
import BlogDetails from "./BlogDetailsPage";

import { formatDateTime } from "./utils/formateDate";

const BlogsList = ({
    isModalOpen,
    setModalState,
    showDetailsPage,
    setDetailsPage
}) => {
  // managing states below
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [getDetailsData, setDetailsData] = useState([]);
  const [allBlogs, setAllPosts] = useState([
    {
      id: 1,
      title: "React",
      date: 1689147879,
      author: "Pritam Kumar",
      content:
        "React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like "
    },
    {
      id: 2,
      title: "Photography",
      date: 1689147879,
      author: "Priya shahi",
      content:
        "Photography is the art, application, and practice of creating images by recording light, either electronically by means of an image sensor, or chemically by means of a light-sensitive material such as photographic film. Wikipedia"
    },
    {
        id: 3,
        title: "MobX",
        date: 1689147879,
        author: "Vikash shahi",
        content:
          "Anything that can be derived from the application state, should be. Automatically. MobX is a battle-tested library that makes state management simple and scalable by transparently applying functional reactive programming. The philosophy behind MobX is simple"
      },
      {
        id: 4,
        title: "Django",
        date: 1689147879,
        author: "Ayush Sharma",
        content:
          "Django is a free and open source, full-stack web application framework, written in Python. Django Python is a framework for perfectionists with deadlines. With it, you can build better Web apps in much less time, and in less code."
      },
      {
        id: 5,
        title: "MobX",
        date: 1689147879,
        author: "Vikash shahi",
        content:
          "Anything that can be derived from the application state, should be. Automatically. MobX is a battle-tested library that makes state management simple and scalable by transparently applying functional reactive programming. The philosophy behind MobX is simple"
      },
      {
        id: 6,
        title: "MobX",
        date: 1689147879,
        author: "Vikash shahi",
        content:
          "Anything that can be derived from the application state, should be. Automatically. MobX is a battle-tested library that makes state management simple and scalable by transparently applying functional reactive programming. The philosophy behind MobX is simple"
      },
      {
        id: 7,
        title: "MobX",
        date: 1689147879,
        author: "Vikash shahi",
        content:
          "Anything that can be derived from the application state, should be. Automatically. MobX is a battle-tested library that makes state management simple and scalable by transparently applying functional reactive programming. The philosophy behind MobX is simple"
      },
      {
        id: 8,
        title: "MobX",
        date: 1689147879,
        author: "Vikash shahi",
        content:
          "Anything that can be derived from the application state, should be. Automatically. MobX is a battle-tested library that makes state management simple and scalable by transparently applying functional reactive programming. The philosophy behind MobX is simple"
      },
      {
        id: 8,
        title: "MobX",
        date: 1689147879,
        author: "Vikash shahi",
        content:
          "Anything that can be derived from the application state, should be. Automatically. MobX is a battle-tested library that makes state management simple and scalable by transparently applying functional reactive programming. The philosophy behind MobX is simple"
      },
      {
        id: 8,
        title: "MobX",
        date: 1689147879,
        author: "Vikash shahi",
        content:
          "Anything that can be derived from the application state, should be. Automatically. MobX is a battle-tested library that makes state management simple and scalable by transparently applying functional reactive programming. The philosophy behind MobX is simple"
      },
  ]);

  const getTitle = useRef();
  const getContent = useRef();
  const getAuthor = useRef();

  const saveBlogTitle = (event) => {
    setTitle(event.target.value);
  };

  const saveBlogAuthor = (event) => {
    setAuthor(event.target.value);
  };

  const saveConent = (event) => {
    setContent(event.target.value);
  };

  const SaveBlog = (event) => {
    event.preventDefault();
    const id = Date.now();
    const date = Math.floor(Date.now() / 1000)

    setAllPosts([...allBlogs, { author, title, content, id, date }]);
    getTitle.current.value = "";
    getContent.current.value = "";
    setModalState(false)
  };

  const CancelBlog = (event) => {
    setModalState(false)
  };
  
  const setDetailsId = (id) => {
    console.log(id, "id")
    setDetailsPage(true);
    const getFilteredData = allBlogs.filter(item => item.id === id);
    setDetailsData(getFilteredData)
  }

  console.log(getDetailsData, "getDetailsData");

  if (!isModalOpen && showDetailsPage) {
    return (
      <>
        <BlogDetails
          id={getDetailsData[0]?.id}
          title={getDetailsData[0]?.title}
          content={getDetailsData[0]?.content}
          author={getDetailsData[0]?.author}
          date={formatDateTime(getDetailsData[0]?.date)}
        />
      </>
    );
  }

  if (isModalOpen) {
    return (
      <>
        <CreateBlog
          saveBlogTitle={saveBlogTitle}
          saveConent={saveConent}
          saveBlogAuthor={saveBlogAuthor}
          getTitle={getTitle}
          getContent={getContent}
          getAuthor={getAuthor}
          SaveBlog={SaveBlog}
          isModalOpen={isModalOpen}
          setModalState={setModalState}
          CancelBlog={CancelBlog}
        />
      </>
    );
  }

  return (
    <>
      {!allBlogs.length ? (
        <div>
          <li>There are no blogs yet.</li>
        </div>
      ) : (
        <div class="grid grid-cols-4 gap-4 p-10">{
        allBlogs.map((eachPost) => (
            <BlogItem
                id={eachPost.id}
                key={eachPost.id}
                title={eachPost.title}
                content={eachPost.content}
                author={eachPost.author}
                date={formatDateTime(eachPost.date)}
                setDetailsId={setDetailsId}
            />
        ))} </div>
      )}
    </>
  );
};
export default BlogsList;
