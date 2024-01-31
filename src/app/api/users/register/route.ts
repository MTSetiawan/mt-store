import { NextRequest, NextResponse } from 'next/server';
import { signUp } from '@/lib/service';

export async function GET(req: NextRequest) {
  if (req.method == 'POST') {
    await signUp(req.body, (status: boolean) => {
      if (status) {
        return NextResponse.json({
          status: true,
          statusCode: 200,
          message: 'Succes',
        });
      } else {
        return NextResponse.json({
          status: false,
          statusCode: 400,
          message: 'Failed',
        });
      }
    });
  } else {
    return NextResponse.json({
      status: false,
      statusCode: 405,
      message: 'Method not allowed',
    });
  }
}
