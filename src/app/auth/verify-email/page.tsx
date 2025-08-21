import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { H1, P } from "@/components/ui/typography"

export const metadata: Metadata = {
  title: "Verify Your Email - RTN Global",
  description: "Verify your email address to complete your account setup with RTN Global.",
}

export default function VerifyEmailPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">Verify Your Email</CardTitle>
          <CardDescription className="text-center">
            Enter the verification code sent to your email
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="code">Verification Code</Label>
            <Input
              id="code"
              type="text"
              placeholder="Enter 6-digit code"
              className="text-center text-lg tracking-widest"
              maxLength={6}
            />
          </div>
          <Button className="w-full">Verify Email</Button>
          <div className="text-center space-y-2">
            <P className="text-sm text-muted-foreground">
              Didn't receive the code?
            </P>
            <Button variant="link" className="text-sm">
              Resend Code
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 