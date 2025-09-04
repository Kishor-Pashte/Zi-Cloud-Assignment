import HeaderBar from "./components/HeaderBar";
import Sidebar from "./components/Sidebar";
import ChatPanel from "./components/ChatPanel";
import FormPanel from "./components/FormPanel";
function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <HeaderBar />
        <div className="content">
          <ChatPanel />
          <FormPanel />
        </div>
      </div>
    </div>
  );
}

export default App;
