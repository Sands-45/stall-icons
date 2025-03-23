import React from "react";
import { useSearchParams } from "react-router";

const IconsSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // JSX Code =================
  return (
    <input
      type="search"
      value={searchParams.get("search") || ""}
      onChange={(e) => {
        setSearchParams({ search: e.target.value });
      }}
      placeholder="Search icons ..."
      className="h-9 w-44 px-3 text-xs text-zinc-700 placeholder:text-zinc-400 rounded-lg bg-zinc-50
       border border-zinc-200 focus-within:border-cyan-800/50 focus-within:ring-1
        focus-within:ring-cyan-800/50 transition-all"
    />
  );
};

export default React.memo(IconsSearch);
