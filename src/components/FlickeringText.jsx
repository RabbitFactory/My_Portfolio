import { useState, useEffect } from "react";

const FlickeringText = ({ text, duration = 3 }) => {
  const [visibleLetters, setVisibleLetters] = useState(
    new Array(text.length).fill(true)
  );

  useEffect(() => {
    // Flickering Effect
    const intervals = text.split("").map((_, index) =>
      setInterval(() => {
        setVisibleLetters((prev) => {
          const newVisibility = [...prev];
          newVisibility[index] = Math.random() > 0.5;
          return newVisibility;
        });
      }, Math.random() * 300 + 130)
    );

    // Stop flickering after duration
    setTimeout(() => {
      intervals.forEach(clearInterval);

      let remainingIndices = Array.from({ length: text.length }, (_, i) => i);
      let delay = 0;

      const fadeOutStep = () => {
        if (remainingIndices.length === 0) return;

        // Select a random number of characters (between 1 and 4) to fade
        let removeCount = Math.min(
          Math.ceil(Math.random() * 3) + 1, // 1 to 4 characters
          remainingIndices.length
        );

        let indicesToRemove = [];
        for (let i = 0; i < removeCount; i++) {
          const randomIndex = Math.floor(Math.random() * remainingIndices.length);
          indicesToRemove.push(remainingIndices[randomIndex]);
          remainingIndices.splice(randomIndex, 1); // Remove from remaining list
        }

        setTimeout(() => {
          setVisibleLetters((prev) => {
            const newVisibility = [...prev];
            indicesToRemove.forEach((i) => (newVisibility[i] = false));
            return newVisibility;
          });

          fadeOutStep(); // Recursively call for next batch
        }, delay);

        delay += Math.random() * 500 + 300; // 0.3s - 0.8s interval between removals
      };

      fadeOutStep();

      // **Failsafe: Force-hide any remaining visible letters at the end**
      setTimeout(() => {
        setVisibleLetters(new Array(text.length).fill(false));
      }, delay + 100);
    }, duration * 1000);

    return () => intervals.forEach(clearInterval);
  }, [text, duration]);

  return (
    <div className="text-4xl font-bold text-black">
      {text.split("").map((char, index) => (
        <span
          key={index}
          className={` ${
            visibleLetters[index] ? "opacity-100" : "opacity-0"
          }`}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default FlickeringText;
