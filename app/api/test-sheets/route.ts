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

export async function GET() {
  try {
    // First, get the sheet names
    const spreadsheet = await sheets.spreadsheets.get({
      spreadsheetId: SPREADSHEET_ID
    })

    // Get the first sheet's name
    const firstSheet = spreadsheet.data.sheets?.[0]
    const sheetName = firstSheet?.properties?.title || 'Sheet1'

    // Try to append a test row using the actual sheet name
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${sheetName}!A:I`,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[
          new Date().toISOString(),
          'Test',
          'Entry',
          'Test Business',
          'test@example.com',
          'Test City',
          'CO',
          '80202',
          'test'
        ]]
      }
    })

    return NextResponse.json({
      success: true,
      message: 'Connection successful',
      sheetName: sheetName,
      timestamp: new Date().toISOString()
    })
  } catch (error: any) {
    console.error('Test connection error:', error)
    return NextResponse.json({
      success: false,
      error: error.message,
      details: {
        credentials: {
          clientEmail: !!process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
          privateKey: !!process.env.GOOGLE_SHEETS_PRIVATE_KEY,
          spreadsheetId: !!process.env.GOOGLE_SHEETS_SPREADSHEET_ID
        }
      }
    }, { status: 500 })
  }
} 