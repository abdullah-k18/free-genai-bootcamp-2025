
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Edit2, Plus } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Sample group data (in a real app, this would come from a database)
const groupsData: Record<string, {
  name: string;
  description: string;
  words: Array<{
    id: string;
    urdu: string;
    transliteration: string;
    english: string;
  }>;
}> = {
  "1": {
    name: "Greetings",
    description: "Common greetings and introductions",
    words: [
      { id: "1", urdu: "سلام", transliteration: "Salaam", english: "Peace/Hello" },
      { id: "2", urdu: "شکریہ", transliteration: "Shukriya", english: "Thank you" },
      { id: "3", urdu: "آپ کیسے ہیں", transliteration: "Aap kaise hain", english: "How are you?" },
      { id: "4", urdu: "میں ٹھیک ہوں", transliteration: "Main theek hoon", english: "I am fine" },
      { id: "5", urdu: "خدا حافظ", transliteration: "Khuda Hafiz", english: "Goodbye" },
    ]
  },
  "2": {
    name: "Food & Drinks",
    description: "Vocabulary related to eating and drinking",
    words: [
      { id: "6", urdu: "پانی", transliteration: "Pani", english: "Water" },
      { id: "7", urdu: "چائے", transliteration: "Chai", english: "Tea" },
      { id: "8", urdu: "روٹی", transliteration: "Roti", english: "Bread" },
    ]
  },
};

const Group = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const group = id ? groupsData[id] : null;

  if (!group) {
    return (
      <div className="flex items-center justify-center h-80">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Group not found</h2>
          <p className="text-muted-foreground mt-2">The requested group could not be found.</p>
          <Button className="mt-4" onClick={() => navigate("/groups")}>
            Return to Groups
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center">
        <Button 
          variant="outline" 
          size="sm" 
          className="mr-4"
          onClick={() => navigate("/groups")}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Groups
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">Group: {group.name}</h1>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>{group.name}</CardTitle>
            <p className="text-muted-foreground mt-1">{group.description}</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <Edit2 className="h-4 w-4 mr-2" />
              Edit Group
            </Button>
            <Button className="bg-urdu-primary hover:bg-urdu-primary/90" size="sm">
              Study Words
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-medium flex items-center">
              Words in this group
              <Badge variant="secondary" className="ml-2">{group.words.length}</Badge>
            </h3>
            <Button size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Add Word
            </Button>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Urdu</TableHead>
                <TableHead>Transliteration</TableHead>
                <TableHead>English</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {group.words.map((word) => (
                <TableRow key={word.id} className="hover:bg-muted/50 cursor-pointer">
                  <TableCell className="urdu-text font-medium text-base">{word.urdu}</TableCell>
                  <TableCell>{word.transliteration}</TableCell>
                  <TableCell>{word.english}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => navigate(`/words/${word.id}`)}>
                      <span className="sr-only">View</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Group;
