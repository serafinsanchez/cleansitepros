// We'll implement email notifications later
export async function sendNotificationEmail(submission: {
  businessName: string
  email: string
  location: string
  businessType: string
}) {
  // For now, just log the submission
  console.log('Would send email for submission:', submission)
} 