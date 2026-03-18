# Statica 项目指南

## 项目概览

Statica 是一个基于 OSS（对象存储服务）的高性能静态网站托管平台。它允许开发者快速部署静态网站，并提供全球加速、安全防护和实时监控等功能。

## 技术栈

- **框架**: Next.js 16 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **UI 组件**: Shadcn/UI (基于 Radix UI)
- **图标**: Lucide React
- **图表**: Recharts
- **表单**: React Hook Form + Zod
- **后端 SDK**: @turinhub/tale-js-sdk

## 项目结构

- `app/`: Next.js App Router 目录，包含页面和 API 路由。
  - `api/`: 后端 API 路由（如 auth）。
  - `dashboard/`: 用户控制台，用于管理部署。
  - `deployments/`: 部署详情和管理。
  - `login/`: 认证页面。
- `components/`: React 组件。
  - `ui/`: 可复用的 UI 原语（按钮、输入框等）。
- `lib/`: 工具函数和共享逻辑。
  - `auth.ts`: 使用 `@turinhub/tale-js-sdk` 的认证逻辑。
  - `utils.ts`: 通用辅助函数。
- `proxy.ts`: 路由保护和重定向的中间件。
- `public/`: 静态资源（图片、图标）。

## 核心功能

1.  **静态网站托管**: 上传并部署静态文件。
2.  **身份认证**:
    - 密码登录。
    - 短信验证码登录/注册。
    - 基于 Token 的认证，Token 存储在 HTTP-only Cookie 中。
3.  **控制台**: 可视化管理部署。
4.  **路由保护**: 中间件确保受保护的路由（`/dashboard`, `/deployments`）仅限已认证用户访问。

## 开发指南

- **启动开发服务器**: `pnpm dev`
- **构建**: `pnpm build`
- **Lint**: `pnpm lint`
- **安装依赖**: `pnpm install`

## 认证流程

认证通过 `@turinhub/tale-js-sdk` 处理。

- **登录**: `lib/auth.ts` 管理登录请求。
- **会话**: Auth token (`auth_token`) 和用户信息 (`auth_user`) 存储在 Cookie 中。
- **中间件**: `proxy.ts` 检查 `auth_token` Cookie 以允许访问受保护的路由。
