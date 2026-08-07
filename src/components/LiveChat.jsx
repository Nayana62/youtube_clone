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

  const handleToggleChat = () => dispatch(toggleChatBox());

  return (
    <div className="w-[20rem] mt-[5rem] xl:w-[25rem]">
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
          isChatBoxOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div
          className={`min-h-0 overflow-hidden transition-opacity duration-300 ease-in-out ${
            isChatBoxOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="relative border border-gray-300 w-[20rem] xl:w-[25rem] h-[32rem] rounded-t-lg pt-4 flex flex-col-reverse overflow-x-scroll z-0">
            <div>
              {chatMessages.map((chat, index) => (
                <ChatMessages
                  key={index}
                  name={chat.name}
                  message={chat.message}
                />
              ))}
            </div>
          </div>
          <form
            className="border border-gray-300 flex justify-center relative items-center py-2 z-20 bg-white"
            onSubmit={handleWriteChat}
          >
            <input
              type="text"
              placeholder="Chat..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              className="bg-gray-200 w-[90%] p-1 px-4 rounded-3xl border-none outline-none"
              tabIndex={isChatBoxOpen ? 0 : -1}
            />
            <button type="submit" className="hidden" aria-hidden="true" />
          </form>
        </div>
      </div>
      <div
        role="button"
        tabIndex={0}
        aria-expanded={isChatBoxOpen}
        onClick={handleToggleChat}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleToggleChat();
          }
        }}
        className={`border border-gray-300 ${isChatBoxOpen ? "rounded-b-lg" : "rounded-lg"} flex justify-center relative items-center hover:bg-gray-200 py-2 cursor-pointer z-20 bg-white select-none`}
      >
        <p>{isChatBoxOpen ? "Hide chat" : "Show chat"}</p>
      </div>
    </div>
  );
};

export default LiveChat;
