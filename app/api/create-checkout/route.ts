import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-10-28.acacia'
})

export async function POST() {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Priority Access',
              description: 'Skip the waitlist and get early access',
            },
            unit_amount: 9900, // $99.00
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_URL}/waitlist/payment-success`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}/waitlist/success`,
    })

    return NextResponse.json({ sessionId: session.id })
  } catch (error) {
    console.error('Stripe error:', error)
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    )
  }
} 