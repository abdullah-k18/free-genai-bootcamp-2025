
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus, Search } from "lucide-react";

const sampleWords = [
  { id: "1", urdu: "سلام", transliteration: "Salaam", english: "Peace/Hello", group: "Greetings" },
  { id: "2", urdu: "شکریہ", transliteration: "Shukriya", english: "Thank you", group: "Greetings" },
  { id: "3", urdu: "آپ کیسے ہیں", transliteration: "Aap kaise hain", english: "How are you?", group: "Greetings" },
  { id: "4", urdu: "میں ٹھیک ہوں", transliteration: "Main theek hoon", english: "I am fine", group: "Greetings" },
  { id: "5", urdu: "خدا حافظ", transliteration: "Khuda Hafiz", english: "Goodbye", group: "Greetings" },
];

const Words = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Words</h1>
          <p className="text-muted-foreground mt-1">
            Manage and explore your Urdu vocabulary
          </p>
        </div>
        <Button className="bg-urdu-primary hover:bg-urdu-primary/90">
          <Plus className="mr-2 h-4 w-4" />
          Add New Word
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search words..."
            className="pl-8"
          />
        </div>
        <Button variant="outline">Filter</Button>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Vocabulary List</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Urdu</TableHead>
                <TableHead>Transliteration</TableHead>
                <TableHead>English</TableHead>
                <TableHead>Group</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sampleWords.map((word) => (
                <TableRow key={word.id} className="hover:bg-muted/50 cursor-pointer" onClick={() => window.location.href = `/words/${word.id}`}>
                  <TableCell className="urdu-text font-medium text-base">{word.urdu}</TableCell>
                  <TableCell>{word.transliteration}</TableCell>
                  <TableCell>{word.english}</TableCell>
                  <TableCell>{word.group}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <span className="sr-only">Open</span>
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

export default Words;
