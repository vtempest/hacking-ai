import { c as create_ssr_component, v as validate_component, a as add_attribute, j as each, i as escape } from "../../../chunks/ssr.js";
import { C as Card, a as Card_header, b as Card_title, c as Card_content } from "../../../chunks/card-title.js";
import "clsx";
import { B as Badge } from "../../../chunks/Icon.js";
import { a as attackTechniques } from "../../../chunks/dashboard.js";
import { S as Search } from "../../../chunks/search.js";
function getComplexityColor(complexity) {
  switch (complexity) {
    case "Low":
      return "secondary";
    case "Medium":
      return "outline";
    case "High":
      return "destructive";
    default:
      return "secondary";
  }
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filteredTechniques;
  let searchTerm = "";
  let selectedComplexity = "";
  filteredTechniques = attackTechniques.filter((technique) => {
    const matchesSearch = technique.name.toLowerCase().includes(searchTerm.toLowerCase()) || technique.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesComplexity = selectedComplexity === "";
    return matchesSearch && matchesComplexity;
  });
  return `${$$result.head += `<!-- HEAD_svelte-1ok4t9b_START -->${$$result.title = `<title>Attack Techniques - ZioSec Dashboard</title>`, ""}<!-- HEAD_svelte-1ok4t9b_END -->`, ""} <div class="p-6 space-y-6"> <div class="flex items-center justify-between"><div data-svelte-h="svelte-1jwi06r"><h1 class="text-3xl font-bold tracking-tight">Attack Techniques &amp; Methodologies</h1> <p class="text-muted-foreground">Explore various attack vectors and their effectiveness against LLM systems.</p></div> <div class="flex items-center space-x-2"><div class="relative">${validate_component(Search, "Search").$$render(
    $$result,
    {
      class: "absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground"
    },
    {},
    {}
  )} <input type="text" placeholder="Search techniques..." class="pl-10 pr-4 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"${add_attribute("value", searchTerm, 0)}></div> <select class="px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"><option value="" data-svelte-h="svelte-w9maag">All Complexity Levels</option><option value="Low" data-svelte-h="svelte-17y6xfy">Low</option><option value="Medium" data-svelte-h="svelte-3sgbd6">Medium</option><option value="High" data-svelte-h="svelte-ihm9xq">High</option></select></div></div>  <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">${each(filteredTechniques, (technique) => {
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
              return `<div class="flex items-start justify-between">${validate_component(Card_title, "CardTitle").$$render($$result, { class: "text-lg" }, {}, {
                default: () => {
                  return `${escape(technique.name)}`;
                }
              })} ${validate_component(Badge, "Badge").$$render(
                $$result,
                {
                  variant: getComplexityColor(technique.complexity)
                },
                {},
                {
                  default: () => {
                    return `${escape(technique.complexity)} `;
                  }
                }
              )}</div> `;
            }
          })} ${validate_component(Card_content, "CardContent").$$render($$result, {}, {}, {
            default: () => {
              return `<p class="text-sm text-muted-foreground mb-4">${escape(technique.description)}</p> <div class="space-y-2"><div class="flex items-center justify-between text-sm"><span class="text-muted-foreground" data-svelte-h="svelte-1okeqhf">Success Rate</span> <span class="font-medium">${escape(technique.successRate)}%</span></div> <div class="w-full bg-secondary rounded-full h-2"><div class="bg-primary h-2 rounded-full transition-all duration-300" style="${"width: " + escape(technique.successRate, true) + "%"}"></div></div> <div class="text-xs text-muted-foreground">Category: ${escape(technique.category)} </div></div> `;
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
