"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Globe, Calendar, Activity, ExternalLink, MoreVertical, TrendingUp } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Mock data
const deployments = [
  {
    id: "8JfpicWAW",
    name: "my-portfolio",
    domain: "/h/8JfpicWAW",
    status: "running",
    environment: "Production",
    createdAt: "2024-01-10",
    lastDeployed: "7m 24s ago",
    visits: "2.4k",
    uptime: "99.9%",
  },
  {
    id: "BCoTKPg4n",
    name: "company-website",
    domain: "/h/BCoTKPg4n",
    status: "running",
    environment: "Production",
    createdAt: "2024-01-08",
    lastDeployed: "5m 2s ago",
    visits: "12.8k",
    uptime: "100%",
  },
  {
    id: "Li3VpKTef",
    name: "blog-site",
    domain: "/h/Li3VpKTef",
    status: "paused",
    environment: "Preview",
    createdAt: "2024-01-09",
    lastDeployed: "6m 19s ago",
    visits: "856",
    uptime: "98.7%",
  },
  {
    id: "3mskh6Dve",
    name: "landing-page",
    domain: "/h/3mskh6Dve",
    status: "running",
    environment: "Production",
    createdAt: "2024-01-05",
    lastDeployed: "4m 46s ago",
    visits: "5.2k",
    uptime: "99.8%",
  },
]

export function DeploymentsList() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {deployments.map((deployment) => (
        <Link
          key={deployment.id}
          href={`/deployments/${deployment.id}`}
          className="block transition-transform hover:scale-[1.02]"
        >
          <Card className="p-6 hover:shadow-lg transition-shadow">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-muted">
                  <Globe className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground">{deployment.name}</h3>
                  <p className="text-xs text-muted-foreground">{deployment.id}</p>
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild onClick={(e) => e.preventDefault()}>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>查看详情</DropdownMenuItem>
                  <DropdownMenuItem>编辑配置</DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive">删除</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Status Badge */}
            <div className="mb-4">
              <Badge variant={deployment.status === "running" ? "default" : "secondary"} className="gap-1">
                <Activity className="h-3 w-3" />
                {deployment.status === "running" ? "运行中" : "暂停中"}
              </Badge>
              <Badge variant="outline" className="ml-2">
                {deployment.environment}
              </Badge>
            </div>

            {/* Domain */}
            <div className="mb-4 flex items-center gap-2 rounded-md bg-muted p-2">
              <Globe className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="text-xs font-mono text-muted-foreground truncate">{deployment.domain}</span>
              <ExternalLink className="ml-auto h-3.5 w-3.5 text-muted-foreground flex-shrink-0" />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 border-t border-border pt-4">
              <div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1">
                  <TrendingUp className="h-3 w-3" />
                  访问量
                </div>
                <div className="font-semibold text-card-foreground">{deployment.visits}</div>
              </div>
              <div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1">
                  <Activity className="h-3 w-3" />
                  在线率
                </div>
                <div className="font-semibold text-card-foreground">{deployment.uptime}</div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground border-t border-border pt-4">
              <Calendar className="h-3 w-3" />
              <span>最后部署: {deployment.lastDeployed}</span>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  )
}
