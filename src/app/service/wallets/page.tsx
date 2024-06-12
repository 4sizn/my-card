"use client";

import { CardList } from "@/components/service/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CardSelectContainer } from "./components/card-select-container";

export default function Page() {
  return (
    <div className="w-[400px] m-auto">
      <Tabs defaultValue="certificate" className="w-[400px]">
        <TabsList className="sticky top-0">
          <TabsTrigger value="certificate">증빙</TabsTrigger>
          <TabsTrigger value="pay">결제</TabsTrigger>
        </TabsList>
        <TabsContent value="certificate">
          <CardSelectContainer>
            <CardList />
          </CardSelectContainer>
        </TabsContent>
        <TabsContent value="pay">
          <CardSelectContainer>
            <CardList />
          </CardSelectContainer>
        </TabsContent>
      </Tabs>
    </div>
  );
}
