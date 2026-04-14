import dingtalk from "@/assets/channels/dingtalk.png";
import voice from "@/assets/channels/voice.png";
import qq from "@/assets/channels/qq.png";
import feishu from "@/assets/channels/feishu.png";
import xiaoyi from "@/assets/channels/xiaoyi.png";
import telegram from "@/assets/channels/telegram.png";
import mqtt from "@/assets/channels/mqtt.png";
import imessage from "@/assets/channels/imessage.png";
import discord from "@/assets/channels/discord.png";
import mattermost from "@/assets/channels/mattermost.png";
import matrix from "@/assets/channels/matrix.png";
import consoleIcon from "@/assets/channels/console.png";
import wecom from "@/assets/channels/wecom.png";
import weixin from "@/assets/channels/weixin.png";
import defaultChannel from "@/assets/channels/default-channel.png";

/** 本地图标资源 —— 由CDN迁移到本地静态导入 */
export const CHANNEL_ICON_URLS: Record<string, string> = {
  dingtalk,
  voice,
  qq,
  feishu,
  xiaoyi,
  telegram,
  mqtt,
  imessage,
  discord,
  mattermost,
  matrix,
  console: consoleIcon,
  wecom,
  weixin,
};

export const CHANNEL_DEFAULT_ICON_URL = defaultChannel;

export function getChannelIconUrl(channelKey: string): string {
  return CHANNEL_ICON_URLS[channelKey] ?? CHANNEL_DEFAULT_ICON_URL;
}
