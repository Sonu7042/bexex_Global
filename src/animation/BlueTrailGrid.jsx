import React, { useEffect, useRef } from "react";

const BlueTrailGrid = () => {
  const gridRef = useRef(null);

  useEffect(() => {
    const grid = gridRef.current;
    const cellSize = 30;

    const buildGrid = () => {
      grid.innerHTML = "";
      const cols = Math.floor(window.innerWidth / cellSize);
      const rows = Math.floor(window.innerHeight / cellSize);

      grid.style.gridTemplateColumns = `repeat(${cols}, ${cellSize}px)`;
      grid.style.gridTemplateRows = `repeat(${rows}, ${cellSize}px)`;

      for (let i = 0; i < cols * rows; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        grid.appendChild(cell);
      }

      const cells = grid.querySelectorAll(".cell");
      let lastX = null;
      let lastY = null;

      const handleMouseMove = (e) => {
        if (Math.random() < 0.1) return;

        const x = Math.floor(e.clientX / cellSize);
        const y = Math.floor(e.clientY / cellSize);
        const index = y * cols + x;

        if (index >= 0 && index < cells.length) {
          const cell = cells[index];
          const randomFlash = Math.random() < 0.3;

          if (randomFlash) {
            cell.classList.add("flash");
            setTimeout(() => cell.classList.remove("flash"), 200);
          } else if (!cell.classList.contains("active")) {
            cell.classList.add("active");
            setTimeout(() => cell.classList.remove("active"), 350);
          }
        }

        // Small trailing effect
        if (lastX !== null && lastY !== null) {
          const dx = x - lastX;
          const dy = y - lastY;
          const steps = Math.min(Math.max(Math.abs(dx), Math.abs(dy)), 2);
          for (let i = 1; i <= steps; i++) {
            const midX = lastX + Math.round((dx * i) / steps);
            const midY = lastY + Math.round((dy * i) / steps);
            const midIndex = midY * cols + midX;
            if (midIndex >= 0 && midIndex < cells.length) {
              const cell = cells[midIndex];
              if (!cell.classList.contains("active")) {
                cell.classList.add("active");
                cell.style.opacity = 0.9 - i * 0.1;
                setTimeout(() => cell.classList.remove("active"), 250);
              }
            }
          }
        }

        lastX = x;
        lastY = y;
      };

      window.addEventListener("mousemove", handleMouseMove);

      const flickerInterval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * cells.length);
        const cell = cells[randomIndex];
        if (!cell.classList.contains("active")) {
          cell.classList.add("flicker");
          setTimeout(() => cell.classList.remove("flicker"), 900);
        }
      }, 200);

      // Cleanup on unmount or rebuild
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        clearInterval(flickerInterval);
      };
    };

    const cleanup = buildGrid();

    // rebuild grid when window resizes
    const handleResize = () => {
      cleanup && cleanup();
      buildGrid();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cleanup && cleanup();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div className="grid" ref={gridRef}></div>;
};

export default BlueTrailGrid;
