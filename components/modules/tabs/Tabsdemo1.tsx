import { Tabs, TabsContent, TabsList, TabsTrigger } from "./Tabs";

export default function Demo() {
  return (
    <Tabs defaultValue="account">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>

      <TabsContent value="account">Account settings here</TabsContent>

      <TabsContent value="password">Password settings here</TabsContent>
    </Tabs>
  );
}
