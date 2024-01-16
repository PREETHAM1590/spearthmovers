!(function () {
  "use strict";
  document.addEventListener("DOMContentLoaded", function () {
    !(function () {
      if (window.wpcode_admin_bar_info) {
        var e = document.getElementById(
          "wp-admin-bar-wpcode-loaded-on-this-page"
        );
        if (e) {
          var a = e.querySelector(".ab-submenu");
          (a.innerHTML = ""),
            wpcode_admin_bar_info.forEach(function (e) {
              var n = document.createElement("li");
              (n.className = "wpcode-admin-bar-info-location menupop"),
                n.setAttribute("data-location-id", e.location_id),
                (n.innerHTML =
                  '<a class="ab-item" aria-haspopup="true" href="' +
                  e.href +
                  '"><span class="wp-admin-bar-arrow" aria-hidden="true"></span>' +
                  e.label +
                  "</a>");
              var i = document.createElement("ul");
              (i.className = "ab-submenu"),
                e.snippets.forEach(function (e) {
                  var a = document.createElement("li");
                  (a.className = "wpcode-admin-bar-info-snippet"),
                    a.setAttribute("data-snippet-id", e.id),
                    (a.innerHTML =
                      '<a href="' +
                      e.edit_link +
                      '" class="ab-item">' +
                      e.title +
                      "</a>"),
                    i.appendChild(a);
                });
              var t = document.createElement("div");
              (t.className = "ab-sub-wrapper"),
                t.appendChild(i),
                n.appendChild(t),
                a.appendChild(n);
            });
        }
        0 === wpcode_admin_bar_info_count &&
          (document.querySelector(
            "#wp-admin-bar-wpcode-loaded-on-this-page .wp-admin-bar-arrow"
          ).style.display = "none");
        var n = document.querySelector(
          "#wp-admin-bar-wpcode-loaded-on-this-page > .ab-item"
        );
        n && (n.innerHTML += " (" + wpcode_admin_bar_info_count + ")");
      }
    })();
  });
})();
