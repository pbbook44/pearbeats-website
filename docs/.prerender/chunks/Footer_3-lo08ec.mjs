import { C as createAstro, L as AstroError, _ as createRenderInstruction, g as addAttribute, h as renderHead, i as Fragment, m as maybeRenderHead, q as InvalidComponentArgs, r as renderComponent, s as renderSlot, u as renderTemplate } from "./server_D8Mbg56g.mjs";
import fs from "fs/promises";
import path from "path";
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region node_modules/astro/dist/runtime/server/astro-component.js
function validateArgs(args) {
	if (args.length !== 3) return false;
	if (!args[0] || typeof args[0] !== "object") return false;
	return true;
}
function baseCreateComponent(cb, moduleId, propagation) {
	const name = moduleId?.split("/").pop()?.replace(".astro", "") ?? "";
	const fn = (...args) => {
		if (!validateArgs(args)) throw new AstroError({
			...InvalidComponentArgs,
			message: InvalidComponentArgs.message(name)
		});
		return cb(...args);
	};
	Object.defineProperty(fn, "name", {
		value: name,
		writable: false
	});
	fn.isAstroComponentFactory = true;
	fn.moduleId = moduleId;
	fn.propagation = propagation;
	return fn;
}
function createComponentWithOptions(opts) {
	return baseCreateComponent(opts.factory, opts.moduleId, opts.propagation);
}
function createComponent(arg1, moduleId, propagation) {
	if (typeof arg1 === "function") return baseCreateComponent(arg1, moduleId, propagation);
	else return createComponentWithOptions(arg1);
}
//#endregion
//#region node_modules/astro/dist/runtime/server/render/script.js
async function renderScript(result, id) {
	const inlined = result.inlinedScripts.get(id);
	let content = "";
	if (inlined != null) {
		if (inlined) content = `<script type="module">${inlined}<\/script>`;
	} else {
		const resolved = await result.resolve(id);
		content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"><\/script>`;
	}
	return createRenderInstruction({
		type: "script",
		id,
		content
	});
}
//#endregion
//#region src/layouts/Layout.astro
createAstro("https://pearbeats.de");
var $$Layout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Layout;
	const { title, lang = "de" } = Astro.props;
	return renderTemplate`<html${addAttribute(lang, "lang")}><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet"><link rel="stylesheet" href="/css/styles.css"><link rel="icon" type="image/x-icon" href="/favicon.ico"><link rel="icon" type="image/svg+xml" href="/favicon.svg">${renderHead($$result)}</head><body>${renderSlot($$result, $$slots["default"])}${renderScript($$result, "/data/internal/dataparti/main/Documents/living/work/Main/pearbeatsbooking/frontend/website/pearbeats-astro/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")}</body></html>`;
}, "/data/internal/dataparti/main/Documents/living/work/Main/pearbeatsbooking/frontend/website/pearbeats-astro/src/layouts/Layout.astro", void 0);
//#endregion
//#region src/data/ui-texts.ts
var uiTexts = {
	de: {
		nav: {
			home: "Start",
			artists: "Artists",
			services: "Leistungen",
			venues: "Für Veranstalter",
			contact: "Kontakt"
		},
		hero: {
			tagline: "Jazz · Contemporary · Festivals",
			headline: "Musik leben. Rhythmus buchen.",
			btnPrimary: "Artist anfragen",
			btnOutline: "Roster ansehen"
		},
		about: {
			label: "Über Pearbeats",
			title: "Booking mit Leidenschaft für Jazz & Contemporary",
			stats1: "Künstler*innen im Roster",
			stats2: "Gebuchte Shows pro Jahr",
			stats3: "Veranstaltungen im Fokus"
		},
		artists: {
			label: "Unser Roster",
			title: "Featured Artists",
			subtitle: "Eine Auswahl unserer Jazz- und Contemporary-Künstler*innen. Das vollständige Roster erhalten Sie auf Anfrage."
		},
		services: {
			label: "Leistungen",
			title: "Was wir tun",
			subtitle: "Von der ersten Anfrage bis zum letzten Ton – wir begleiten Sie durch den gesamten Booking-Prozess.",
			s1Title: "Artist Booking",
			s1Desc: "Vermittlung von Jazz- und Contemporary-Künstler*innen an Festivals, Clubs und Veranstalter*innen in ganz Europa.",
			s2Title: "Line-Up Kuratierung",
			s2Desc: "Mit Gespür für Line-up-Dramaturgie und stilistische Kohärenz – vom individuellen Konzert bis zur Festivalreihe.",
			s3Title: "Full-Service Abwicklung",
			s3Desc: "Vom ersten Kontakt bis zur Abrechnung: Verträge, GEMA, Technikrider und Logistik – alles aus einer Hand."
		},
		contact: {
			label: "KONTAKT",
			title: "Lets make music happen",
			subtitle: "Ob Festival, Club oder Kulturhaus — wir finden den richtigen Act für Ihre Veranstaltung.",
			intro: "Sie planen ein Festival oder eine Konzertreihe? Schreiben Sie uns – wir melden uns innerhalb von 48 Stunden.",
			email: "booking@pearbeats.de",
			phone: "+49 (0) 30 1234 5678",
			location: "Berlin · Deutschland",
			bookingTab: "Booking Anfrage",
			applyTab: "Als Artist bewerben",
			bookingTitle: "Booking Anfrage",
			applyTitle: "Als Artist bewerben",
			name: "Name",
			namePlaceholder: "Ihr Name",
			formEmail: "E-Mail",
			emailPlaceholder: "ihre@email.de",
			organization: "Organisation",
			orgPlaceholder: "Festival / Venue / Club",
			selectArtist: "Artist auswählen",
			anyArtist: "-- Artist auswählen --",
			otherArtist: "Andere / Weiß noch nicht",
			message: "Nachricht",
			messagePlaceholder: "Ihre Anfrage...",
			formMessage: "Nachricht",
			submit: "Anfrage absenden",
			btnSubmit: "Anfrage senden",
			typeOptions: [
				"Festival Booking",
				"Club / Veranstaltungsort",
				"Als Artist bewerben",
				"Presse / Kooperation"
			],
			artistName: "Artist / Ensemble Name",
			artistNamePlaceholder: "Name Ihres Ensembles",
			ensembleSize: "Größe des Ensembles",
			selectSize: "Bitte wählen",
			socialMedia: "Social Media Link",
			website: "Website",
			audioLink: "Audio / Musik Link",
			submitApply: "Bewerbung absenden"
		},
		footer: {
			desc: "Independent Booking-Agentur für Jazz & Contemporary Music. Curated with care, based in Germany.",
			navHeader: "Navigation",
			contactHeader: "Kontakt",
			legalHeader: "Rechtliches",
			copyright: "Alle Rechte vorbehalten."
		},
		modal: {
			title: "Booking angefragt",
			btnEpk: "EPK ansehen",
			btnBandcamp: "Auf Bandcamp",
			btnCancel: "Schließen",
			subject: "Booking-Anfrage:",
			emailNote: "Deine Mail-App öffnet sich...",
			epkLink: "EPK ansehen",
			bandcampLink: "Musik anhören",
			bookNow: "Jetzt anfragen",
			close: "Schließen"
		},
		legal: {
			imprint: "Impressum",
			imprintLabel: "RECHTLICHE HINWEISE",
			privacy: "Datenschutzerklärung",
			privacyLabel: "DATENSCHUTZ",
			terms: "Allgemeine Geschäftsbedingungen",
			termsLabel: "AGB"
		}
	},
	en: {
		nav: {
			home: "Home",
			artists: "Artists",
			services: "Services",
			venues: "For Venues",
			contact: "Contact"
		},
		hero: {
			tagline: "Jazz · Contemporary · Festivals",
			headline: "Music alive. Book the rhythm.",
			btnPrimary: "Request Artist",
			btnOutline: "View Roster"
		},
		about: {
			label: "About Pearbeats",
			title: "Booking with passion for Jazz & Contemporary",
			stats1: "Artists in roster",
			stats2: "Shows booked per year",
			stats3: "Events focused"
		},
		artists: {
			label: "Our Roster",
			title: "Featured Artists",
			subtitle: "A selection of our jazz and contemporary artists. Full roster upon request."
		},
		services: {
			label: "Services",
			title: "What we do",
			subtitle: "From first inquiry to last note – we accompany you through the entire booking process.",
			s1Title: "Artist Booking",
			s1Desc: "Connecting jazz and contemporary artists with festivals, clubs and organizers across Europe.",
			s2Title: "Line-Up Curation",
			s2Desc: "With a feeling for line-up dramaturgy and stylistic coherence – from individual concerts to festival series.",
			s3Title: "Full-Service Handling",
			s3Desc: "From first contact to settlement: contracts, GEMA, technical riders and logistics – all from one source."
		},
		contact: {
			label: "CONTACT",
			title: "Lets make music happen",
			subtitle: "Whether festival, club or cultural house — we will find the right act for your event.",
			intro: "Planning a festival or concert series? Write us – we respond within 48 hours.",
			email: "booking@pearbeats.de",
			phone: "+49 (0) 30 1234 5678",
			location: "Berlin · Germany",
			bookingTab: "Booking Request",
			applyTab: "Apply as Artist",
			bookingTitle: "Booking Request",
			applyTitle: "Apply as Artist",
			name: "Name",
			namePlaceholder: "Your name",
			formEmail: "Email",
			emailPlaceholder: "your@email.com",
			organization: "Organization",
			orgPlaceholder: "Festival / Venue / Club",
			selectArtist: "Select Artist",
			anyArtist: "-- Select artist --",
			otherArtist: "Other / Not sure yet",
			message: "Message",
			messagePlaceholder: "Your inquiry...",
			formMessage: "Message",
			submit: "Send Request",
			btnSubmit: "Send Request",
			typeOptions: [
				"Festival Booking",
				"Club / Venue",
				"Apply as Artist",
				"Press / Cooperation"
			],
			artistName: "Artist / Ensemble Name",
			artistNamePlaceholder: "Name of your ensemble",
			ensembleSize: "Ensemble Size",
			selectSize: "Please choose",
			socialMedia: "Social Media Link",
			website: "Website",
			audioLink: "Audio / Music Link",
			submitApply: "Submit Application"
		},
		footer: {
			desc: "Independent booking agency for Jazz & Contemporary Music. Curated with care, based in Germany.",
			navHeader: "Navigation",
			contactHeader: "Contact",
			legalHeader: "Legal",
			copyright: "All rights reserved."
		},
		modal: {
			title: "Booking Request",
			btnEpk: "View EPK",
			btnBandcamp: "On Bandcamp",
			btnCancel: "Close",
			subject: "Booking inquiry:",
			emailNote: "Your mail app will open...",
			epkLink: "View EPK",
			bandcampLink: "Listen",
			bookNow: "Book Now",
			close: "Close"
		},
		legal: {
			imprint: "Imprint",
			imprintLabel: "LEGAL NOTICE",
			privacy: "Privacy Policy",
			privacyLabel: "PRIVACY",
			terms: "Terms and Conditions",
			termsLabel: "T&C"
		}
	}
};
//#endregion
//#region src/components/Navbar.astro
createAstro("https://pearbeats.de");
var $$Navbar = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Navbar;
	const { lang } = Astro.props;
	const texts = lang === "de" ? uiTexts.de : uiTexts.en;
	return renderTemplate`${maybeRenderHead($$result)}<nav class="navbar"><div class="nav-inner"><a href="/" class="logo"><div class="logo-mark"></div>Pear<span>beats</span></a><ul class="nav-links" id="navMenu"><li><a href="/#about">${texts.nav.home}</a></li><li><a href="/#artists">${texts.nav.artists}</a></li><li><a href="/#services">${texts.nav.services}</a></li><li><a href="/#venues">${texts.nav.venues}</a></li><li><a href="/#contact" class="nav-cta">${texts.nav.contact}</a></li><li><button id="langToggle" class="lang-switch">${lang === "de" ? "🇬🇧 EN" : "🇩🇪 DE"}</button></li></ul><button class="nav-toggle" id="navToggle"><span></span><span></span><span></span></button></div></nav>${renderScript($$result, "/data/internal/dataparti/main/Documents/living/work/Main/pearbeatsbooking/frontend/website/pearbeats-astro/src/components/Navbar.astro?astro&type=script&index=0&lang.ts")}`;
}, "/data/internal/dataparti/main/Documents/living/work/Main/pearbeatsbooking/frontend/website/pearbeats-astro/src/components/Navbar.astro", void 0);
//#endregion
//#region src/components/Hero.astro
createAstro("https://pearbeats.de");
var $$Hero = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Hero;
	const { texts, lang } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<header class="hero"><div class="hero-content"><span class="hero-tag">${texts.hero.tagline}</span><h1>${lang === "de" ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`Musik leben.<br><em>Rhythmus buchen.</em>` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`Music alive.<br><em>Book the rhythm.</em>` })}`}</h1><p>${lang === "de" ? "Pearbeats vermittelt Jazz- und Contemporary-Künstler:innen an Festivals, Clubs und Kulturhäuser. Curated booking mit Herz und Verstand." : "Pearbeats connects jazz and contemporary artists with festivals, clubs and cultural houses. Curated booking with heart and mind."}</p><div class="hero-buttons"><a href="/#contact" class="btn btn-primary">${texts.hero.btnPrimary}</a><a href="/#artists" class="btn btn-outline">${texts.hero.btnOutline}</a></div></div><div class="hero-scroll"><span>Scrollen</span><br><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M12 5v14M5 12l7 7 7-7"></path></svg></div></header>`;
}, "/data/internal/dataparti/main/Documents/living/work/Main/pearbeatsbooking/frontend/website/pearbeats-astro/src/components/Hero.astro", void 0);
//#endregion
//#region src/components/About.astro
createAstro("https://pearbeats.de");
var $$About = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$About;
	const { texts } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<section class="about" id="about"><div class="container"><div class="about-grid"><div class="about-text"><span class="section-label" data-lang="about.label">${texts.about.label}</span><h2 class="section-title" data-lang="about.title">${texts.about.title}</h2><p>Pearbeats ist eine unabhängige Booking-Agentur mit Sitz in Berlin, Deutschland. Wir vermitteln Jazz- und Contemporary-Musiker*innen an Festivals, Clubs und Kulturveranstalter in ganz Europa.</p><p>Unsere Mission: außergewöhnliche Live-Erlebnisse schaffen – durch sorgfältig kuratierte Line-ups, persönliche Betreuung und ein tiefes Verständnis für die Musikszene.</p><div class="about-stats"><div class="stat-item"><h3>10+</h3><p data-lang="about.stats1">${texts.about.stats1}</p></div><div class="stat-item"><h3>120+</h3><p data-lang="about.stats2">${texts.about.stats2}</p></div><div class="stat-item"><h3>Europa</h3><p data-lang="about.stats3">${texts.about.stats3}</p></div></div></div><div class="about-visual"><div class="about-visual-card"><svg viewBox="0 0 100 100"><path d="M50 10c-5 0-12 3-12 3s-25 5-25 35c0 25 20 42 37 42s37-17 37-42c0-30-25-35-25-35s-7-3-12-3z"></path><path d="M50 10c0 8 5 12 5 12" stroke="white" stroke-width="3" fill="none"></path></svg><h3>Pear-Garantie</h3><p>Jedes Booking wird mit der gleichen Sorgfalt behandelt – ob intimClub oder Mainstage.</p></div></div></div></div></section>`;
}, "/data/internal/dataparti/main/Documents/living/work/Main/pearbeatsbooking/frontend/website/pearbeats-astro/src/components/About.astro", void 0);
//#endregion
//#region src/components/ArtistCard.astro
createAstro("https://pearbeats.de");
var $$ArtistCard = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ArtistCard;
	const { artist, texts, lang } = Astro.props;
	const modalId = `artist-modal-${artist.shortname}`;
	const safeName = artist.ensemble.replace(/'/g, "\\'");
	const t = texts.modal ?? {
		epkLink: "EPK",
		bandcampLink: "Bandcamp",
		bookNow: "Anfragen",
		close: "Schließen"
	};
	function extractVideoId(url) {
		if (!url) return null;
		return url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/)?.[1] ?? null;
	}
	const videoId = artist.video ? extractVideoId(artist.video) : null;
	function normalizeBandcamp(url) {
		if (!url) return "";
		return url.startsWith("http") ? url : `https://${url}`;
	}
	const bandcampUrl = artist.bandcamp ? normalizeBandcamp(artist.bandcamp) : "";
	const hasValidPhoto = artist.photo_url && (artist.photo_url.startsWith("/images/") || artist.photo_url.startsWith("http") && !artist.photo_url.includes("drive.proton.me"));
	return renderTemplate`${maybeRenderHead($$result)}<article class="artist-card"${addAttribute(artist.shortname, "data-shortname")}><button class="card-trigger"${addAttribute(`Details für ${artist.ensemble}`, "aria-label")}${addAttribute(`document.getElementById('${modalId}').showModal()`, "onclick")}><div class="artist-card-image"><svg viewBox="0 0 80 80" role="img" aria-hidden="true"><circle cx="40" cy="28" r="16"></circle><path d="M12 70c0-16 12-26 28-26s28 10 28 26"></path></svg>${hasValidPhoto && renderTemplate`<img${addAttribute(artist.photo_url, "src")} alt="" loading="lazy" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;color:transparent;font-size:0;">`}${artist.genre && renderTemplate`<span class="artist-badge">${artist.genre}</span>`}</div><div class="artist-card-info"><h3>${artist.ensemble}</h3>${artist.stadt && renderTemplate`<p class="city">${artist.stadt}</p>`}</div></button></article><dialog${addAttribute(modalId, "id")} class="artist-detail-modal"><form method="dialog"><button class="modal-close"${addAttribute(t.close, "aria-label")}>&times;</button></form><div class="modal-body"><header class="modal-header"><h2>${artist.ensemble}</h2>${artist.genre && renderTemplate`<span class="modal-genre">${artist.genre}</span>`}</header>${videoId && renderTemplate`<div class="modal-video"><iframe${addAttribute(`https://www.youtube.com/embed/${videoId}`, "src")}${addAttribute(`${artist.ensemble} Video`, "title")} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`}<div class="modal-links">${artist.epk && renderTemplate`<a${addAttribute(artist.epk, "href")} target="_blank" rel="noopener" class="btn btn-secondary">${t.epkLink}</a>`}${bandcampUrl && renderTemplate`<a${addAttribute(bandcampUrl, "href")} target="_blank" rel="noopener" class="btn btn-secondary">${t.bandcampLink}</a>`}<button class="btn btn-primary"${addAttribute(`document.getElementById('${modalId}').close(); window.selectArtistForBooking('${safeName}');`, "onclick")}>${t.bookNow}</button></div></div></dialog>`;
}, "/data/internal/dataparti/main/Documents/living/work/Main/pearbeatsbooking/frontend/website/pearbeats-astro/src/components/ArtistCard.astro", void 0);
//#endregion
//#region src/components/ArtistGrid.astro
createAstro("https://pearbeats.de");
var $$ArtistGrid = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ArtistGrid;
	const { artists, texts, lang } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<section id="artists"><div class="container"><span class="section-label" data-lang="artists.label">${texts.artists.label}</span><h2 class="section-title" data-lang="artists.title">${texts.artists.title}</h2><p class="section-subtitle" data-lang="artists.subtitle">${texts.artists.subtitle}</p><div class="grid-3 artists-grid">${artists.map((artist) => renderTemplate`${renderComponent($$result, "ArtistCard", $$ArtistCard, {
		"artist": artist,
		"texts": texts,
		"lang": lang
	})}`)}</div></div></section>`;
}, "/data/internal/dataparti/main/Documents/living/work/Main/pearbeatsbooking/frontend/website/pearbeats-astro/src/components/ArtistGrid.astro", void 0);
//#endregion
//#region src/components/Services.astro
createAstro("https://pearbeats.de");
var $$Services = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Services;
	const { texts, lang } = Astro.props;
	const t = texts.services;
	const venuesNote = texts.venues?.note || "";
	return renderTemplate`${maybeRenderHead($$result)}<section id="services" class="services"><div class="container"><div class="section-header"><span class="section-label">${t.label}</span><h2 class="section-title">${t.title}</h2><p class="section-subtitle">${t.subtitle}</p></div><div class="grid-3"><!-- 1. Artist Booking + Netzwerk kombiniert --><div class="service-card"><div class="icon-circle"><svg viewBox="0 0 24 24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"></path></svg></div><h3>${t.s1Title}</h3><p>${t.s1Desc}</p></div><!-- 2. Kuratierung (zusammengeführt) --><div class="service-card"><div class="icon-circle"><svg viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg></div><h3>${t.s2Title}</h3><p>${t.s2Desc}</p></div><!-- 3. Full-Service Abwicklung (zusammengeführt) --><div class="service-card"><div class="icon-circle"><svg viewBox="0 0 24 24"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg></div><h3>${t.s3Title}</h3><p>${t.s3Desc}</p></div></div>${venuesNote && renderTemplate`<div class="venue-note"><p>${venuesNote}</p></div>`}</div></section>`;
}, "/data/internal/dataparti/main/Documents/living/work/Main/pearbeatsbooking/frontend/website/pearbeats-astro/src/components/Services.astro", void 0);
//#endregion
//#region src/data/loadArtists.ts
var FIELD_MAP = {
	Ensemble: "ensemble",
	Shortname: "shortname",
	active: "active",
	EPK: "epk",
	Bandcamp: "bandcamp",
	Video: "video",
	Gage: "gage_intern",
	genre: "genre",
	Techrider: "techrider_intern",
	beschreibung_de: "description_de",
	beschreibung_en: "description_en"
};
async function loadArtists() {
	try {
		const csvPath = path.join(process.cwd(), "src/data/artists.csv");
		const lines = (await fs.readFile(csvPath, "utf-8")).trim().split("\n");
		const headers = lines[0].split(",").map((h) => h.trim());
		return lines.slice(1).map((line) => {
			const values = line.split(",").map((v) => v.trim());
			const artist = {};
			headers.forEach((header, idx) => {
				const mappedKey = FIELD_MAP[header] ?? header;
				artist[mappedKey] = values[idx];
			});
			artist.active = [
				"ja",
				"true",
				"1",
				"yes"
			].includes(String(artist.active).toLowerCase());
			return artist;
		}).filter((artist) => artist.active);
	} catch (error) {
		console.error("Error loading artists:", error);
		return [];
	}
}
//#endregion
//#region src/components/Contact.astro
createAstro("https://pearbeats.de");
var $$Contact = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Contact;
	const { texts, lang } = Astro.props;
	const t = texts.contact;
	const artists = await loadArtists();
	return renderTemplate`${maybeRenderHead($$result)}<section id="contact" class="contact"><div class="container"><div class="contact-inner"><div class="contact-info"><span class="section-label" style="color: rgba(255,255,255,0.7);">${t.label}</span><h2>${t.title}</h2><p>${t.intro || "Ob Festival, Club oder Kulturhaus — wir finden den richtigen Act für Ihre Veranstaltung."}</p><!-- E-Mail --><div class="contact-detail"><svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></svg><span>${t.email}</span></div><!-- Telefon --><div class="contact-detail"><svg viewBox="0 0 24 24"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.44-5.15-3.75-6.59-6.59l1.97-1.57c.26-.26.35-.64.24-1.01A11.36 11.36 0 00 8.59 4.01C8.59 3.47 8.15 3 7.6 3H4.12C3.58 3 3.13 3.43 3.13 3.97 4.87 14.23 13.26 20.87 20.03 20.87c.54 0 .97-.44.97-.98v-3.48c0-.55-.44-1.01-.99-1.01z"></path></svg><span>${t.phone || "+49 (0) 30 1234 5678"}</span></div><!-- Location --><div class="contact-detail"><svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></svg><span>${t.location || "Berlin · Deutschland"}</span></div><!-- Social Media --><div class="social-links"><a href="https://instagram.com/pearbeats" target="_blank" rel="noopener" class="social-icon" aria-label="Instagram"><svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23c1.27-.06 1.65-.07 4.85-.07zM12 0C8.74 0 8.33.01 7.05.07c-4.27.2-6.78 2.71-6.98 6.98C.01 8.33 0 8.74 0 12c0 3.26.01 3.67.07 4.95.2 4.27 2.71 6.78 6.98 6.98 1.28.06 1.69.07 4.95.07 3.26 0 3.67-.01 4.95-.07 4.27-.2 6.78-2.71 6.98-6.98.06-1.28.07-1.69.07-4.95 0-3.26-.01-3.67-.07-4.95-.2-4.27-2.71-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84c-3.4 0-6.16 2.76-6.16 6.16s2.76 6.16 6.16 6.16 6.16-2.76 6.16-6.16S15.4 5.84 12 5.84zm0 10.16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm3.84-6.55c-.79 0-1.43-.64-1.43-1.43s.64-1.43 1.43-1.43 1.43.64 1.43 1.43-.64 1.43-1.43 1.43z"></path></svg></a><a href="https://facebook.com/pearbeats" target="_blank" rel="noopener" class="social-icon" aria-label="Facebook"><svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg></a><a href="https://linkedin.com/company/pearbeats" target="_blank" rel="noopener" class="social-icon" aria-label="LinkedIn"><svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg></a></div></div><div class="contact-form-wrapper"><form class="contact-form" id="main-contact-form"><!-- Anfragetyp-Auswahl --><div class="form-group"><label for="contact-type">${t.selectType || "Anfragetyp"} *</label><select id="contact-type" name="type" required><option value="">-- Bitte wählen --</option>${t.typeOptions.map((opt, i) => renderTemplate`<option${addAttribute(i, "value")}>${opt}</option>`)}</select></div><div class="form-group"><label for="contact-name">${t.name} *</label><input type="text" id="contact-name" name="name" required autocomplete="name"${addAttribute(t.namePlaceholder, "placeholder")}></div><div class="form-group"><label for="contact-email">${t.formEmail} *</label><input type="email" id="contact-email" name="email" required autocomplete="email"${addAttribute(t.emailPlaceholder, "placeholder")}></div><!-- Felder für Booking (Typ 0, 1, 3) --><div id="booking-fields" style="display: none;"><div class="form-group"><label for="contact-org">${t.organization}</label><input type="text" id="contact-org" name="organization" autocomplete="organization"${addAttribute(t.orgPlaceholder, "placeholder")}></div><div class="form-group"><label for="contact-artist">${t.selectArtist}</label><select id="contact-artist" name="artist"><option value="">${t.anyArtist}</option>${artists.map((artist) => renderTemplate`<option${addAttribute(artist.ensemble, "value")}>${artist.ensemble}</option>`)}<option value="other">${t.otherArtist}</option></select></div></div><!-- Felder für Bewerbung (Typ 2) --><div id="application-fields" style="display: none;"><div class="form-group"><label for="app-size">${t.ensembleSize} *</label><select id="app-size" name="ensemble_size"><option value="">-- ${t.selectSize} --</option><option value="solo">Solo</option><option value="duo">Duo</option><option value="3-7">3-7</option><option value="7-12">7-12</option><option value="12+">&gt;12</option></select></div><div class="form-group"><label for="app-social">${t.socialMedia}</label><input type="url" id="app-social" name="social_media" placeholder="https://instagram.com/..."></div><div class="form-group"><label for="app-website">${t.website}</label><input type="url" id="app-website" name="website" placeholder="https://..."></div><div class="form-group"><label for="app-audio">${t.audioLink}</label><input type="url" id="app-audio" name="audio_link" placeholder="https://bandcamp.com/..."></div></div><div class="form-group"><label for="contact-message">${t.formMessage} *</label><textarea id="contact-message" name="message" required${addAttribute(t.messagePlaceholder, "placeholder")}></textarea></div><button type="submit" class="form-submit">${t.submit}</button></form></div></div></div></section><script>
  function handleTypeChange() {
    var select = document.getElementById('contact-type');
    var bookingFields = document.getElementById('booking-fields');
    var applicationFields = document.getElementById('application-fields');
    var submitBtn = document.querySelector('.form-submit');
    
    if (!select) return;
    
    var val = select.value;
    
    if (val === '2') {
      if (bookingFields) bookingFields.style.display = 'none';
      if (applicationFields) applicationFields.style.display = '';
      if (submitBtn) submitBtn.textContent = 'Bewerbung absenden';
    } else if (val !== '') {
      if (bookingFields) bookingFields.style.display = '';
      if (applicationFields) applicationFields.style.display = 'none';
      if (submitBtn) submitBtn.textContent = 'Anfrage absenden';
    } else {
      if (bookingFields) bookingFields.style.display = 'none';
      if (applicationFields) applicationFields.style.display = 'none';
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    var typeSelect = document.getElementById('contact-type');
    if (typeSelect) {
      typeSelect.addEventListener('change', handleTypeChange);
    }

    var mainForm = document.getElementById('main-contact-form');
    if (mainForm) {
      mainForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Anfrage wird gesendet... (API noch nicht verbunden)');
        mainForm.reset();
        handleTypeChange();
      });
    }
  });

  window.selectArtistForBooking = function(artistName) {
    var modals = document.querySelectorAll('dialog[open]');
    modals.forEach(function(m) { m.close(); });

    setTimeout(function() {
      var typeSelect = document.getElementById('contact-type');
      if (typeSelect) {
        typeSelect.value = '0';
        typeSelect.dispatchEvent(new Event('change'));
      }

      var artistSelect = document.getElementById('contact-artist');
      if (artistSelect) {
        var found = false;
        for (var i = 0; i < artistSelect.options.length; i++) {
          if (artistSelect.options[i].value === artistName) {
            artistSelect.selectedIndex = i;
            found = true;
            break;
          }
        }
        if (!found) artistSelect.value = 'other';
      }

      var contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 300);
  };
  // Force-close all modals on page load
  document.addEventListener('DOMContentLoaded', function() {
    var allDialogs = document.querySelectorAll('dialog');
    allDialogs.forEach(function(d) {
      if (d.hasAttribute('open')) {
        d.removeAttribute('open');
      }
      try { d.close(); } catch(e) {}
    });
  });
<\/script>`;
}, "/data/internal/dataparti/main/Documents/living/work/Main/pearbeatsbooking/frontend/website/pearbeats-astro/src/components/Contact.astro", void 0);
//#endregion
//#region src/components/Footer.astro
createAstro("https://pearbeats.de");
var $$Footer = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Footer;
	const { texts } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<footer><div class="container"><div class="footer-inner"><div class="footer-col"><div class="footer-brand"><div class="logo-mark"></div>Pear<span>beats</span></div><p>${texts.footer.desc}</p></div><div class="footer-col"><h4>${texts.footer.navHeader}</h4><ul><li><a href="/#about">${texts.nav.home}</a></li><li><a href="/#artists">${texts.nav.artists}</a></li><li><a href="/#services">${texts.nav.services}</a></li><li><a href="/#venues">${texts.nav.venues}</a></li></ul></div><div class="footer-col"><h4>${texts.footer.contactHeader}</h4><ul><li><a href="mailto:booking@pearbeats.de">booking@pearbeats.de</a></li><li><a href="tel:+493012345678">${texts.contact.phone}</a></li><li>Berlin</li></ul></div><div class="footer-col"><h4>${texts.footer.legalHeader}</h4><ul><li><a href="#">Impressum</a></li><li><a href="#">Datenschutz</a></li><li><a href="#">AGB</a></li></ul></div></div><div class="footer-bottom"><p>&copy; 2025–2026 Pearbeats. ${texts.footer.copyright}</p><div class="footer-domains"><a href="https://pearbeats.eu">pearbeats.eu</a><a href="https://pearbeats.de">pearbeats.de</a></div></div></div></footer>`;
}, "/data/internal/dataparti/main/Documents/living/work/Main/pearbeatsbooking/frontend/website/pearbeats-astro/src/components/Footer.astro", void 0);
//#endregion
export { $$ArtistGrid as a, $$Navbar as c, createComponent as d, __exportAll as f, $$Services as i, uiTexts as l, $$Contact as n, $$About as o, loadArtists as r, $$Hero as s, $$Footer as t, $$Layout as u };
