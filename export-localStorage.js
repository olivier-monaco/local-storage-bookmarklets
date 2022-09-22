javascript:(function() {var es = Object.entries(localStorage); var r = {}; for (e in es) { r[es[e][0]] = es[e][1]; }; var r = JSON.stringify(r); window.prompt("", r);})();
