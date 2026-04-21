import modelscope from "@/assets/providers/modelscope.png";
import aliyunCodingplan from "@/assets/providers/aliyun-codingplan.png";
import deepseek from "@/assets/providers/deepseek.png";
import gemini from "@/assets/providers/gemini.png";
import azureOpenai from "@/assets/providers/azure-openai.png";
import kimi from "@/assets/providers/kimi.png";
import anthropic from "@/assets/providers/anthropic.png";
import ollama from "@/assets/providers/ollama.png";
import minimax from "@/assets/providers/minimax.png";
import openai from "@/assets/providers/openai.png";
import dashscope from "@/assets/providers/dashscope.png";
import lmstudio from "@/assets/providers/lmstudio.png";
import siliconflow from "@/assets/providers/siliconflow.png";
import qwenpawLocal from "@/assets/providers/qwenpaw-local.png";
import zhipu from "@/assets/providers/zhipu.png";
import openrouter from "@/assets/providers/openrouter.png";
import opencode from "@/assets/providers/opencode.png";
import defaultProvider from "@/assets/providers/default-provider.jpg";

export const providerIcon = (provider: string) => {
  switch (provider) {
    case "modelscope":
      return modelscope;
    case "aliyun-codingplan":
    case "aliyun-codingplan-intl":
      return aliyunCodingplan;
    case "deepseek":
      return deepseek;
    case "gemini":
      return gemini;
    case "azure-openai":
      return azureOpenai;
    case "kimi-cn":
    case "kimi-intl":
      return kimi;
    case "anthropic":
      return anthropic;
    case "ollama":
      return ollama;
    case "minimax-cn":
    case "minimax":
      return minimax;
    case "openai":
      return openai;
    case "dashscope":
      return dashscope;
    case "lmstudio":
      return lmstudio;
    case "siliconflow-cn":
    case "siliconflow-intl":
      return siliconflow;
    case "qwenpaw-local":
      return qwenpawLocal;
    case "zhipu-cn":
    case "zhipu-intl":
    case "zhipu-cn-codingplan":
    case "zhipu-intl-codingplan":
      return zhipu;
    case "openrouter":
      return openrouter;
    case "opencode":
      return opencode;
    default:
      return defaultProvider;
  }
};
