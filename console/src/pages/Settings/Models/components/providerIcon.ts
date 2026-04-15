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
import defaultProvider from "@/assets/providers/default-provider.jpg";

export const providerIcon = (provider: string) => {
  switch (provider) {
    case "modelscope":
      return modelscope;
    case "aliyun-codingplan":
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
      return "https://img.alicdn.com/imgextra/i2/O1CN01TFZcQz23xX7qacIEv_!!6000000007322-2-tps-640-640.png";
    case "openrouter":
      return "https://gw.alicdn.com/imgextra/i4/O1CN01oX74jS1ciQR9xBtZ2_!!6000000003634-2-tps-252-252.png";
    case "opencode":
      return "https://gw.alicdn.com/imgextra/i1/O1CN01d3RfoB28G5dbN4i97_!!6000000007904-2-tps-30-30.png";
    default:
      return defaultProvider;
  }
};
