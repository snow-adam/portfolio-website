/* empty css                                 */
import { e as createComponent, f as createAstro, h as addAttribute, k as renderComponent, l as renderHead, r as renderTemplate } from '../chunks/astro/server_D4EFwejq.mjs';
import 'kleur/colors';
import { $ as $$ClientRouter, a as $$Index } from '../chunks/index_Dsn4UNgx.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Projects;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/webp" href="/favicon.webp"><meta name="viewport" content="width=device-width"><meta name="description" content="A static webpage elegantly crafted to deliver a clean, seamless view of my personal portfolio."><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>adam snow.</title>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderComponent($$result, "SpeedInsights", $$Index, {})}${renderHead()}</head> <body class="bg-stone-950 text-white max-w-2xl lg:mx-auto md:ml-4 md:mr-4 ml-6 mr-6"> <nav class="mt-14"> <ul class="flex space-x-4"> <li> <a href="/" class="text-neutral-400 hover:text-neutral-200 transition-all">home</a> </li> <li> <a href="/projects" aria-current="page" class="underline underline-offset-8 decoration-neutral-800 hover:text-neutral-200 transition-all">
projects
</a> </li> </ul> </nav> <main> <header class="font-semibold text-2xl mt-16"> <h1>browse my projects</h1> </header> <section class="grid grid-cols-1 sm:grid-cols-2 gap-4 w-2xl mt-10 h-24 mb-36"> <a href="https://replit.com/@snow-adam/terminal-arena" target="_blank" class="cursor-pointer bg-neutral-800 rounded border border-neutral-700 flex items-center h-24"> <img src="/images/pokecoin.webp" alt="Portfolio Website" class="w-16 h-16 ml-4 rounded-full border border-neutral-700"> <img src="/images/python.webp" alt="Tailwind CSS Icon" class="w-6 h-6 -ml-7 mt-10 rounded-full border border-neutral-700"> <p class="ml-3 font-medium text-neutral-100 whitespace-nowrap">
terminal-arena<br><span class="font-normal text-neutral-400">replit.com</span> </p> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mr-4 text-neutral-300 ml-auto"> <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path> </svg> </a> <article class="cursor-pointer bg-neutral-800 rounded border border-neutral-700 flex items-center h-24"> <img src="/images/compass.webp" alt="Portfolio Website" class="w-16 h-16 ml-4 rounded-full border border-neutral-700"> <img src="/images/tailwind.webp" alt="Tailwind CSS Icon" class="w-6 h-6 -ml-7 mt-10 rounded-full border border-neutral-700"> <p class="ml-3 font-medium text-neutral-100 whitespace-nowrap">
portfolio-website<br><span class="font-normal text-neutral-400">adamsnow.dev</span> </p> </article> </section> </main> </body></html>`;
}, "C:/Users/adam/Documents/GitHub/portfolio-website/src/pages/projects.astro", void 0);

const $$file = "C:/Users/adam/Documents/GitHub/portfolio-website/src/pages/projects.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Projects,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
