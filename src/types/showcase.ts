/**
 * 功能模块展示 - 类型定义
 *
 * 模块与页面清单来源于 uni-halo 应用的真实注册页面（src/pages.json），
 * 截图来源于 uni-halo-static 仓库的 screenshots/app/v3.x 目录。
 */

/** 图标名：对应 ShowcaseSection 内联的线性图标集合 */
export type ShowcaseIconName =
  | "home"
  | "grid"
  | "image"
  | "spark"
  | "user"
  | "heart"
  | "chart"
  | "doc"
  | "tag"
  | "clock"
  | "search"
  | "star"
  | "bell"
  | "link"
  | "shield"
  | "mail"
  | "globe"
  | "vote"
  | "book"
  | "settings"
  | "box"
  | "tool";

/** 单个页面 */
export interface ShowcasePage {
  /** 页面标识，同时作为截图文件名（v3.x/{key}.png） */
  key: string;
  /** 页面名称 */
  name: string;
  /** 一句话描述 */
  desc: string;
  /** 源码路径，如 pages/tabbar/home/home */
  path: string;
  /** 占位图标 */
  icon: ShowcaseIconName;
}

/** 一个功能模块 */
export interface ShowcaseModule {
  /** 模块标识 */
  id: string;
  /** 模块名称 */
  name: string;
  /** 模块图标 */
  icon: ShowcaseIconName;
  /** 是否为 tabbar 一级入口 */
  isTab: boolean;
  /** 模块描述 */
  desc: string;
  /** 模块下的页面清单 */
  pages: ShowcasePage[];
}
