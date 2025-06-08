import "./App.css";
import SplitText from "./Components/SplitText/SplitText";
import Input from "./Input";

function App() {
  return (
    <>
        <header>
          <b>
            <SplitText
              text="Do-Me App 😝"
              className="text-5xl font-semibold text-center eader"
              delay={150}
              duration={1}
              ease="power3.out"
              splitType="words"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              
            />
          </b>
        </header>
      <Input />
    </>
  );
}

export default App;
