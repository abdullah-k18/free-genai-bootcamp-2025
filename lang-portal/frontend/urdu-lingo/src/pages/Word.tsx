
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ArrowLeft, Edit2, Trash2, VolumeX } from "lucide-react";

// Sample word data (in a real app, this would come from a database)
const wordData: Record<string, { urdu: string; transliteration: string; english: string; group: string; example: string; notes: string }> = {
  "1": {
    urdu: "سلام",
    transliteration: "Salaam",
    english: "Peace/Hello",
    group: "Greetings",
    example: "سلام، آپ کیسے ہیں؟",
    notes: "Common greeting in Urdu"
  },
  "2": {
    urdu: "شکریہ",
    transliteration: "Shukriya",
    english: "Thank you",
    group: "Greetings",
    example: "آپ کی مدد کے لئے شکریہ",
    notes: "Formal way to express gratitude"
  },
  "3": {
    urdu: "آپ کیسے ہیں",
    transliteration: "Aap kaise hain",
    english: "How are you?",
    group: "Greetings",
    example: "سلام، آپ کیسے ہیں؟",
    notes: "Formal way to ask how someone is doing"
  },
  "4": {
    urdu: "میں ٹھیک ہوں",
    transliteration: "Main theek hoon",
    english: "I am fine",
    group: "Greetings",
    example: "میں ٹھیک ہوں، شکریہ",
    notes: "Common response to 'How are you?'"
  },
  "5": {
    urdu: "خدا حافظ",
    transliteration: "Khuda Hafiz",
    english: "Goodbye",
    group: "Greetings",
    example: "اب میں جاؤں گا، خدا حافظ",
    notes: "Traditional way to say goodbye"
  }
};

const Word = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const word = id ? wordData[id] : null;

  if (!word) {
    return (
      <div className="flex items-center justify-center h-80">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Word not found</h2>
          <p className="text-muted-foreground mt-2">The requested word could not be found.</p>
          <Button className="mt-4" onClick={() => navigate("/words")}>
            Return to Words
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
          onClick={() => navigate("/words")}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Words
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">Word Details</h1>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">{word.english}</h2>
            <p className="text-muted-foreground">{word.group}</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="icon">
              <Edit2 className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="text-destructive">
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex-1">
              <div className="text-muted-foreground mb-1 text-sm">Urdu</div>
              <div className="urdu-text text-4xl font-bold text-urdu-primary">{word.urdu}</div>
            </div>
            <Button variant="outline" size="sm" className="w-fit">
              <VolumeX className="h-4 w-4 mr-2" />
              Pronunciation (Coming soon)
            </Button>
          </div>
          
          <div>
            <div className="text-muted-foreground mb-1 text-sm">Transliteration</div>
            <div className="text-xl">{word.transliteration}</div>
          </div>

          <div>
            <div className="text-muted-foreground mb-1 text-sm">Example</div>
            <div className="urdu-text text-xl mb-2">{word.example}</div>
          </div>

          <div>
            <div className="text-muted-foreground mb-1 text-sm">Notes</div>
            <div>{word.notes}</div>
          </div>
        </CardContent>
        <CardFooter className="border-t pt-6 flex justify-between">
          <Button variant="outline" onClick={() => navigate("/words")}>
            Return to Words
          </Button>
          <div className="flex space-x-2">
            <Button variant="default" className="bg-urdu-primary hover:bg-urdu-primary/90">
              Practice This Word
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Word;
