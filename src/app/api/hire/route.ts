import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Validate required fields
    const required = ['name', 'email', 'project_type', 'description', 'budget', 'timeline'];
    for (const field of required) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }
    
    // Save to JSON file (simple CRM)
    const timestamp = Date.now();
    const fs = require('fs');
    const path = require('path');
    
    const dataDir = '/home/ubuntu/.openclaw/workspace/data/client-inquiries';
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    
    const inquiry = {
      id: `web-${timestamp}`,
      timestamp: new Date().toISOString(),
      source: 'website',
      ...data
    };
    
    const filePath = path.join(dataDir, `${timestamp}-${data.email.replace('@', '-at-')}.json`);
    fs.writeFileSync(filePath, JSON.stringify(inquiry, null, 2));
    
    // Send email notification (via Python script)
    const { execSync } = require('child_process');
    try {
      execSync(
        `python3 /home/ubuntu/.openclaw/workspace/pipeline/gmail-inquiry-monitor.py`,
        { timeout: 5000 }
      );
    } catch (e) {
      // Gmail notification failed, but inquiry saved
      console.error('Gmail notification failed:', e);
    }
    
    return NextResponse.json({
      success: true,
      message: 'Thank you! We\'ll respond within 24 hours with a detailed proposal.',
      id: inquiry.id
    });
    
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { error: 'Failed to process submission' },
      { status: 500 }
    );
  }
}
