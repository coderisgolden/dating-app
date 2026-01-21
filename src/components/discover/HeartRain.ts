import confetti from "canvas-confetti"

export function heartRain() {
  const end = Date.now() + 2 * 1000

  const colors = ["#f43f5e", "#fb7185", "#fda4c4"]

  const frame = () => {
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      shapes: ["circle"] as any,
      colors,
    })
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      shapes: ["circle"] as any,
      colors,
    })

    if (Date.now() < end) {
      requestAnimationFrame(frame)
    }
  }

  frame()
}
