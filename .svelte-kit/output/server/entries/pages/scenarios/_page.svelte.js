import { c as create_ssr_component, v as validate_component, a as add_attribute, j as each, i as escape } from "../../../chunks/ssr.js";
import { C as Card, a as Card_header, b as Card_title, c as Card_content } from "../../../chunks/card-title.js";
import "clsx";
import { B as Badge } from "../../../chunks/Icon.js";
import { t as testingScenarios } from "../../../chunks/dashboard.js";
import { S as Search } from "../../../chunks/search.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filteredScenarios;
  let searchTerm = "";
  filteredScenarios = testingScenarios.filter((scenario) => {
    return scenario.title.toLowerCase().includes(searchTerm.toLowerCase()) || scenario.description.toLowerCase().includes(searchTerm.toLowerCase()) || scenario.industry.toLowerCase().includes(searchTerm.toLowerCase());
  });
  return `${$$result.head += `<!-- HEAD_svelte-1srt8v2_START -->${$$result.title = `<title>Enterprise Scenarios - ZioSec Dashboard</title>`, ""}<!-- HEAD_svelte-1srt8v2_END -->`, ""} <div class="p-6 space-y-6"> <div class="flex items-center justify-between"><div data-svelte-h="svelte-1c4d62y"><h1 class="text-3xl font-bold tracking-tight">Enterprise Testing Scenarios</h1> <p class="text-muted-foreground">Real-world scenarios for comprehensive LLM security testing.</p></div> <div class="flex items-center space-x-2"><div class="relative">${validate_component(Search, "Search").$$render(
    $$result,
    {
      class: "absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground"
    },
    {},
    {}
  )} <input type="text" placeholder="Search scenarios..." class="pl-10 pr-4 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"${add_attribute("value", searchTerm, 0)}></div></div></div>  <div class="grid gap-6 md:grid-cols-2">${each(filteredScenarios, (scenario) => {
    return `${validate_component(Card, "Card").$$render(
      $$result,
      {
        class: "transition-all hover:shadow-md cursor-pointer border-l-4 border-l-orange-500"
      },
      {},
      {
        default: () => {
          return `${validate_component(Card_header, "CardHeader").$$render($$result, { class: "pb-3" }, {}, {
            default: () => {
              return `${validate_component(Card_title, "CardTitle").$$render($$result, { class: "text-lg" }, {}, {
                default: () => {
                  return `${escape(scenario.title)}`;
                }
              })} <p class="text-sm text-muted-foreground italic">${escape(scenario.context)}</p> `;
            }
          })} ${validate_component(Card_content, "CardContent").$$render($$result, {}, {}, {
            default: () => {
              return `<p class="text-sm text-muted-foreground mb-4">${escape(scenario.description)}</p> <div class="space-y-3"><div><span class="text-xs font-medium text-muted-foreground uppercase tracking-wide" data-svelte-h="svelte-1iwzjo1">Industry</span> <div class="mt-1">${validate_component(Badge, "Badge").$$render($$result, { variant: "outline" }, {}, {
                default: () => {
                  return `${escape(scenario.industry)}`;
                }
              })} </div></div> <div><span class="text-xs font-medium text-muted-foreground uppercase tracking-wide" data-svelte-h="svelte-bat6vu">Risk Areas</span> <div class="flex flex-wrap gap-2 mt-1">${each(scenario.riskTags, (tag) => {
                return `${validate_component(Badge, "Badge").$$render($$result, { variant: "destructive", class: "text-xs" }, {}, {
                  default: () => {
                    return `${escape(tag)}`;
                  }
                })}`;
              })}</div> </div></div> `;
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
