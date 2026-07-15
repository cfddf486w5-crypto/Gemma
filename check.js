import { prebuiltAppConfig } from "@mlc-ai/web-llm";
console.log(prebuiltAppConfig.model_list.map(m => m.model_id).filter(id => id.includes("q4f16_1-MLC") && (id.includes("Llama-3.2") || id.includes("gemma") || id.includes("Qwen") || id.includes("Phi"))));
