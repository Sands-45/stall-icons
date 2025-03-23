import TopNav from "./components/top-nav";
import IconSearch from "./components/icon-search";
import IconsGrid from "./components/icons-grid";

function App() {
  // JSx Code =================
  return (
    <div className="fixed inset-0 flex flex-col overflow-hidden bg-white">
      <TopNav />
      <div className="w-full max-w-[800px] h-full overflow-hidden flex flex-col p-6 mx-auto">
        <div className="w-full h-fit flex items-center justify-between gfap-4">
          <h1 className="text-2xl font-bold text-zinc-800">Icons</h1>
          <IconSearch />
        </div>

        {/**Icons Grid */}
        <IconsGrid />
      </div>
    </div>
  );
}

export default App;
