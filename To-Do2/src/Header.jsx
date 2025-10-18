import SplitText from "./Components/SplitText/SplitText";

export default function Header() {
  return (
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

  )
}