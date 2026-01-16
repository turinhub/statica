import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  ArrowLeft,
  Globe,
  Activity,
  Calendar,
  ExternalLink,
  Settings,
  TrendingUp,
  FileCode,
  Database,
} from 'lucide-react'
import { Layers } from 'lucide-react'

// Mock data for a single deployment
const deployment = {
  id: '8JfpicWAW',
  name: 'my-portfolio',
  domain: '/h/8JfpicWAW',
  status: 'running',
  environment: 'Production',
  createdAt: '2024-01-10 14:30:00',
  lastUpdated: '2024-01-16 15:20:00',
  lastDeployed: '7m 24s ago',
  visits: '2,456',
  uptime: '99.9%',
  commitHash: 'a3b4c5d',
  fileCount: 248,
  totalSize: '4.2 MB',
}

const recentActivities = [
  {
    id: 1,
    type: 'deployment',
    message: '成功部署到生产环境',
    timestamp: '7分钟前',
    status: 'success',
  },
  {
    id: 2,
    type: 'build',
    message: '构建完成',
    timestamp: '8分钟前',
    status: 'success',
  },
  {
    id: 3,
    type: 'commit',
    message: '推送了新的提交 a3b4c5d',
    timestamp: '10分钟前',
    status: 'info',
  },
  {
    id: 4,
    type: 'deployment',
    message: '开始部署',
    timestamp: '15分钟前',
    status: 'info',
  },
]

const trafficData = [
  { date: '01/10', visits: 420 },
  { date: '01/11', visits: 380 },
  { date: '01/12', visits: 560 },
  { date: '01/13', visits: 490 },
  { date: '01/14', visits: 650 },
  { date: '01/15', visits: 580 },
  { date: '01/16', visits: 720 },
]

export default function DeploymentDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link href="/">
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <Layers className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-foreground">{deployment.name}</h1>
                <p className="text-xs text-muted-foreground">{deployment.id}</p>
              </div>
              <Badge
                variant={deployment.status === 'running' ? 'default' : 'secondary'}
                className="gap-1"
              >
                <Activity className="h-3 w-3" />
                {deployment.status === 'running' ? '运行中' : '暂停中'}
              </Badge>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" className="gap-2 bg-transparent">
                <ExternalLink className="h-4 w-4" />
                访问网站
              </Button>
              <Button variant="outline" size="icon">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Overview Stats */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <TrendingUp className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">总访问量</p>
                <p className="text-2xl font-bold text-foreground">{deployment.visits}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/10">
                <Activity className="h-5 w-5 text-success" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">在线率</p>
                <p className="text-2xl font-bold text-foreground">{deployment.uptime}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-warning/10">
                <FileCode className="h-5 w-5 text-warning" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">文件数量</p>
                <p className="text-2xl font-bold text-foreground">{deployment.fileCount}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Database className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">存储大小</p>
                <p className="text-2xl font-bold text-foreground">{deployment.totalSize}</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Deployment Info and Recent Activity */}
        <div className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Deployment Info */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">部署信息</h3>
              <div className="space-y-4">
                <div className="flex items-start justify-between py-2 border-b border-border">
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">默认访问地址</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-mono text-foreground">{deployment.domain}</span>
                    <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
                  </div>
                </div>

                <div className="flex items-start justify-between py-2 border-b border-border">
                  <div className="flex items-center gap-2">
                    <FileCode className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">提交哈希</span>
                  </div>
                  <span className="text-sm font-mono text-foreground">{deployment.commitHash}</span>
                </div>

                <div className="flex items-start justify-between py-2 border-b border-border">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">最后更新时间</span>
                  </div>
                  <span className="text-sm text-foreground">{deployment.lastUpdated}</span>
                </div>

                <div className="flex items-start justify-between py-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">创建时间</span>
                  </div>
                  <span className="text-sm text-foreground">{deployment.createdAt}</span>
                </div>
              </div>
            </Card>

            {/* Recent Activity */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">最近活动</h3>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-start gap-3 py-2 border-b border-border last:border-0"
                  >
                    <div
                      className={`mt-0.5 h-2 w-2 rounded-full ${
                        activity.status === 'success' ? 'bg-success' : 'bg-muted-foreground'
                      }`}
                    />
                    <div className="flex-1">
                      <p className="text-sm text-foreground">{activity.message}</p>
                      <p className="text-xs text-muted-foreground mt-1">{activity.timestamp}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Traffic Chart */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">访问趋势</h3>
            <div className="h-64 flex items-end justify-between gap-2">
              {trafficData.map((data, index) => {
                const height = (data.visits / 720) * 100
                return (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2">
                    <div
                      className="w-full bg-accent rounded-t transition-all hover:bg-accent/80"
                      style={{ height: `${height}%` }}
                      title={`${data.visits} 访问`}
                    />
                    <span className="text-xs text-muted-foreground">{data.date}</span>
                  </div>
                )
              })}
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}
