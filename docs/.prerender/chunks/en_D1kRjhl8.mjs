import { a as $$ArtistGrid, c as $$Navbar, d as createComponent, f as __exportAll, i as $$Services, l as uiTexts, n as $$Contact, o as $$About, r as loadArtists, s as $$Hero, t as $$Footer, u as $$Layout } from "./Footer_3-lo08ec.mjs";
import { C as createAstro, m as maybeRenderHead, r as renderComponent, u as renderTemplate } from "./server_D8Mbg56g.mjs";
//#region src/components/ForVenues.astro
createAstro("https://pearbeats.de");
var $$ForVenues = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ForVenues;
	const { texts } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<section class="for-venues" id="venues"><div class="container"><span class="section-label" data-lang="venues.label">${texts.venues.label}</span><h2 class="section-title" data-lang="venues.title">${texts.venues.title}</h2><p class="section-subtitle" data-lang="venues.subtitle">${texts.venues.subtitle}</p><div class="grid-3 for-venues-grid"><div class="card-base venue-benefit-card"><div class="icon-circle"><svg viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"></path></svg></div><h3 data-lang="venues.v1Title">${texts.venues.v1Title}</h3><p data-lang="venues.v1Desc">${texts.venues.v1Desc}</p></div><div class="card-base venue-benefit-card"><div class="icon-circle"><svg viewBox="0 0 24 24"><path d="M19.14 7.55c-.26-3.68-2.9-6.43-6.49-6.43-3.19 0-5.39 2.38-5.78 5.33-.24.24-.49.49-.49.95 0 1.58 1.78 2.43 2.74 2.43.36 0 .66-.11.9-.26.53 2.54 2.86 3.18 4.45 3.18 2.16 0 4.21-1.34 4.21-3.47 0-.46-.05-.84-.14-1.16zM12.5 18.73c-2.59 0-4.78-1.18-5.24-3.57-.1-.48-.24-.9-.43-1.25-.45-.82-1.44-1.25-2.31-1.25-1.43 0-2.52 1.11-2.52 2.59 0 3.57 3.59 6.95 10.5 6.95 1.82 0 3.55-.36 4.99-1.05.61-.29.51-1.19-.15-1.34-.63-.14-1.32-.22-2.11-.22-1.85 0-3.61.49-4.73 1.04z"></path></svg></div><h3 data-lang="venues.v2Title">${texts.venues.v2Title}</h3><p data-lang="venues.v2Desc">${texts.venues.v2Desc}</p></div><div class="card-base venue-benefit-card"><div class="icon-circle"><svg viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"></path></svg></div><h3 data-lang="venues.v3Title">${texts.venues.v3Title}</h3><p data-lang="venues.v3Desc">${texts.venues.v3Desc}</p></div></div><div class="venue-note"><strong>Hinweis:</strong> ${texts.venues.note}</div></div></section>`;
}, "/data/internal/dataparti/main/Documents/living/work/Main/pearbeatsbooking/frontend/website/pearbeats-astro/src/components/ForVenues.astro", void 0);
//#endregion
//#region src/pages/en.astro
var en_exports = /* @__PURE__ */ __exportAll({
	default: () => $$En,
	file: () => $$file,
	url: () => "/en"
});
var $$En = createComponent(async ($$result, $$props, $$slots) => {
	const artists = await loadArtists();
	const texts = uiTexts.en;
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": `Pearbeats | ${texts.nav.home}`,
		"lang": "en"
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Navbar", $$Navbar, {
		"lang": "en",
		"texts": texts
	})}${renderComponent($$result, "Hero", $$Hero, {
		"texts": texts,
		"lang": "en"
	})}${renderComponent($$result, "About", $$About, {
		"texts": texts,
		"lang": "en"
	})}${renderComponent($$result, "ArtistGrid", $$ArtistGrid, {
		"artists": artists,
		"texts": texts,
		"lang": "en"
	})}${renderComponent($$result, "Services", $$Services, {
		"texts": texts,
		"lang": "en"
	})}${renderComponent($$result, "ForVenues", $$ForVenues, {
		"texts": texts,
		"lang": "en"
	})}${renderComponent($$result, "Contact", $$Contact, {
		"texts": texts,
		"lang": "en"
	})}${renderComponent($$result, "Footer", $$Footer, {
		"texts": texts,
		"lang": "en"
	})}` })}`;
}, "/data/internal/dataparti/main/Documents/living/work/Main/pearbeatsbooking/frontend/website/pearbeats-astro/src/pages/en.astro", void 0);
var $$file = "/data/internal/dataparti/main/Documents/living/work/Main/pearbeatsbooking/frontend/website/pearbeats-astro/src/pages/en.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/en@_@astro
var page = () => en_exports;
//#endregion
export { page };
