const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");

const sitemap = new SitemapStream({
  hostname: "https://shine-chikwapulo.netlify.app",
});

sitemap.write({ url: "/", changefreq: "weekly", priority: 1.0 });
sitemap.end();

streamToPromise(sitemap).then((data) =>
  createWriteStream("./public/sitemap.xml").write(data)
);
