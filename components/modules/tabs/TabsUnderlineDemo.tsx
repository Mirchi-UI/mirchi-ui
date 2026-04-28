import { Tabs, TabsContent, TabsList, TabsTrigger } from "./Tabs";

export default function TabsUnderlineDemo() {
  return (
    <Tabs defaultValue="account" variant="underline">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Manage your account settings here.</TabsContent>
      <TabsContent value="password">Change your password and security settings.</TabsContent>
      <TabsContent value="settings">Update your application preferences.</TabsContent>
    </Tabs>
  );
}
