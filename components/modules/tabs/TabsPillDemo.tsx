import { Tabs, TabsContent, TabsList, TabsTrigger } from "./Tabs";

export default function TabsPillDemo() {
  return (
    <Tabs defaultValue="all" variant="pill">
      <TabsList>
        <TabsTrigger value="all">All Files</TabsTrigger>
        <TabsTrigger value="images">Images</TabsTrigger>
        <TabsTrigger value="documents">Documents</TabsTrigger>
      </TabsList>
      <TabsContent value="all">Showing all your files.</TabsContent>
      <TabsContent value="images">Filter results by images only.</TabsContent>
      <TabsContent value="documents">Showing only your document files.</TabsContent>
    </Tabs>
  );
}
