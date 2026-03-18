# 更新日志

本项目的所有重要更改都将记录在此文件中。

格式基于 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.0.0/)，
并且本项目遵循 [Semantic Versioning (语义化版本)](https://semver.org/lang/zh-CN/).

## [0.1.0] - 2026-03-18

### 新增 (Added)

- Statica（静态网站托管平台）的初始版本发布。
- **核心功能**：集成了 OSS（对象存储服务）的静态网站托管功能。
- **身份认证系统**：
  - 支持密码和短信验证码登录/注册。
  - 基于 Token 的认证，Token 安全存储在 HTTP-only Cookie 中。
  - 集成 `@turinhub/tale-js-sdk` 用于处理后端认证逻辑。
- **控制台**：用于管理网站部署的可视化仪表盘。
- **安全与路由**：通过中间件 (`proxy.ts`) 提供路由保护，确保受保护区域（`/dashboard`, `/deployments`）的访问安全。
- **UI 与样式**：基于 Next.js 16、Tailwind CSS、Shadcn/UI 和 Lucide React 的组件库集成。
- **开发工具**：新增 FBC (Feature Build Commit) 命令，用于自动化类型检查、代码格式化、构建和提交流程。

### 变更 (Changed)

- 优化认证组件和用户菜单的交互逻辑。
- 完善环境变量配置示例。
