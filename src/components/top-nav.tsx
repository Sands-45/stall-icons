const TopNav = () => {
  return (
    <nav className="h-14 shrink-0 flex items-center justify-center gap-4 overflow-hidden">
      <div
        className="h-full w-full max-w-[800px] flex items-center justify-between
         gap-4 border-b border-zinc-100 px-6"
      >
        <span className="text-sm text-zinc-500 font-medium">
          Stall / icons
        </span>
        <span className="text-xs text-zinc-500 font-medium font-mono">
          Last updated : 23 Sun March 25
        </span>
      </div>
    </nav>
  );
};

export default TopNav;
