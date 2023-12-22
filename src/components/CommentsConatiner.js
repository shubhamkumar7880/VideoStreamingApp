import React from "react";
import CommentsList from "./CommentsList";

const CommentsData = [
  {
    name: "Subham Kumar",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    replies: [],
  },
  {
    name: "Subham Kumar",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    replies: [
      {
        name: "Subham Kumar",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        replies: [
          {
            name: "Subham Kumar",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            replies: [
              {
                name: "Subham Kumar",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                replies: [],
              },
              {
                name: "Subham Kumar",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                replies: [
                  {
                    name: "Subham Kumar",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                    replies: [],
                  },
                  {
                    name: "Subham Kumar",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Subham Kumar",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        replies: [],
      },
      {
        name: "Subham Kumar",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        replies: [],
      },
      {
        name: "Subham Kumar",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        replies: [],
      },
    ],
  },
  {
    name: "Subham Kumar",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    replies: [],
  },
  {
    name: "Subham Kumar",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    replies: [],
  },
];
const CommentsConatiner = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={CommentsData} />
    </div>
  );
};

export default CommentsConatiner;
