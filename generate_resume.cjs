const PDFDocument = require('pdfkit');
const fs = require('fs');

const doc = new PDFDocument({ margin: 50 });
doc.pipe(fs.createWriteStream('public/Shubham_More_Resume.pdf'));

// Fonts and Colors
const primaryColor = '#3b82f6'; // Blue
const textColor = '#1f2937'; // Dark Gray
const subTextColor = '#4b5563'; // Gray

// Header
doc.fontSize(24).fillColor(primaryColor).text('SHUBHAM MORE', { align: 'center' });
doc.fontSize(12).fillColor(subTextColor).text('B.Tech Information Technology Student', { align: 'center' });
doc.moveDown(0.5);
doc.fontSize(10).fillColor(textColor).text('Email: shubhamvmore11@gmail.com | Location: India', { align: 'center' });
doc.text('GitHub: github.com/shubhammore5145 | LinkedIn: linkedin.com/in/shubham-more-50a2a7428', { align: 'center' });
doc.moveDown(2);

// Section: Summary
doc.fontSize(14).fillColor(primaryColor).text('PROFESSIONAL SUMMARY');
doc.rect(50, doc.y + 2, 500, 1).fill(primaryColor);
doc.moveDown(1);
doc.fontSize(11).fillColor(textColor).text('I am a B.Tech Information Technology student at MGM University with a deep passion for building impactful real-world technology solutions. My journey spans web development, software engineering, AI, and data-driven systems. I thrive on solving complex problems and maintaining a strong learning mindset.');
doc.moveDown(1.5);

// Section: Education
doc.fontSize(14).fillColor(primaryColor).text('EDUCATION');
doc.rect(50, doc.y + 2, 500, 1).fill(primaryColor);
doc.moveDown(1);
doc.fontSize(12).fillColor(textColor).text('B.Tech Information Technology', { continued: true });
doc.fillColor(subTextColor).text(' - MGM University', { align: 'right' });
doc.fontSize(11).fillColor(subTextColor).text('Currently Pursuing');
doc.moveDown(1.5);

// Section: Skills
doc.fontSize(14).fillColor(primaryColor).text('TECHNICAL SKILLS');
doc.rect(50, doc.y + 2, 500, 1).fill(primaryColor);
doc.moveDown(1);
doc.fontSize(11).fillColor(textColor);
doc.text('• Frontend: React, Vue, HTML5, CSS3, JavaScript, Tailwind');
doc.text('• Backend: Node.js, Python, PHP, XAMPP, Firebase');
doc.text('• Databases: MongoDB, PostgreSQL, MySQL');
doc.text('• Tools & Others: Git, Docker, AWS, UI/UX Design, IoT setups');
doc.moveDown(1.5);

// Section: Projects
doc.fontSize(14).fillColor(primaryColor).text('PROJECTS');
doc.rect(50, doc.y + 2, 500, 1).fill(primaryColor);
doc.moveDown(1);

doc.fontSize(12).fillColor(textColor).text('Project Shanti (AI-Driven Legal Platform)');
doc.fontSize(11).fillColor(subTextColor).text('Advanced GenAI legal case solver providing automated advice using React and Python.');
doc.moveDown(0.5);

doc.fontSize(12).fillColor(textColor).text('Café Website (nisardcafe.netlify.app)');
doc.fontSize(11).fillColor(subTextColor).text('A visually appealing website for a local café featuring menus, online reservations, Razorpay payment gateway, and location details.');
doc.moveDown(0.5);

doc.fontSize(12).fillColor(textColor).text('E-Commerce Platform');
doc.fontSize(11).fillColor(subTextColor).text('Modern online shopping experience built with React, complete with shopping cart and secure checkout.');
doc.moveDown(1.5);

// Section: Certifications
doc.fontSize(14).fillColor(primaryColor).text('CERTIFICATIONS');
doc.rect(50, doc.y + 2, 500, 1).fill(primaryColor);
doc.moveDown(1);
doc.fontSize(11).fillColor(textColor);
doc.text('• Certificate of Completion - Tech Academy');
doc.text('• Certificate of Excellence - Institution');
doc.text('• Achievement Certificate - Organization');

// Finalize
doc.end();
console.log('Resume PDF generated successfully at public/Shubham_More_Resume.pdf');
