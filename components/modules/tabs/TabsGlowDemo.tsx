import { Tabs, TabsContent, TabsList, TabsTrigger } from "./Tabs";

export default function TabsGlowDemo() {
  return (
    <Tabs defaultValue="stats" variant="glow">
      <TabsList>
        <TabsTrigger value="stats">Statistics</TabsTrigger>
        <TabsTrigger value="logs">Activity Logs</TabsTrigger>
        <TabsTrigger value="api">API Keys</TabsTrigger>
      </TabsList>
      <TabsContent value="stats">View real-time platform statistics.</TabsContent>
      <TabsContent value="logs">Recent activity across your account.</TabsContent>
      <TabsContent value="api">Manage your secure API access keys.</TabsContent>
    </Tabs>
  );
}
