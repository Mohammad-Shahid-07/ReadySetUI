import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SiteLink } from '@/components/site-link';

export default function Menu() {
  const meals = [
    {
      name: "Chicken & Brown Rice",
      description: "Lean protein with fiber-rich grains for sustained energy.",
      calories: "450 kcal/cup",
      tags: ["High Protein", "Gluten Free"],
      image: "🍗"
    },
    {
      name: "Beef & Sweet Potato",
      description: "Hearty beef with antioxidant-rich sweet potatoes.",
      calories: "500 kcal/cup",
      tags: ["Grain Free", "High Iron"],
      image: "🥩"
    },
    {
      name: "Salmon & Quinoa",
      description: "Omega-3 rich salmon for healthy skin and coat.",
      calories: "420 kcal/cup",
      tags: ["Sensitive Stomach", "Omega-3"],
      image: "🐟"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 p-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <SiteLink href="/" className="text-indigo-600 font-bold hover:underline">
            ← Back to Home
          </SiteLink>
          <h1 className="text-4xl font-bold text-slate-900">Our Menu</h1>
          <div className="w-24"></div> {/* Spacer */}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {meals.map((meal, i) => (
            <Card key={i} className="overflow-hidden border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-slate-100 flex items-center justify-center text-6xl">
                {meal.image}
              </div>
              <CardHeader>
                <div className="flex gap-2 mb-2">
                  {meal.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="bg-indigo-50 text-indigo-700 hover:bg-indigo-100">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="text-xl">{meal.name}</CardTitle>
                <CardDescription>{meal.calories}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">{meal.description}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                  Add to Plan
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 border border-slate-200 text-center">
          <h2 className="text-2xl font-bold mb-4">Not sure what to pick?</h2>
          <p className="text-slate-600 mb-6">Our algorithm can decide for you based on your puppy's profile.</p>
          <SiteLink href="/signup">
            <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800">
              Take the Quiz <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </SiteLink>
        </div>
      </div>
    </div>
  );
}
