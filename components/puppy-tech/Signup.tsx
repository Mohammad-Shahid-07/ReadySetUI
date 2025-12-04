import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function Signup() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-slate-200 shadow-xl">
        <CardHeader>
          <div className="mb-4 text-center">
            <span className="font-bold text-xl tracking-tight text-indigo-600">PuppyTech</span>
          </div>
          <CardTitle className="text-2xl text-center">Let's get started</CardTitle>
          <CardDescription className="text-center">
            Tell us a bit about your puppy to get a custom plan.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Puppy's Name</Label>
            <Input id="name" placeholder="e.g. Cooper" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="breed">Breed</Label>
            <Input id="breed" placeholder="e.g. Golden Retriever" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="age">Age (months)</Label>
              <Input id="age" type="number" placeholder="4" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="weight">Weight (lbs)</Label>
              <Input id="weight" type="number" placeholder="15" />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button className="w-full bg-indigo-600 hover:bg-indigo-700 size-lg">
            Continue
          </Button>
          <p className="text-xs text-center text-slate-500">
            Already have an account? <Link href="#" className="text-indigo-600 hover:underline">Log in</Link>
          </p>
          <Link href="/" className="text-sm text-center text-slate-400 hover:text-slate-600">
            Cancel and return home
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
