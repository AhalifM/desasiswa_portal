"use client";

import { Card, CardHeader, CardContent } from "@/components/card/Card";
import { StepsLayout } from "@/components/StepsLayout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const StepOne = () => {
  return (
    <div className="w-full h-full inline-flex items-start justify-center p-6">
      <StepsLayout>
        <div className="flex w-full flex-col gap-4">
          <Card>
            <CardHeader>
              <h2 className="text-xl font-bold">Room Details Verification</h2>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="font-semibold text-lg">Room Number</p>
                  <p>5-12</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="font-semibold text-lg">Block</p>
                  <p>Block A</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="font-semibold text-lg">Room Type</p>
                  <p>Double Occupancy</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="font-semibold text-lg">Floor</p>
                  <p>5th Floor</p>
                </div>
              </div>
              <div className="mt-6">
                <Button
                  asChild
                  className="bg-[#2563EB] hover:bg-[#1e53c4] text-white px-4 py-2 rounded w-full text-center"
                >
                  <Link href="/student/check-in/steptwo">Confirm Details</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </StepsLayout>
    </div>
  );
};

export default StepOne;
