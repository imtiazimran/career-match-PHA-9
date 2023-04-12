import React from 'react';

const Blog = () => {
  const QnAs = [
    {
      question: " when should use contexApi",
      answare: "we should use contextAPI when we have to pass data to the deep down of the component if we not use the contexAPI then the other way is we have to send data component by componet as props which is vary painfull there for the contexAPI is come vary handy on this kind of setuation"
    },
    {
      question: " what is custom hook",
      answare: "well custome hook come vary useful when it's about using the same data over and over again, when developer need to write the same code, so instead of write the same code again thay just make a custome Hook and use it again like a function"
    },
    {
      question: "what is useRef,",
      answare: "when developers needed to keep track of a specific DOM node so they could manipulate it in response to user input. they use the useRef hook to create a ref object and assigned it to the desired node."
    },
    {
      question: "what is useMemo",
      answare: "most  use case of useMemo is when we have a function that takes a long time to run, and we want to avoid running it unnecessarily. By memoizing the function's result and only recomputing it when the dependencies change, you can avoid unnecessary computations and improve your app's performance."
    }

  ];
  return (
    <div className="bg-white w-3/4 mx-auto rounded-lg p-6 my-4">
      {
        QnAs.map(qna => <div className='border mt-3 p-3 rounded shadow'>
          <h2 className="text-xl font-medium mb-4">{qna.question}</h2>
          <p className="mb-4">{qna.answare}</p>
          </div>)
      }
    </div>
  );
};

export default Blog;