import { Tabs, TabsContent, TabsList, TabsTrigger } from "./Tabs";

export default function TabsSoftDemo() {
  return (
    <div className="max-w-md">
      <Tabs defaultValue="profile" variant="soft">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        <TabsContent value="profile">Personal information and avatar settings.</TabsContent>
        <TabsContent value="billing">Subscription plans and payment history.</TabsContent>
        <TabsContent value="notifications">Configure how you receive updates.</TabsContent>
      </Tabs>
    </div>
  );
}
