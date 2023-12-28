import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../Utils/ChatSlice";
import { generateRandomMeassage, generateRandomName } from "../Utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const [liveMessage, setLiveMeassage] = useState("");
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMeassage(15),
        })
      );
    }, [2000]);

    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className="w-full h-[400px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((item, ind) => (
          <ChatMessage key={ind} name={item.name} message={item.message} />
        ))}
      </div>
      <form
        className="w-full p-2 ml-2 border border-black rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();
          if (liveMessage === "") return;
          dispatch(
            addMessage({
              name: "Subham Kumar",
              message: liveMessage,
            })
          );
          setLiveMeassage("");
        }}
      >
        <input
          className="w-80 border border-black rounded-lg px-2"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMeassage(e.target.value);
          }}
        />
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
