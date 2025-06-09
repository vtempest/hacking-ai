import { c as create_ssr_component, v as validate_component, a as add_attribute, j as each, i as escape } from "../../../chunks/ssr.js";
import { C as Card, a as Card_header, b as Card_title, c as Card_content } from "../../../chunks/card-title.js";
import "clsx";
import { I as Icon, B as Badge } from "../../../chunks/Icon.js";
import { s as securityTools } from "../../../chunks/dashboard.js";
import { S as Search } from "../../../chunks/search.js";
const Star = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "polygon",
      {
        "points": "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "star" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
function renderStars(readiness) {
  return Array.from({ length: 5 }, (_, i) => i < readiness);
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filteredTools;
  let searchTerm = "";
  let selectedCategory = "";
  filteredTools = securityTools.filter((tool) => {
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) || tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "";
    return matchesSearch && matchesCategory;
  });
  return `${$$result.head += `<!-- HEAD_svelte-s2qu4j_START -->${$$result.title = `<title>Security Testing Tools - ZioSec Dashboard</title>`, ""}<!-- HEAD_svelte-s2qu4j_END -->`, ""} <div class="p-6 space-y-6"> <div class="flex items-center justify-between"><div data-svelte-h="svelte-1fx5vc5"><h1 class="text-3xl font-bold tracking-tight">Enterprise Security Testing Tools</h1> <p class="text-muted-foreground">Comprehensive toolkit for LLM security assessment and testing.</p></div> <div class="flex items-center space-x-2"><div class="relative">${validate_component(Search, "Search").$$render(
    $$result,
    {
      class: "absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground"
    },
    {},
    {}
  )} <input type="text" placeholder="Search tools..." class="pl-10 pr-4 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"${add_attribute("value", searchTerm, 0)}></div> <select class="px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"><option value="" data-svelte-h="svelte-1ftazgp">All Categories</option><option value="Vulnerability Scanner" data-svelte-h="svelte-1cunqeq">Vulnerability Scanner</option><option value="Testing Framework" data-svelte-h="svelte-c5cs02">Testing Framework</option><option value="Security Platform" data-svelte-h="svelte-1wecrsw">Security Platform</option><option value="Red Team Platform" data-svelte-h="svelte-11iaeas">Red Team Platform</option><option value="AI Testing Platform" data-svelte-h="svelte-1es8fqg">AI Testing Platform</option></select></div></div>  <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">${each(filteredTools, (tool) => {
    return `${validate_component(Card, "Card").$$render(
      $$result,
      {
        class: "transition-all hover:shadow-md cursor-pointer border-l-4 border-l-primary"
      },
      {},
      {
        default: () => {
          return `${validate_component(Card_header, "CardHeader").$$render($$result, { class: "pb-3" }, {}, {
            default: () => {
              return `<div class="space-y-2">${validate_component(Card_title, "CardTitle").$$render($$result, { class: "text-lg" }, {}, {
                default: () => {
                  return `${escape(tool.name)}`;
                }
              })} <div class="flex flex-wrap gap-2">${validate_component(Badge, "Badge").$$render($$result, { variant: "outline", class: "text-xs" }, {}, {
                default: () => {
                  return `${escape(tool.category)}`;
                }
              })} ${validate_component(Badge, "Badge").$$render($$result, { variant: "secondary", class: "text-xs" }, {}, {
                default: () => {
                  return `${escape(tool.type)}`;
                }
              })} </div></div> `;
            }
          })} ${validate_component(Card_content, "CardContent").$$render($$result, {}, {}, {
            default: () => {
              return `<p class="text-sm text-muted-foreground mb-4">${escape(tool.description)}</p> <div class="space-y-3"><div class="flex items-center justify-between"><span class="text-sm text-muted-foreground" data-svelte-h="svelte-uf5yo5">Enterprise Readiness</span> <div class="flex items-center space-x-1">${each(renderStars(tool.readiness), (filled) => {
                return `${validate_component(Star, "Star").$$render(
                  $$result,
                  {
                    class: "h-3 w-3 " + (filled ? "fill-primary text-primary" : "text-muted-foreground")
                  },
                  {},
                  {}
                )}`;
              })} </div></div> <div class="text-xs text-muted-foreground">Vendor: ${escape(tool.vendor)} </div></div> `;
            }
          })} `;
        }
      }
    )}`;
  })}</div></div>`;
});
export {
  Page as default
};
