import { a as $$ArtistGrid, c as $$Navbar, d as createComponent, f as __exportAll, i as $$Services, l as uiTexts, n as $$Contact, o as $$About, r as loadArtists, s as $$Hero, t as $$Footer, u as $$Layout } from "./Footer_3-lo08ec.mjs";
import { r as renderComponent, u as renderTemplate } from "./server_D8Mbg56g.mjs";
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const artists = await loadArtists();
	const texts = uiTexts.de;
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": `Pearbeats | ${texts.nav.home}`,
		"lang": "de"
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Navbar", $$Navbar, {
		"lang": "de",
		"texts": texts
	})}${renderComponent($$result, "Hero", $$Hero, {
		"texts": texts,
		"lang": "de"
	})}${renderComponent($$result, "About", $$About, {
		"texts": texts,
		"lang": "de"
	})}${renderComponent($$result, "ArtistGrid", $$ArtistGrid, {
		"artists": artists,
		"texts": texts,
		"lang": "de"
	})}${renderComponent($$result, "Services", $$Services, {
		"texts": texts,
		"lang": "de"
	})}${renderComponent($$result, "ForVenues", ForVenues, {
		"texts": texts,
		"lang": "de"
	})}${renderComponent($$result, "Contact", $$Contact, {
		"texts": texts,
		"lang": "de"
	})}${renderComponent($$result, "Footer", $$Footer, {
		"texts": texts,
		"lang": "de"
	})}` })}`;
}, "/data/internal/dataparti/main/Documents/living/work/Main/pearbeatsbooking/frontend/website/pearbeats-astro/src/pages/index.astro", void 0);
var $$file = "/data/internal/dataparti/main/Documents/living/work/Main/pearbeatsbooking/frontend/website/pearbeats-astro/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
