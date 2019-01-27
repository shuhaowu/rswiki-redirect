const OSRS_WIKIA_HOSTNAMES = [
  "oldschoolrunescape.wikia.com",
  "2007scape.wikia.com",
  "oldschoolrunescape.fandom.com",
  "2007scape.fandom.com",
];

const RS3_WIKIA_HOSTNAMES = [
  "runescape.wikia.com",
  "runescape.fandom.com",
];

const OSRS_WIKI_HOSTNAME = "oldschool.runescape.wiki";
const RS3_WIKI_HOSTNAME = "runescape.wiki";

function redirectIfApplicable() {
  for (var i=0; i<OSRS_WIKIA_HOSTNAMES.length; i++) {
    if (window.location.hostname === OSRS_WIKIA_HOSTNAMES[i]) {
      redirectTo(OSRS_WIKI_HOSTNAME);
      return;
    }
  }

  for (var i=0; i<RS3_WIKIA_HOSTNAMES.length; i++) {
    if (window.location.hostname === RS3_WIKIA_HOSTNAMES[i]) {
      redirectTo(RS3_WIKI_HOSTNAME);
      return;
    }
  }
}

function redirectTo(hostname) {
  var newHref = window.location.href.replace(window.location.hostname, hostname);
  newHref = newHref.replace("/wiki", "/w");
  console.log("redirecting " + window.location.href + " to " + newHref);
  window.location.href = newHref;
}

redirectIfApplicable();
