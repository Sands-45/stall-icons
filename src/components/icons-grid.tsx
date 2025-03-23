import { all_icons } from "@/reference";
import { IconReference } from "@/types/icons-types";
import { toPureString } from "@/utils/helpers";
import { customToast } from "@/utils/resusable-objects";
import { useDebounce } from "@uidotdev/usehooks";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { useSearchParams } from "react-router";
import { toast } from "sonner";

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
      className="mt-6 w-full h-full pr-2 overflow-hidden overflow-y-auto grid auto-rows-min gap-4
       grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6"
    >
      {filtered_icons.map((icon: IconReference) => {
        return (
          <div
            key={icon.name}
            onClick={() => {
              const svgMarkup = ReactDOMServer.renderToStaticMarkup(
                <icon.icon />
              );
              navigator.clipboard.writeText(svgMarkup);
              toast.success("Svg copied to clipboard", customToast);
            }}
            className="col-span-1 aspect-square rounded-xl bg-zinc-50 p-3 border border-zinc-100 flex
             flex-col justify-center items-center gap-4 cursor-pointer hover:opacity-80 transition-all shrink-0"
          >
            <div className="h-full w-full flex flex-col items-center justify-center gap-4 overflow-hidden">
              <icon.icon
                size={25}
                strokeWidth={1.5}
                className="text-zinc-500"
              />
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
