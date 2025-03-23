import { all_icons } from "@/reference";
import { IconReference } from "@/types/icons-types";
import { toPureString } from "@/utils/helpers";
import { useDebounce } from "@uidotdev/usehooks";
import React from "react";
import { useSearchParams } from "react-router";

const IconsGrid = React.memo(() => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const debouncedSearchTerm = useDebounce(search, 300);
  const filtered_icons = React.useMemo(() => {
    const results = all_icons.filter((icon) => {
      return toPureString(JSON.stringify(icon)).includes(
        toPureString(debouncedSearchTerm)
      );
    });
    return results;
  }, [debouncedSearchTerm]);

  // JSX Code =================
  return (
    <div
      className="mt-6 w-full h-full pr-2 overflow-hidden overflow-y-auto grid gap-4
       grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6"
    >
      {filtered_icons.map((icon: IconReference) => {
        return (
          <div
            className="col-span-1 aspect-square rounded-xl bg-zinc-50 p-3 border border-zinc-100 flex
             flex-col justify-center items-center gap-4 cursor-pointer hover:shadow transition-all shrink-0"
          >
            <div className="h-full w-full flex flex-col items-center justify-center gap-4 overflow-hidden">
              <icon.icon size={25} className="text-zinc-500" />
              <span
                className="text-[11px] text-center font-medium text-zinc-500 whitespace-nowrap
              truncate px-4 overflow-hidden w-full"
              >
                {icon.name}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
});

export default IconsGrid;
