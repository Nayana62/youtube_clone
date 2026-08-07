import React, { useCallback, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import ButtonsList from "./ButtonsList";

const SCROLL_AMOUNT = 240;

const SearchButtons = ({ compact = false, children }) => {
  const { isMenuOpen } = useSelector((store) => store.app);
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const updateArrows = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 1);
  }, []);

  const scrollSuggestions = (direction) => {
    scrollRef.current?.scrollBy({
      left: direction === "left" ? -SCROLL_AMOUNT : SCROLL_AMOUNT,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    updateArrows();

    container.addEventListener("scroll", updateArrows);
    window.addEventListener("resize", updateArrows);

    const resizeObserver = new ResizeObserver(updateArrows);
    resizeObserver.observe(container);

    return () => {
      container.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
      resizeObserver.disconnect();
    };
  }, [updateArrows]);

  const wrapperClassName = compact
    ? "relative h-12 w-[22rem] xl:w-[25rem] bg-white z-10"
    : `relative h-12 pl-5 sm:px-0 w-full sm:w-[calc(100%-6rem)] sm:fixed top-0 sm:top-16 left-0 bg-white ${
        isMenuOpen
          ? "sm:left-24 xl:left-56 xl:w-[calc(100%-14rem)]"
          : "sm:left-56 xl:left-24 xl:w-[calc(100%-6rem)]"
      } z-30`;

  return (
    <div className={wrapperClassName}>
      {showLeftArrow && (
        <button
          type="button"
          aria-label="Scroll suggestions left"
          onClick={() => scrollSuggestions("left")}
          className="absolute left-1 top-1/2 -translate-y-1/2 z-20 w-9 h-9 bg-white rounded-full shadow-md flex items-center justify-center"
        >
          <IoChevronBack className="text-black text-lg" />
        </button>
      )}

      <div
        ref={scrollRef}
        className={`search-buttons flex items-center h-12 overflow-x-auto scroll-smooth ${
          showLeftArrow ? "pl-10" : ""
        } ${showRightArrow ? "pr-10" : ""}`}
      >
        {children ?? <ButtonsList />}
      </div>

      {showRightArrow && (
        <button
          type="button"
          aria-label="Scroll suggestions right"
          onClick={() => scrollSuggestions("right")}
          className="absolute right-1 top-1/2 -translate-y-1/2 z-20 w-9 h-9 bg-white rounded-full shadow-md flex items-center justify-center"
        >
          <IoChevronForward className="text-black text-lg" />
        </button>
      )}
    </div>
  );
};

export default SearchButtons;
