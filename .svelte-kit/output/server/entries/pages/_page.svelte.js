import { c as create_ssr_component, v as validate_component, i as escape, j as each } from "../../chunks/ssr.js";
import { C as Card, a as Card_header, b as Card_title, c as Card_content } from "../../chunks/card-title.js";
import "clsx";
import "../../chunks/index2.js";
import { I as Icon, B as Badge } from "../../chunks/Icon.js";
import { V as VulnerabilityCard } from "../../chunks/VulnerabilityCard.js";
import { d as dashboardStats, v as vulnerabilities } from "../../chunks/dashboard.js";
import { c as currentUser, B as Bar_chart_3 } from "../../chunks/bar-chart-3.js";
import { B as Button } from "../../chunks/button.js";
import { D as Download, F as File_text } from "../../chunks/file-text.js";
import { S as Search } from "../../chunks/search.js";
const Zap = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "zap" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const StatsCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { value } = $$props;
  let { description } = $$props;
  let { status = "secondary" } = $$props;
  let { statusText } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0) $$bindings.description(description);
  if ($$props.status === void 0 && $$bindings.status && status !== void 0) $$bindings.status(status);
  if ($$props.statusText === void 0 && $$bindings.statusText && statusText !== void 0) $$bindings.statusText(statusText);
  return `${validate_component(Card, "Card").$$render($$result, { class: "transition-all hover:shadow-md" }, {}, {
    default: () => {
      return `${validate_component(Card_header, "CardHeader").$$render(
        $$result,
        {
          class: "flex flex-row items-center justify-between space-y-0 pb-2"
        },
        {},
        {
          default: () => {
            return `${validate_component(Card_title, "CardTitle").$$render(
              $$result,
              {
                class: "text-sm font-medium text-muted-foreground"
              },
              {},
              {
                default: () => {
                  return `${escape(title)}`;
                }
              }
            )} ${validate_component(Badge, "Badge").$$render(
              $$result,
              {
                variant: status === "destructive" ? "destructive" : status === "warning" ? "outline" : "secondary"
              },
              {},
              {
                default: () => {
                  return `${escape(statusText)}`;
                }
              }
            )}`;
          }
        }
      )} ${validate_component(Card_content, "CardContent").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="text-2xl font-bold text-primary">${escape(value)}%</div> <p class="text-xs text-muted-foreground mt-1">${escape(description)}</p>`;
        }
      })}`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const topVulnerabilities = vulnerabilities.slice(0, 3);
  return `${$$result.head += `<!-- HEAD_svelte-sobpgy_START -->${$$result.title = `<title>ZioSec Dashboard - LLM Security Testing Platform</title>`, ""}<!-- HEAD_svelte-sobpgy_END -->`, ""} <div class="p-6 space-y-6"> <div class="flex items-center justify-between"><div><h1 class="text-3xl font-bold tracking-tight" data-svelte-h="svelte-1n2jk2t">Security Dashboard</h1> <p class="text-muted-foreground">Welcome back, ${escape(currentUser.name)}. Here&#39;s your LLM security overview.</p></div> <div class="flex items-center space-x-2">${validate_component(Button, "Button").$$render($$result, { variant: "outline", size: "sm" }, {}, {
    default: () => {
      return `${validate_component(Download, "Download").$$render($$result, { class: "mr-2 h-4 w-4" }, {}, {})}
				Export Report`;
    }
  })} <div class="flex items-center space-x-2 text-sm" data-svelte-h="svelte-1h8o46q"><div class="h-2 w-2 bg-green-500 rounded-full"></div> <span class="text-muted-foreground">Connected</span></div></div></div>  <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">${validate_component(StatsCard, "StatsCard").$$render(
    $$result,
    {
      title: "Critical Vulnerabilities",
      value: dashboardStats.criticalVulnerabilities,
      description: "Organizations vulnerable to prompt injection",
      status: "destructive",
      statusText: "High Risk"
    },
    {},
    {}
  )} ${validate_component(StatsCard, "StatsCard").$$render(
    $$result,
    {
      title: "Security Tool Adoption",
      value: dashboardStats.securityToolAdoption,
      description: "Enterprises using LLM security tools",
      status: "warning",
      statusText: "Low Coverage"
    },
    {},
    {}
  )} ${validate_component(StatsCard, "StatsCard").$$render(
    $$result,
    {
      title: "Attack Success Rate",
      value: dashboardStats.attackSuccessRate,
      description: "Direct prompt injection attempts",
      status: "destructive",
      statusText: "Critical"
    },
    {},
    {}
  )} ${validate_component(StatsCard, "StatsCard").$$render(
    $$result,
    {
      title: "GenAI Adoption 2026",
      value: dashboardStats.genAiAdoption2026,
      description: "Predicted enterprise adoption",
      status: "secondary",
      statusText: "Growing"
    },
    {},
    {}
  )}</div>  ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Card_header, "CardHeader").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Card_title, "CardTitle").$$render($$result, {}, {}, {
            default: () => {
              return `Quick Assessment Actions`;
            }
          })}`;
        }
      })} ${validate_component(Card_content, "CardContent").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="grid gap-3 md:grid-cols-2 lg:grid-cols-4">${validate_component(Button, "Button").$$render($$result, { class: "justify-start" }, {}, {
            default: () => {
              return `${validate_component(Search, "Search").$$render($$result, { class: "mr-2 h-4 w-4" }, {}, {})}
					Start Vulnerability Scan`;
            }
          })} ${validate_component(Button, "Button").$$render(
            $$result,
            {
              variant: "outline",
              class: "justify-start"
            },
            {},
            {
              default: () => {
                return `${validate_component(File_text, "FileText").$$render($$result, { class: "mr-2 h-4 w-4" }, {}, {})}
					Generate Testing Checklist`;
              }
            }
          )} ${validate_component(Button, "Button").$$render(
            $$result,
            {
              variant: "outline",
              class: "justify-start"
            },
            {},
            {
              default: () => {
                return `${validate_component(Zap, "Zap").$$render($$result, { class: "mr-2 h-4 w-4" }, {}, {})}
					Test Payload Library`;
              }
            }
          )} ${validate_component(Button, "Button").$$render(
            $$result,
            {
              variant: "outline",
              class: "justify-start"
            },
            {},
            {
              default: () => {
                return `${validate_component(Bar_chart_3, "BarChart3").$$render($$result, { class: "mr-2 h-4 w-4" }, {}, {})}
					Create Risk Report`;
              }
            }
          )}</div>`;
        }
      })}`;
    }
  })}  <div><div class="flex items-center justify-between mb-4"><h2 class="text-2xl font-bold tracking-tight" data-svelte-h="svelte-1w9czd3">Critical Vulnerabilities</h2> ${validate_component(Button, "Button").$$render($$result, { variant: "outline", size: "sm" }, {}, {
    default: () => {
      return `View All`;
    }
  })}</div> <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">${each(topVulnerabilities, (vulnerability) => {
    return `${validate_component(VulnerabilityCard, "VulnerabilityCard").$$render($$result, { vulnerability }, {}, {})}`;
  })}</div></div>  ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Card_header, "CardHeader").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Card_title, "CardTitle").$$render($$result, {}, {}, {
            default: () => {
              return `Recent Security Activity`;
            }
          })}`;
        }
      })} ${validate_component(Card_content, "CardContent").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="space-y-4" data-svelte-h="svelte-1rv4hqn"><div class="flex items-center space-x-4"><div class="h-2 w-2 bg-red-500 rounded-full"></div> <div class="flex-1"><p class="text-sm font-medium">Critical vulnerability detected in customer chatbot</p> <p class="text-xs text-muted-foreground">2 hours ago</p></div></div> <div class="flex items-center space-x-4"><div class="h-2 w-2 bg-yellow-500 rounded-full"></div> <div class="flex-1"><p class="text-sm font-medium">Prompt injection test completed</p> <p class="text-xs text-muted-foreground">4 hours ago</p></div></div> <div class="flex items-center space-x-4"><div class="h-2 w-2 bg-green-500 rounded-full"></div> <div class="flex-1"><p class="text-sm font-medium">Security assessment report generated</p> <p class="text-xs text-muted-foreground">1 day ago</p></div></div></div>`;
        }
      })}`;
    }
  })}</div>`;
});
export {
  Page as default
};
