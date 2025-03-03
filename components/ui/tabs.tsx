import * as React from "react";

export const Tabs = ({ children }: { children: React.ReactNode }) => (
  <div className="tabs">{children}</div>
);

export const TabsList = ({ children }: { children: React.ReactNode }) => (
  <div className="tabs-list">{children}</div>
);

export const TabsTrigger = ({ children, value, onClick }: { children: React.ReactNode; value: string; onClick: () => void }) => (
  <button className="tabs-trigger" data-value={value} onClick={onClick}>
    {children}
  </button>
);

export const TabsContent = ({ children, value, activeTab }: { children: React.ReactNode; value: string; activeTab: string }) => (
  activeTab === value ? <div className="tabs-content">{children}</div> : null
);
