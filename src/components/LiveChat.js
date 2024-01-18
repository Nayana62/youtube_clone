import React, { useEffect, useState } from "react";
import ChatMessages from "./ChatMessages";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../redux/chatSlice";
import { generateRandomComment, generateRandomName } from "../constants/helper";
import { toggleChatBox } from "../redux/appSlice";

const LiveChat = () => {
  const { isChatBoxOpen } = useSelector((store) => store.app);
  const dispatch = useDispatch();
  const { chatMessages } = useSelector((store) => store.chat);
  const [inputMessage, setInputMessage] = useState("");

  const handleWriteChat = (e) => {
    e.preventDefault();

    dispatch(
      addMessage({
        name: "user",
        message: inputMessage,
      })
    );
    setInputMessage("");
  };

  useEffect(() => {
    // API Polling
    const interval = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomComment(),
        })
      );
    }, 2000);

    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, []);

  return (
    <div className=" w-[20rem] xl:w-[25rem]">
      <div
        className={`${
          isChatBoxOpen ? "block" : "hidden"
        } relative top-[5rem] border border-gray-300 w-[20rem] xl:w-[25rem] h-[32rem] rounded-t-lg pt-4 flex flex-col-reverse overflow-x-scroll z-0`}
      >
        <div>
          {chatMessages.map((chat, index) => (
            <ChatMessages key={index} name={chat.name} message={chat.message} />
          ))}
        </div>
      </div>
      <form
        className={`${
          isChatBoxOpen ? "block" : "hidden"
        } border border-gray-300 flex justify-center relative top-[4rem] items-center  py-2 cursor-pointer z-20 bg-white`}
      >
        <input
          type="text"
          placeholder="Chat..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          className=" bg-gray-200 w-[90%] p-1 px-4 rounded-3xl border-none outline-none"
        />
        <button onClick={(e) => handleWriteChat(e)} className="hidden"></button>
      </form>
      <div className=" border border-gray-300 rounded-b-lg flex justify-center relative top-[4rem] items-center hover:bg-gray-200 py-2 cursor-pointer z-20 bg-white">
        <p onClick={() => dispatch(toggleChatBox())}>Hide Chat</p>
      </div>
    </div>
  );
};

export default LiveChat;
