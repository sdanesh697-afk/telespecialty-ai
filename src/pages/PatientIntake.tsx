import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, Activity } from "lucide-react";
import { Link } from "react-router-dom";

const questions = [
  {
    id: 1,
    question: "What brings you here today?",
    placeholder: "Describe your main concern or reason for seeking specialist care...",
    type: "textarea",
  },
  {
    id: 2,
    question: "How long have you been experiencing this?",
    placeholder: "e.g., 2 weeks, 3 months, etc.",
    type: "text",
  },
  {
    id: 3,
    question: "Have you had any recent chest pain, shortness of breath, or palpitations?",
    options: ["Yes", "No"],
    type: "radio",
  },
  {
    id: 4,
    question: "Do you have any existing medical conditions?",
    placeholder: "e.g., diabetes, hypertension, asthma...",
    type: "textarea",
  },
  {
    id: 5,
    question: "What medications are you currently taking?",
    placeholder: "List all medications including over-the-counter drugs...",
    type: "textarea",
  },
  {
    id: 6,
    question: "Do you have any allergies?",
    placeholder: "Medications, foods, environmental...",
    type: "textarea",
  },
];

const PatientIntake = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [completed, setCompleted] = useState(false);

  const progress = ((currentStep + 1) / questions.length) * 100;
  const currentQuestion = questions[currentStep];

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCompleted(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentQuestion.id]: value });
  };

  if (completed) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-muted/30 flex items-center justify-center p-4">
        <Card className="max-w-2xl w-full p-8 text-center animate-fade-in">
          <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
            <Activity className="h-8 w-8 text-success" />
          </div>
          <h2 className="mb-4">Intake Complete!</h2>
          <p className="text-muted-foreground mb-8">
            Your responses have been submitted. A specialist will review your information and
            schedule a consultation with you shortly.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/">
              <Button variant="outline">Return Home</Button>
            </Link>
            <Link to="/specialist-dashboard">
              <Button>View Dashboard</Button>
            </Link>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      {/* Header */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Activity className="h-6 w-6 text-primary" />
            <span className="text-xl font-semibold">TeleSpecialty+</span>
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12 max-w-3xl">
        {/* Progress */}
        <div className="mb-12 animate-fade-in">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">
              Question {currentStep + 1} of {questions.length}
            </span>
            <span className="text-sm text-muted-foreground">{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question Card */}
        <Card className="p-8 mb-6 animate-slide-up">
          <h2 className="mb-6">{currentQuestion.question}</h2>

          {currentQuestion.type === "textarea" && (
            <textarea
              value={answers[currentQuestion.id] || ""}
              onChange={(e) => handleAnswer(e.target.value)}
              placeholder={currentQuestion.placeholder}
              className="w-full min-h-[120px] p-4 rounded-lg border border-input bg-background resize-none focus:outline-none focus:ring-2 focus:ring-ring"
            />
          )}

          {currentQuestion.type === "text" && (
            <input
              type="text"
              value={answers[currentQuestion.id] || ""}
              onChange={(e) => handleAnswer(e.target.value)}
              placeholder={currentQuestion.placeholder}
              className="w-full p-4 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
            />
          )}

          {currentQuestion.type === "radio" && currentQuestion.options && (
            <div className="space-y-3">
              {currentQuestion.options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleAnswer(option)}
                  className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                    answers[currentQuestion.id] === option
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </Card>

        {/* Navigation */}
        <div className="flex gap-4">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={currentStep === 0}
            className="flex-1"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <Button onClick={handleNext} className="flex-1">
            {currentStep === questions.length - 1 ? "Complete" : "Next"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PatientIntake;
