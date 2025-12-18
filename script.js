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

  tg.HapticFeedback.impactOccurred("medium");
};