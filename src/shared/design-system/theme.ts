import { theme } from "antd";

export const DarkTheme = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: "#7396FE",
    colorTextHover: "#7396FE",
    colorBgTextHover: "none",
    colorBgTextActive: "#7396FE",
    colorError: "#EC221F",
    colorInfo: "#0038FF",
    colorSuccess: "#00C108",
    colorWarning: "#FFCC00",
    colorLinkHover: "#7396FE",
    colorTextBase: "#4C575D",
    colorTextHeading: "#FFFFFF",
    colorTextSubheading: "#00C108",
    colorLink: "#1890ff",
    // colorBgBase: "#F9F9F9",
    colorBgContainer: "#1F2029",
    // Typography
    fontFamily: `Manrope,-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial`,
    fontSize: 14,
    fontSizeHeading1: 36,
    fontSizeHeading2: 30,
    fontSizeHeading3: 24,
    linkDecoration: "underline",
    // Layout
    padding: 16,
    boxShadow:
      "0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)",
    borderRadius: 6,
    controlHeight: 32,
    lineType: "solid",
    lineWidth: 1,

    lineHeightBase: 1.6,
    colorIcon: "#7396FE",
  },

  components: {
    Layout: {
      bodyBg: "#141316",
      headerBg: "#1F2029",
      siderBg: "#1F2029",
    },
    Typography: {
      titleMarginTop: 0,
      titleMarginBottom: 0,
    },
    Menu: {
      itemBg: "transparent",
      itemColor: "#FFFFFF",
      itemHoverColor: "#7396FE",
      activeBarBorderWidth: 0,
      iconMarginInlineEnd: 10,
      activeBarWidth: 3,
      itemBorderRadius: 0,
      activeBarHeight: 1,
      itemMarginBlock: 10,
      colorPrimaryBg: "none",
    },
    DatePicker: {
      colorInfoTextHover: "#7396FE",
      colorTextDisabled: "#7D7D7D",
      colorTextPlaceholder: "#4C575D",
    },
    Card: {
      borderRadiusLG: 15,
      colorBorderSecondary: "transparent",
    },
    Form: {
      labelColor: "black",
    },
    Table: {},
  },
};
