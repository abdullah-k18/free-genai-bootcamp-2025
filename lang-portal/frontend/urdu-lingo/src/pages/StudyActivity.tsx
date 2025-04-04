
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

const StudyActivity = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // Activity titles mapping
  const activityTitles: Record<string, string> = {
    "flashcards": "Flashcards",
    "writing": "Writing Practice",
    "reading": "Reading Exercises",
    "quiz": "Vocabulary Quiz"
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center">
        <Button 
          variant="outline" 
          size="sm" 
          className="mr-4"
          onClick={() => navigate("/study-activities")}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">
          {activityTitles[id as string] || "Study Activity"}
        </h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Activity: {activityTitles[id as string] || id}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center min-h-[300px]">
            <p className="text-xl text-center mb-6">
              This activity is under development.
            </p>
            <div className="urdu-text text-4xl font-bold text-center mb-4">
              جلد آ رہا ہے
            </div>
            <p className="text-muted-foreground text-center">
              (Coming soon)
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={() => navigate("/study-activities")}>
            Cancel
          </Button>
          <Button onClick={() => navigate("/dashboard")}>
            Return to Dashboard
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default StudyActivity;
