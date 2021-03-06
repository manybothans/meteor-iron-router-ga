Package.describe({
    name: "mrt:iron-router-ga",
    summary: "Google analytics (universal edition) with some Iron Router sugar for tracking page views.",
    version: "0.3.0",
    git: "https://github.com/reywood/meteor-iron-router-ga.git"
});

Package.onUse(function(api) {
    api.versionsFrom("METEOR@0.9.0");
    api.use("iron:router", "client");

    api.addFiles([ "lib/ga.js", "lib/router.js" ], "client");
});
