import { NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'businessName', 'email', 'city', 'state', 'zipcode', 'businessType']
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `${field} is required` },
          { status: 400 }
        )
      }
    }

    // Create submission with timestamp
    const submission = {
      ...data,
      submittedAt: new Date().toISOString(),
    }

    // Get the path to waitlist.json
    const filePath = path.join(process.cwd(), 'data', 'waitlist.json')
    
    // Read existing submissions
    let submissions = []
    try {
      const fileContent = await fs.readFile(filePath, 'utf-8')
      submissions = JSON.parse(fileContent)
    } catch (error) {
      // File doesn't exist or is empty, start with empty array
    }

    // Add new submission
    submissions.push(submission)

    // Write back to file
    await fs.writeFile(filePath, JSON.stringify(submissions, null, 2))

    return NextResponse.json({ success: true }, { status: 200 })
    
  } catch (error) {
    console.error('Waitlist submission error:', error)
    return NextResponse.json(
      { error: 'Failed to process submission' },
      { status: 500 }
    )
  }
} 