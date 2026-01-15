"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus } from "lucide-react"

export function NewDeploymentDialog() {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: 实现创建部署逻辑
    console.log("创建部署:", formData)
    setOpen(false)
    // 重置表单
    setFormData({ name: "" })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          新建部署
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>新建静态网站部署</DialogTitle>
          <DialogDescription>输入网站名称，系统将自动分配访问地址和存储空间</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 py-4">
          {/* 网站名称 */}
          <div className="space-y-2">
            <Label htmlFor="name">网站名称 *</Label>
            <Input
              id="name"
              placeholder="例如: my-portfolio"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <p className="text-xs text-muted-foreground">用于标识您的网站项目，系统将自动生成访问地址 /h/[UUID]</p>
          </div>

          {/* 提交按钮 */}
          <div className="flex justify-end gap-3 pt-4">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              取消
            </Button>
            <Button type="submit">创建部署</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
