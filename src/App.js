export default function App() {
  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    console.log(data);
  }

  return (
    <div>
      <h1> Hello world! </h1>
      <button onClick={getAdvice}> Get advice </button>
    </div>
  );
}
