
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Search } from "lucide-react";

const sampleGroups = [
  {
    id: "1",
    name: "Greetings",
    description: "Common greetings and introductions",
    wordCount: 12,
  },
  {
    id: "2",
    name: "Food & Drinks",
    description: "Vocabulary related to eating and drinking",
    wordCount: 8,
  },
  {
    id: "3",
    name: "Numbers",
    description: "Counting and numerical terms",
    wordCount: 20,
  },
  {
    id: "4",
    name: "Family",
    description: "Family relationships and terms",
    wordCount: 15,
  },
  {
    id: "5",
    name: "Travel",
    description: "Words useful for traveling",
    wordCount: 25,
  },
];

const Groups = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Word Groups</h1>
          <p className="text-muted-foreground mt-1">
            Organize your vocabulary into meaningful categories
          </p>
        </div>
        <Button className="bg-urdu-primary hover:bg-urdu-primary/90">
          <Plus className="mr-2 h-4 w-4" />
          Create New Group
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search groups..."
            className="pl-8"
          />
        </div>
        <Button variant="outline">Sort By</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sampleGroups.map((group) => (
          <Card key={group.id} className="card-hover">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">{group.name}</CardTitle>
                <Badge variant="secondary">{group.wordCount} words</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{group.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm">
                View Words
              </Button>
              <Button 
                variant="default" 
                size="sm"
                className="bg-urdu-primary hover:bg-urdu-primary/90"
                onClick={() => window.location.href = `/groups/${group.id}`}
              >
                Study Group
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Groups;
