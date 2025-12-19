const tg = window.Telegram.WebApp;
tg.expand();

document.getElementById("spin").onclick = () => {
  const checked = [...document.querySelectorAll("input:checked")]
    .map(e => e.value);

  if (checked.length === 0) {
    alert("No participants selected");
    return;
  }

  const roll = Math.floor(Math.random() * checked.length);
  const winner = checked[roll];

  document.getElementById("result").innerHTML =
    "🎉 Selected: <b>" + winner + "</b>";

  confetti({
  particleCount: 120,
  spread: 70,
  origin: { y: 0.6 }
});

  tg.HapticFeedback.impactOccurred("medium");
};
