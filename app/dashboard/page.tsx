import { DeploymentsList } from '@/components/deployments-list'
import { NewDeploymentDialog } from '@/components/new-deployment-dialog'
import { Header } from '@/components/header'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl font-bold tracking-tight text-balance">部署管理</h1>
              <p className="text-muted-foreground text-lg">创建和管理您的静态网站部署</p>
            </div>
            <NewDeploymentDialog />
          </div>

          <DeploymentsList />
        </div>
      </main>
    </div>
  )
}
