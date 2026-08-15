(function () {
  var panel = document.querySelector(".js-reactions");
  if (!panel) return;

  var endpoint = panel.dataset.endpoint.replace(/\/$/, "");
  var slug = panel.dataset.slug;
  var query = "?slug=" + encodeURIComponent(slug);
  var buttons = panel.querySelectorAll(".reaction");

  function mine(key) {
    try {
      return localStorage.getItem("reaction:" + slug + ":" + key) === "1";
    } catch (e) {
      return false;
    }
  }

  function remember(key, on) {
    try {
      if (on) localStorage.setItem("reaction:" + slug + ":" + key, "1");
      else localStorage.removeItem("reaction:" + slug + ":" + key);
    } catch (e) {}
  }

  function paint(counts) {
    buttons.forEach(function (button) {
      var key = button.dataset.key;
      button.querySelector(".reaction__count").textContent = counts[key] || 0;
      button.classList.toggle("is-on", mine(key));
      button.setAttribute("aria-pressed", mine(key) ? "true" : "false");
    });
  }

  fetch(endpoint + query)
    .then(function (r) {
      return r.json();
    })
    .then(function (data) {
      paint(data.counts || {});
      panel.classList.add("is-ready");
    })
    .catch(function () {
      panel.remove();
    });

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      if (!panel.classList.contains("is-ready")) return;
      var key = button.dataset.key;
      var on = !mine(key);
      remember(key, on);

      var count = button.querySelector(".reaction__count");
      count.textContent = Math.max(0, (parseInt(count.textContent, 10) || 0) + (on ? 1 : -1));
      button.classList.toggle("is-on", on);
      button.setAttribute("aria-pressed", on ? "true" : "false");

      fetch(endpoint + query + "&key=" + key + "&delta=" + (on ? 1 : -1), { method: "POST" })
        .then(function (r) {
          return r.json();
        })
        .then(function (data) {
          if (data.counts) paint(data.counts);
        })
        .catch(function () {});
    });
  });
})();
