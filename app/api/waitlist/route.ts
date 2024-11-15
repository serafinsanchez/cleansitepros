import { NextResponse } from 'next/server'
import { google } from 'googleapis'

// Google Sheets setup
const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n')
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets']
})

const sheets = google.sheets({ version: 'v4', auth })
const SPREADSHEET_ID = process.env.GOOGLE_SHEETS_SPREADSHEET_ID

export async function POST(req: Request) {
  try {
    const body = await req.json()
    
    // Get the sheet name
    const spreadsheet = await sheets.spreadsheets.get({
      spreadsheetId: SPREADSHEET_ID
    })
    const firstSheet = spreadsheet.data.sheets?.[0]
    const sheetName = firstSheet?.properties?.title || 'Sheet1'

    // Add timestamp
    const timestamp = new Date().toISOString()

    // Append to Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${sheetName}!A:J`,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[
          timestamp,
          body.firstName,
          body.lastName,
          body.businessName,
          body.email,
          body.city,
          body.state,
          body.zipcode,
          body.businessType,
          body.notes || ''
        ]]
      }
    })

    return NextResponse.json(
      { message: 'Successfully joined waitlist' },
      { status: 201 }
    )
  } catch (error) {
    console.error('Waitlist submission error:', error)
    return NextResponse.json(
      { error: 'Failed to join waitlist' },
      { status: 500 }
    )
  }
} 