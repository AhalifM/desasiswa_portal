"use client";

import { Card, CardHeader, CardContent } from "@/components/card/Card";
import { Step } from "@/components/Step";
import { CheckoutStepsLayout } from "@/components/checkout/CheckoutStepsLayout";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";

const CheckoutStepTwo = () => {
  return (
    <div className="w-full h-full inline-flex items-start justify-center p-6">
      <CheckoutStepsLayout>
        <div className="flex w-full flex-col gap-4">
          <Card>
            <CardHeader>
              <h2 className="text-xl font-bold">Room Details Verification</h2>
            </CardHeader>
            <CardContent className="gap-6">
              <Step
                back="/student/check-out/stepone"
                next="/student/check-out/stepthree"
                home={false}
              >
                <div className="space-y-2 ">
                  <div className="bg-[#EFF6FF] rounded-xl px-4 py-6 flex gap-4">
                    <Image
                      src="/reminder.svg"
                      width={24}
                      height={24}
                      alt="reminder icon"
                    />
                    <p className="text-[#1D4ED8]">
                      Please return your room key to the admin office. The admin
                      will verify the key return and mark this step as complete.
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-xl px-4 py-4 flex flex-row justify-between items-center">
                    <div className="flex flex-row gap-4">
                      <Image
                        src="/room.svg"
                        width={24}
                        height={24}
                        alt="room icon"
                      />
                      <div>
                        <p className="font-semibold">Form Submitted</p>
                        <p className="text-gray-500">5 days ago</p>
                      </div>
                    </div>
                    <Button
                      variant="default"
                      className="mr-4 w-[15%] bg-[#16A34A]"
                    >
                      Verify
                    </Button>
                  </div>
                </div>
              </Step>
            </CardContent>
          </Card>
        </div>
      </CheckoutStepsLayout>
    </div>
  );
};

export default CheckoutStepTwo;
