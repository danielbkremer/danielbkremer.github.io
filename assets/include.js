(async function () {
  const mount = document.getElementById("site-nav");
  if (!mount) return;

  try {
    const res = await fetch("nav.html", { cache: "no-cache" });
    if (!res.ok) throw new Error("Failed to load nav.html");
    mount.innerHTML = await res.text();
  } catch (e) {
    console.error(e);
  }
})();
