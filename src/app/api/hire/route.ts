import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Validate required fields
    const required = ['name', 'email', 'project_type', 'description', 'timeline'];
    for (const field of required) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }
    
    // Save to CRM system
    const timestamp = Date.now();
    const fs = require('fs');
    const path = require('path');
    
    const inquiry = {
      id: `web-${timestamp}`,
      source: 'website',
      ...data
    };
    
    // Write to temp file and process via CRM
    const tempFile = `/tmp/inquiry-${timestamp}.json`;
    fs.writeFileSync(tempFile, JSON.stringify(inquiry));
    
    try {
      const { execSync } = require('child_process');
      const script = `
        const crm = require('/home/ubuntu/.openclaw/workspace/pipeline/crm-system.js');
        const fs = require('fs');
        const inquiry = JSON.parse(fs.readFileSync('${tempFile}', 'utf8'));
        crm.addClient(inquiry);
        fs.unlinkSync('${tempFile}');
      `;
      execSync(`node -e ${JSON.stringify(script)}`, { 
        timeout: 5000 
      });
    } catch (e) {
      console.error('CRM save failed:', e);
      // Clean up temp file
      try { fs.unlinkSync(tempFile); } catch {}
    }
    
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
