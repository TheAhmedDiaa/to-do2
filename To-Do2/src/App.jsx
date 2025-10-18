import "./App.css";
import SplitText from "./Components/SplitText/SplitText";
import Input from "./input/Input.jsx";
import DialogModel from "./dialog/DialogModel.jsx";
import { useContext } from "react";
import { DialogContext } from "./Context/DialogProvider.jsx";

function App() {
  const { isOpen, isTaskErrorOpen, Close, CloseTaskError } = useContext(DialogContext);

  return (
    <>
      <header>
        <b>
          <SplitText
            text="Do-Me App 😝"
            className="text-5xl font-semibold text-center eader"
            delay={400}
            duration={1}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 1000 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
        </b>
      </header>
      <DialogModel
        isOpen={isOpen}
        close={Close}
        message="Check if the date and the time is valid and you added the task name please 😊"
      />
      <DialogModel
        isOpen={isTaskErrorOpen}
        close={CloseTaskError}
        message="Your task is already on the far top or the far bottom 😊"
      />

      <Input />
    </>
  );
}

export default App;
