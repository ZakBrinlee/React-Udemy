// Import React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

//import components
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

// Create a React component
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Zak"
          timeAgo="Today at 4:45PM"
          commentText="Okay Blog!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Kathy"
          timeAgo="Today at 5:50AM"
          commentText="Bad Blog!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Chica"
          timeAgo="Today at 2:00PM"
          commentText="Awesome Blog!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

// Take component and show on screen
ReactDOM.render(<App />, document.querySelector("#root"));
