"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/admin");
  };

  return (
    <div className="min-h-screen bg-surface-50 flex items-center justify-center px-4">
      <Card className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex w-14 h-14 bg-yellow-500 rounded-2xl items-center justify-center mb-4">
            <span className="text-white font-bold text-xl">SP</span>
          </div>
          <h1 className="text-xl font-bold text-surface-700">Admin Login</h1>
          <p className="text-sm text-surface-700/60 mt-1">
            เข้าสู่ระบบจัดการ SuperRich
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="กรอก username"
            aria-label="Username"
          />
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="กรอก password"
            aria-label="Password"
          />
          <Button type="submit" variant="primary" fullWidth size="lg">
            เข้าสู่ระบบ
          </Button>
        </form>
      </Card>
    </div>
  );
}
