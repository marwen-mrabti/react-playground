export default function ExpensiveComponent() {
  const result = Array(5000000)
    .fill(0)
    .reduce((acc, _, i) => {
      return acc + (Math.cos(i) * Math.sin(i)) / Math.sqrt(i + 1);
    }, 0);
  return <div>expensive component {result}</div>;
}
