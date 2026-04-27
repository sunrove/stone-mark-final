// SEO head manager — lightweight react-helmet alternative
// Call useSEO() at the top of each page component
import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  noIndex?: boolean;
}

const SITE_NAME = "The StoneMark Company";
const DEFAULT_TITLE = "The StoneMark Company | Nashville Roofing Contractor";
const DEFAULT_DESC =
  "Nashville's trusted roofing contractor. 45+ years of experience. GAF Certified Master Elite®. Asphalt shingles, metal roofing, TPO, gutters & storm damage. Serving Middle Tennessee. Call (615) 299-7552.";
const SITE_URL = "https://stonemarkco.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

function setMeta(name: string, content: string, attr: "name" | "property" = "name") {
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function useSEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESC,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  noIndex = false,
}: SEOProps = {}) {
  useEffect(() => {
    const fullTitle = title === DEFAULT_TITLE ? title : `${title} | ${SITE_NAME}`;
    document.title = fullTitle;

    // Core
    setMeta("description", description);
    setMeta("robots", noIndex ? "noindex,nofollow" : "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1");

    // Canonical
    if (canonical) setLink("canonical", `${SITE_URL}${canonical}`);

    // Open Graph
    setMeta("og:type", ogType, "property");
    setMeta("og:title", fullTitle, "property");
    setMeta("og:description", description, "property");
    setMeta("og:url", `${SITE_URL}${canonical ?? window.location.pathname}`, "property");
    setMeta("og:image", ogImage, "property");
    setMeta("og:image:width", "1200", "property");
    setMeta("og:image:height", "630", "property");
    setMeta("og:site_name", SITE_NAME, "property");
    setMeta("og:locale", "en_US", "property");

    // Twitter Card
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);
    setMeta("twitter:image", ogImage);
  }, [title, description, canonical, ogImage, ogType, noIndex]);
}
