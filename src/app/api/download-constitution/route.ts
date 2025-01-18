import { NextResponse } from 'next/server';
import { generateConstitutionPDF } from '@/utils/generatePDF';

export async function GET() {
  try {
    const doc = generateConstitutionPDF();
    const pdfBuffer = doc.output('arraybuffer');

    return new NextResponse(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="SADRC-Constitution.pdf"',
      },
    });
  } catch (error) {
    return new NextResponse('Error generating PDF', { status: 500 });
  }
}
