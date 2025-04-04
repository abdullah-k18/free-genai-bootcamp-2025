
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BookMarked, BookOpen, BookOpenCheck, PenSquare } from "lucide-react";

const activities = [
  {
    id: "flashcards",
    title: "Flashcards",
    description: "Review vocabulary with digital flashcards",
    icon: <BookOpen className="h-10 w-10 text-urdu-primary" />,
  },
  {
    id: "writing",
    title: "Writing Practice",
    description: "Practice writing Urdu script and sentences",
    icon: <PenSquare className="h-10 w-10 text-urdu-primary" />,
  },
  {
    id: "reading",
    title: "Reading Exercises",
    description: "Improve your Urdu reading skills",
    icon: <BookMarked className="h-10 w-10 text-urdu-primary" />,
  },
  {
    id: "quiz",
    title: "Vocabulary Quiz",
    description: "Test your vocabulary knowledge",
    icon: <BookOpenCheck className="h-10 w-10 text-urdu-primary" />,
  },
];

const StudyActivities = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Study Activities</h1>
        <p className="text-muted-foreground mt-1">
          Choose an activity to practice your Urdu language skills
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {activities.map((activity) => (
          <Card key={activity.id} className="card-hover">
            <CardHeader className="flex items-center pb-2">
              {activity.icon}
              <CardTitle className="mt-4">{activity.title}</CardTitle>
              <CardDescription className="text-center">{activity.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 space-y-2">
              <div className="h-10"></div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={() => window.location.href = `/study-activities/${activity.id}`}>
                Start Activity
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default StudyActivities;
