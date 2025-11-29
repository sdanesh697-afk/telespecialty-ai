import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity, AlertTriangle, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";

// Sample patient data
const patients = [
  {
    id: 1,
    name: "Sarah Mitchell",
    age: 54,
    gender: "Female",
    specialty: "Cardiology",
    chiefComplaint: "Chest pain on exertion",
    riskFlags: ["Cardiac risk factors", "Exertional symptoms"],
    appointmentTime: "Today, 2:00 PM",
    status: "pending",
  },
  {
    id: 2,
    name: "James Chen",
    age: 67,
    gender: "Male",
    specialty: "Gastroenterology",
    chiefComplaint: "Abdominal pain and weight loss",
    riskFlags: ["Unintentional weight loss", "Age >65"],
    appointmentTime: "Today, 3:30 PM",
    status: "pending",
  },
  {
    id: 3,
    name: "Emma Thompson",
    age: 42,
    gender: "Female",
    specialty: "Endocrinology",
    chiefComplaint: "Fatigue and weight gain",
    riskFlags: [],
    appointmentTime: "Tomorrow, 10:00 AM",
    status: "scheduled",
  },
];

const SpecialistDashboard = () => {
  const [selectedPatient, setSelectedPatient] = useState<number | null>(null);

  const currentPatient = patients.find((p) => p.id === selectedPatient);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Activity className="h-6 w-6 text-primary" />
            <span className="text-xl font-semibold">TeleSpecialty+</span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Dr. Emily Roberts</span>
            <Button variant="outline" size="sm">
              Sign Out
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Patient List */}
          <div className="lg:col-span-1">
            <h2 className="mb-6">Today's Patients</h2>
            <div className="space-y-4">
              {patients.map((patient) => (
                <Card
                  key={patient.id}
                  className={`p-4 cursor-pointer transition-all hover:shadow-md ${
                    selectedPatient === patient.id ? "ring-2 ring-primary" : ""
                  }`}
                  onClick={() => setSelectedPatient(patient.id)}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-semibold">{patient.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {patient.age}y, {patient.gender}
                      </p>
                    </div>
                    {patient.riskFlags.length > 0 && (
                      <AlertTriangle className="h-5 w-5 text-alert" />
                    )}
                  </div>
                  <p className="text-sm mb-3">{patient.chiefComplaint}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {patient.appointmentTime}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* ISBAR Summary */}
          <div className="lg:col-span-2">
            {!currentPatient ? (
              <Card className="p-12 text-center">
                <User className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl mb-2">Select a Patient</h3>
                <p className="text-muted-foreground">
                  Choose a patient from the list to view their intake summary
                </p>
              </Card>
            ) : (
              <div className="space-y-6 animate-fade-in">
                {/* Patient Header */}
                <Card className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="mb-2">{currentPatient.name}</h2>
                      <div className="flex gap-4 text-sm text-muted-foreground">
                        <span>{currentPatient.age} years old</span>
                        <span>{currentPatient.gender}</span>
                        <span>MRN: #MT-{currentPatient.id}542</span>
                      </div>
                    </div>
                    <Badge className="bg-accent text-accent-foreground">
                      {currentPatient.specialty}
                    </Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button>Start Consultation</Button>
                    <Button variant="outline">View Full Transcript</Button>
                  </div>
                </Card>

                {/* Risk Flags */}
                {currentPatient.riskFlags.length > 0 && (
                  <Card className="p-6 border-alert/30 bg-alert/5">
                    <div className="flex items-center gap-2 mb-4">
                      <AlertTriangle className="h-5 w-5 text-alert" />
                      <h3 className="text-lg font-semibold">Risk Flags</h3>
                    </div>
                    <div className="space-y-2">
                      {currentPatient.riskFlags.map((flag, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-alert" />
                          <span className="text-sm">{flag}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                )}

                {/* ISBAR Summary */}
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-6">ISBAR Summary</h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Introduction</h4>
                      <p className="text-sm text-muted-foreground">
                        {currentPatient.name}, {currentPatient.age}-year-old {currentPatient.gender.toLowerCase()} referred for {currentPatient.specialty.toLowerCase()} consultation.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-primary mb-2">Situation</h4>
                      <p className="text-sm text-muted-foreground">
                        Presenting with {currentPatient.chiefComplaint.toLowerCase()}. Symptoms have been
                        progressive over the past 3 months, with increasing frequency and severity.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-primary mb-2">Background</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>Medical History:</strong> Type 2 diabetes (diagnosed 2018), hypertension,
                        hyperlipidemia
                      </p>
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>Medications:</strong> Metformin 1000mg BD, Ramipril 10mg OD, Atorvastatin 40mg
                        nocte
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Allergies:</strong> NKDA
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-primary mb-2">Assessment</h4>
                      <p className="text-sm text-muted-foreground">
                        Symptoms occur with moderate exertion (walking uphill, climbing 2 flights of stairs).
                        Relieved by rest within 5 minutes. Associated with mild dyspnea. No radiation. Quality
                        described as "pressure" or "tightness."
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-primary mb-2">Recommendation</h4>
                      <p className="text-sm text-muted-foreground">
                        Suggest focused cardiovascular examination, ECG interpretation, and discussion of risk
                        stratification. Consider stress testing or coronary imaging based on clinical assessment.
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Differential Considerations */}
                <Card className="p-6 bg-muted/30">
                  <h3 className="text-lg font-semibold mb-4">
                    Differential Considerations
                    <span className="text-xs text-muted-foreground ml-2">(Clinician Only)</span>
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span>Stable angina pectoris (most likely given exertional pattern)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span>Microvascular angina</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span>GERD (less likely given clear exertional trigger)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span>Musculoskeletal chest wall pain</span>
                    </li>
                  </ul>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialistDashboard;
