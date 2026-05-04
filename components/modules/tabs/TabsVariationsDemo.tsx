"use client";

import React, { useState } from "react";
import { UnderlineTabs } from "./Underline";
import { PillTabs } from "./PillTabs";
import { GlowTabs } from "./GlowTabs";
import { SoftTabs } from "./SoftTabs";

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "analytics", label: "Analytics" },
  { id: "reports", label: "Reports" },
  { id: "settings", label: "Settings" },
];

export default function TabsVariationsDemo() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="flex flex-col gap-12 p-12 max-w-2xl mx-auto">
      <section className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold text-muted-foreground">Underline Tabs</h3>
        <UnderlineTabs tabs={tabs} defaultValue={activeTab} />
      </section>

      <section className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold text-muted-foreground">Pill Tabs</h3>
        <PillTabs tabs={tabs} defaultValue={activeTab} />
      </section>

      <section className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold text-muted-foreground">Glow Tabs</h3>
        <GlowTabs tabs={tabs} defaultValue={activeTab} />
      </section>

      <section className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold text-muted-foreground">Soft Tabs</h3>
        <SoftTabs tabs={tabs} defaultValue={activeTab} className="max-w-md" />
      </section>
    </div>
  );
}
