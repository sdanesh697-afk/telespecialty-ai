import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Activity, Clock, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity className="h-6 w-6 text-primary" />
            <span className="text-xl font-semibold">TeleSpecialty+</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/patient-intake">
              <Button variant="ghost">Patient Portal</Button>
            </Link>
            <Link to="/specialist-dashboard">
              <Button>Specialist Login</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="mb-6">
            Specialist Care.
            <br />
            <span className="text-primary">Streamlined & Accessible.</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            AI-enhanced telehealth connecting rural patients with specialists across Australia.
            Complete your intake in 10 minutes, consult from anywhere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/patient-intake">
              <Button size="lg" className="text-lg px-8">
                Start Patient Intake
              </Button>
            </Link>
            <Link to="/specialist-dashboard">
              <Button size="lg" variant="outline" className="text-lg px-8">
                Specialist Access
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-12">Why TeleSpecialty+?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Clock className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl mb-2">Reduce Wait Times</h3>
              <p className="text-muted-foreground">
                AI-guided intake saves specialists 40-60% of consultation time.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Users className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl mb-2">Rural Access</h3>
              <p className="text-muted-foreground">
                Connect with specialists from anywhere in Australia, no travel required.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Shield className="h-10 w-10 text-success mb-4" />
              <h3 className="text-xl mb-2">Risk Flagging</h3>
              <p className="text-muted-foreground">
                Critical red flags highlighted before every consultation.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Activity className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl mb-2">ISBAR Summaries</h3>
              <p className="text-muted-foreground">
                Structured clinical handovers for every patient, every time.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">How It Works</h2>
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-semibold">
                1
              </div>
              <div>
                <h3 className="text-xl mb-2">Complete AI-Guided Intake</h3>
                <p className="text-muted-foreground">
                  Answer questions from home in 10 minutes. Our AI guides you through a comprehensive medical history.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xl font-semibold">
                2
              </div>
              <div>
                <h3 className="text-xl mb-2">AI Creates Structured Summary</h3>
                <p className="text-muted-foreground">
                  Your responses are transformed into an ISBAR clinical summary with risk flags and key insights.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-success text-success-foreground flex items-center justify-center text-xl font-semibold">
                3
              </div>
              <div>
                <h3 className="text-xl mb-2">Specialist Reviews & Consults</h3>
                <p className="text-muted-foreground">
                  Your specialist arrives fully briefed. More time focused on your care, not information gathering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary/10 via-accent/10 to-background py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6">Ready to get started?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of patients and specialists using TeleSpecialty+ for more efficient, accessible care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/patient-intake">
              <Button size="lg" className="text-lg px-8">
                Start as Patient
              </Button>
            </Link>
            <Link to="/specialist-dashboard">
              <Button size="lg" variant="outline" className="text-lg px-8">
                Join as Specialist
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 TeleSpecialty+. Built for Australian healthcare.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
