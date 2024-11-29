import ScrollAnimation from "@/components/scrollAnimation";

export default function Bitless() {
  return (
    <div>
      <ScrollAnimation />
      {Array(50)
        .fill(0)
        .map((_, i) => (
          <p key={i}>This is paragraph {i + 1}</p>
        ))}
    </div>
  );
}
