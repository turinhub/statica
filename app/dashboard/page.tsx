import { DeploymentsList } from "@/components/deployments-list"
import { NewDeploymentDialog } from "@/components/new-deployment-dialog"
import { Layers } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <Layers className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-foreground">Statica</h1>
                <p className="text-xs text-muted-foreground">OSS 静态网站托管平台</p>
              </div>
            </Link>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/login">退出</Link>
              </Button>
              <NewDeploymentDialog />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-foreground">部署列表</h2>
          <p className="mt-1 text-sm text-muted-foreground">管理您所有的静态网站部署</p>
        </div>

        <DeploymentsList />
      </main>
    </div>
  )
}
