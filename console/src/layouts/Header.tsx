import { Layout, Space } from "antd";
import LanguageSwitcher from "../components/LanguageSwitcher/index";
import ThemeToggleButton from "../components/ThemeToggleButton";
import styles from "./index.module.less";
import api from "../api";
import { getUsername } from "../api/config";
import { useTheme } from "../contexts/ThemeContext";
import { useState, useEffect } from "react";
import logoDark from "@/assets/logo/logo-dark.png";
import logoLight from "@/assets/logo/logo-light.png";
import { UserOutlined } from "@ant-design/icons";

const { Header: AntHeader } = Layout;

export default function Header() {
  const { isDark } = useTheme();
  const [version, setVersion] = useState<string>("");
  const [username, setUsername] = useState<string | null>(getUsername());

  useEffect(() => {
    setUsername(getUsername());
  }, []);

  useEffect(() => {
    api
      .getVersion()
      .then((res) => setVersion(res?.version ?? ""))
      .catch(() => {});
  }, []);

  return (
    <>
      <AntHeader className={styles.header}>
        <div className={styles.logoWrapper}>
          <img
            src={isDark ? logoDark : logoLight}
            alt="QwenPaw"
            className={styles.logoImg}
          />
          <div className={styles.logoDivider} />
          {version && <span className={styles.versionBadge}>v{version}</span>}
        </div>
        <Space size="middle">
          {username && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                color: "rgba(255, 255, 255, 0.9)",
              }}
            >
              <UserOutlined />
              <span style={{ fontSize: 14, fontWeight: 500 }}>{username}</span>
            </div>
          )}
          <div className={styles.headerDivider} />
          <LanguageSwitcher />
          <ThemeToggleButton />
        </Space>
      </AntHeader>
    </>
  );
}
