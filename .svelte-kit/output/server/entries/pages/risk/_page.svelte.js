import { c as create_ssr_component, v as validate_component, j as each, i as escape } from "../../../chunks/ssr.js";
import { C as Card, a as Card_header, b as Card_title, c as Card_content } from "../../../chunks/card-title.js";
import "clsx";
import "../../../chunks/index2.js";
import { I as Icon, B as Badge } from "../../../chunks/Icon.js";
import { B as Button } from "../../../chunks/button.js";
import { F as File_text, D as Download } from "../../../chunks/file-text.js";
const Check = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "M20 6 9 17l-5-5" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "check" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
function getPriorityColor(priority) {
  switch (priority) {
    case "Critical":
      return "destructive";
    case "High":
      return "outline";
    case "Medium":
      return "secondary";
    default:
      return "secondary";
  }
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let completedCount;
  let progressPercentage;
  let checkedItems = /* @__PURE__ */ new Set();
  const riskItems = [
    {
      label: "Regulatory Fines",
      level: "High",
      color: "destructive"
    },
    {
      label: "Reputation Damage",
      level: "High",
      color: "destructive"
    },
    {
      label: "Operational Disruption",
      level: "Medium",
      color: "outline"
    },
    {
      label: "Customer Trust Loss",
      level: "Critical",
      color: "destructive"
    }
  ];
  const checklistItems = [
    {
      id: 1,
      title: "Prompt Injection Testing",
      description: "Test for direct and indirect prompt injection vulnerabilities",
      priority: "Critical"
    },
    {
      id: 2,
      title: "Output Validation",
      description: "Verify proper sanitization of LLM outputs",
      priority: "High"
    },
    {
      id: 3,
      title: "Data Leakage Assessment",
      description: "Check for unintended disclosure of training data",
      priority: "Critical"
    },
    {
      id: 4,
      title: "Access Control Review",
      description: "Validate authentication and authorization mechanisms",
      priority: "High"
    },
    {
      id: 5,
      title: "Rate Limiting Tests",
      description: "Assess DoS protection and resource management",
      priority: "Medium"
    },
    {
      id: 6,
      title: "Model Robustness",
      description: "Test model behavior under adversarial inputs",
      priority: "High"
    }
  ];
  completedCount = checkedItems.size;
  progressPercentage = completedCount / checklistItems.length * 100;
  return `${$$result.head += `<!-- HEAD_svelte-17luo0v_START -->${$$result.title = `<title>Risk Assessment - ZioSec Dashboard</title>`, ""}<!-- HEAD_svelte-17luo0v_END -->`, ""} <div class="p-6 space-y-6"> <div class="flex items-center justify-between"><div data-svelte-h="svelte-1t34pls"><h1 class="text-3xl font-bold tracking-tight">Risk Assessment &amp; Compliance</h1> <p class="text-muted-foreground">Comprehensive risk analysis and security testing checklist.</p></div> <div class="flex items-center space-x-2">${validate_component(Button, "Button").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(File_text, "FileText").$$render($$result, { class: "mr-2 h-4 w-4" }, {}, {})}
				Generate Assessment Report`;
    }
  })} ${validate_component(Button, "Button").$$render($$result, { variant: "outline" }, {}, {
    default: () => {
      return `${validate_component(Download, "Download").$$render($$result, { class: "mr-2 h-4 w-4" }, {}, {})}
				Export Testing Checklist`;
    }
  })}</div></div>  ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Card_header, "CardHeader").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Card_title, "CardTitle").$$render($$result, {}, {}, {
            default: () => {
              return `Business Impact Assessment`;
            }
          })}`;
        }
      })} ${validate_component(Card_content, "CardContent").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">${each(riskItems, (item) => {
            return `<div class="flex items-center justify-between p-3 bg-background border rounded-lg"><span class="font-medium">${escape(item.label)}</span> ${validate_component(Badge, "Badge").$$render($$result, { variant: item.color }, {}, {
              default: () => {
                return `${escape(item.level)}`;
              }
            })} </div>`;
          })}</div>`;
        }
      })}`;
    }
  })}  ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Card_header, "CardHeader").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="flex items-center justify-between">${validate_component(Card_title, "CardTitle").$$render($$result, {}, {}, {
            default: () => {
              return `Security Testing Checklist`;
            }
          })} <div class="text-sm text-muted-foreground">${escape(completedCount)}/${escape(checklistItems.length)} completed</div></div> <div class="w-full bg-secondary rounded-full h-2 mt-2"><div class="bg-primary h-2 rounded-full transition-all duration-300" style="${"width: " + escape(progressPercentage, true) + "%"}"></div></div>`;
        }
      })} ${validate_component(Card_content, "CardContent").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="space-y-3">${each(checklistItems, (item) => {
            return `<div class="flex items-start space-x-3 p-3 bg-background border rounded-lg hover:border-primary transition-colors"><button class="${"mt-1 h-5 w-5 rounded border-2 border-input flex items-center justify-center transition-colors " + escape(
              checkedItems.has(item.id) ? "bg-primary border-primary text-primary-foreground" : "",
              true
            )}">${checkedItems.has(item.id) ? `${validate_component(Check, "Check").$$render($$result, { class: "h-3 w-3" }, {}, {})}` : ``}</button> <div class="flex-1 min-w-0"><div class="flex items-center justify-between"><h4 class="font-medium">${escape(item.title)}</h4> ${validate_component(Badge, "Badge").$$render(
              $$result,
              {
                variant: getPriorityColor(item.priority),
                class: "text-xs"
              },
              {},
              {
                default: () => {
                  return `${escape(item.priority)} `;
                }
              }
            )}</div> <p class="text-sm text-muted-foreground mt-1">${escape(item.description)}</p></div> </div>`;
          })}</div>`;
        }
      })}`;
    }
  })}</div>`;
});
export {
  Page as default
};
