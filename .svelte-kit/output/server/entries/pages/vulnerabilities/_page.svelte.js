import { c as create_ssr_component, v as validate_component, a as add_attribute, j as each } from "../../../chunks/ssr.js";
import { C as Card, c as Card_content } from "../../../chunks/card-title.js";
import "clsx";
import "../../../chunks/index2.js";
import { V as VulnerabilityCard } from "../../../chunks/VulnerabilityCard.js";
import { v as vulnerabilities } from "../../../chunks/dashboard.js";
import { S as Search } from "../../../chunks/search.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filteredVulnerabilities;
  let searchTerm = "";
  let selectedRisk = "";
  filteredVulnerabilities = vulnerabilities.filter((vuln) => {
    const matchesSearch = vuln.title.toLowerCase().includes(searchTerm.toLowerCase()) || vuln.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRisk = selectedRisk === "";
    return matchesSearch && matchesRisk;
  });
  return `${$$result.head += `<!-- HEAD_svelte-1s8iyd9_START -->${$$result.title = `<title>OWASP LLM Top 10 - ZioSec Dashboard</title>`, ""}<!-- HEAD_svelte-1s8iyd9_END -->`, ""} <div class="p-6 space-y-6"> <div class="flex items-center justify-between"><div data-svelte-h="svelte-1mgj6ff"><h1 class="text-3xl font-bold tracking-tight">OWASP LLM Top 10 Vulnerabilities</h1> <p class="text-muted-foreground">Comprehensive overview of the most critical LLM security vulnerabilities.</p></div> <div class="flex items-center space-x-2"><div class="relative">${validate_component(Search, "Search").$$render(
    $$result,
    {
      class: "absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground"
    },
    {},
    {}
  )} <input type="text" placeholder="Search vulnerabilities..." class="pl-10 pr-4 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"${add_attribute("value", searchTerm, 0)}></div> <select class="px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"><option value="" data-svelte-h="svelte-1kfbm75">All Risk Levels</option><option value="Critical" data-svelte-h="svelte-10kqfl2">Critical</option><option value="High" data-svelte-h="svelte-ihm9xq">High</option><option value="Medium" data-svelte-h="svelte-3sgbd6">Medium</option><option value="Low" data-svelte-h="svelte-17y6xfy">Low</option></select></div></div>  <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">${each(filteredVulnerabilities, (vulnerability) => {
    return `${validate_component(VulnerabilityCard, "VulnerabilityCard").$$render($$result, { vulnerability }, {}, {})}`;
  })}</div> ${filteredVulnerabilities.length === 0 ? `${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Card_content, "CardContent").$$render(
        $$result,
        {
          class: "flex flex-col items-center justify-center py-12"
        },
        {},
        {
          default: () => {
            return `<div class="text-center" data-svelte-h="svelte-oufgzq"><h3 class="text-lg font-semibold mb-2">No vulnerabilities found</h3> <p class="text-muted-foreground">Try adjusting your search criteria.</p></div>`;
          }
        }
      )}`;
    }
  })}` : ``}</div>`;
});
export {
  Page as default
};
