import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Layers, Zap, Shield, BarChart3, ArrowRight } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <Layers className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-semibold text-foreground">Statica</span>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" asChild>
                <Link href="/login">登录</Link>
              </Button>
              <Button asChild>
                <Link href="/dashboard">控制台</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm">
            <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
            <span className="text-muted-foreground">基于 OSS 的高性能静态网站托管</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            专为开发者打造的
            <br />
            <span className="text-primary">静态网站部署平台</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            无需复杂配置，只需上传您的静态文件，即可快速部署并获得可访问的网站地址。简单、快速、可靠。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild className="min-w-[200px]">
              <Link href="/dashboard">
                立即开始
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="min-w-[200px] bg-transparent">
              <Link href="/login">登录账户</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">为什么选择 Statica</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">专注于提供简单、高效的静态网站托管服务</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="p-6 bg-card hover:shadow-lg transition-shadow">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-card-foreground mb-2">极速部署</h3>
            <p className="text-muted-foreground">上传即部署，无需等待构建。基于 OSS 的分布式架构，确保全球访问速度。</p>
          </Card>

          <Card className="p-6 bg-card hover:shadow-lg transition-shadow">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 mb-4">
              <Shield className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-card-foreground mb-2">安全可靠</h3>
            <p className="text-muted-foreground">企业级安全防护，自动备份，99.9% 的在线率保证，让您的网站始终在线。</p>
          </Card>

          <Card className="p-6 bg-card hover:shadow-lg transition-shadow">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-success/10 mb-4">
              <BarChart3 className="h-6 w-6 text-success" />
            </div>
            <h3 className="text-xl font-semibold text-card-foreground mb-2">实时监控</h3>
            <p className="text-muted-foreground">详细的访问统计和性能监控，帮助您了解网站运行状态和用户行为。</p>
          </Card>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">三步完成部署</h2>
            <p className="text-lg text-muted-foreground">简单到令人难以置信</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { step: "01", title: "创建部署", description: "在控制台点击新建部署，输入网站名称" },
              { step: "02", title: "上传文件", description: "上传您的静态文件（HTML、CSS、JS 等）" },
              { step: "03", title: "立即访问", description: "获得唯一访问地址，您的网站已经上线" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="p-12 bg-primary text-primary-foreground text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">准备好开始了吗？</h2>
          <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            立即加入 Statica，体验最简单的静态网站部署服务
          </p>
          <Button size="lg" variant="secondary" asChild className="min-w-[200px]">
            <Link href="/dashboard">
              免费开始
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Layers className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-semibold text-foreground">Statica</span>
            </div>
            <p className="text-sm text-muted-foreground">© 2026 Statica. 专业的静态网站托管平台.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
