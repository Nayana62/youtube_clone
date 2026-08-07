import React, { useState } from "react";
import { FaUser } from "react-icons/fa";

const ChannelAvatar = ({ src, alt = "channel", className = "", name = "" }) => {
  const [hasError, setHasError] = useState(false);
  const showFallback = !src || hasError;

  if (showFallback) {
    const initial = name?.charAt(0)?.toUpperCase();

    return (
      <div
        className={`bg-gray-300 flex items-center justify-center flex-shrink-0 overflow-hidden ${className}`}
        aria-label={alt}
      >
        {initial ? (
          <span className="text-gray-600 font-medium text-sm">{initial}</span>
        ) : (
          <FaUser className="text-gray-500 text-sm" />
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`object-cover flex-shrink-0 ${className}`}
      onError={() => setHasError(true)}
    />
  );
};

export default ChannelAvatar;
