import fs from 'fs';
import fetch from 'node-fetch';

let handler = async (m, { conn }) => {
  // Check if the message contains the mentioned number or the name "Lazack"
  const mentioned = m.mentionedJid && m.mentionedJid.includes('919770202327') || m.text.toLowerCase().includes('Pihu');

  if (mentioned) {
    // Prepare the message with your talents and tech skills
    let message = `
---

🌟 About *Priyanshi Kaur* :

Hello! I'm Priyanshi Kaur, a passionate tech enthusiast with a variety of skills across the tech world! ✨🚀

Here are some of the key areas where I shine:

1. Web Development 💻🎨

Expertise in front-end technologies like HTML, CSS, JavaScript, React.js, and Next.js.

Proficient in back-end development using Node.js, Express.js, and databases like MongoDB and PostgreSQL.

Comfortable with deploying websites on platforms like Vercel and Render.



2. API Development 🌐🔗

I build and maintain RESTful APIs for various services.

Knowledgeable in integrating APIs such as GitHub, IMDb, and WhatsApp APIs.

Focused on scalability and efficiency in API design.



3. Bot Development 🤖💬

Skilled in creating and managing bots for platforms like WhatsApp and Discord.

Experience with automating tasks like trading bots for cryptocurrency and WhatsApp bots for customer interaction.



4. Automation ⚙️✨

Building automated systems for everyday tasks, including using bots for crypto trading and task automation.

Integration with APIs and third-party services to streamline processes.



5. Android Development 📱💖

Expertise in creating modded APKs for Android.

Experience with Java and Kotlin to develop mobile applications.



6. Cloud Computing ☁️⚡

Experience in setting up and managing virtual servers on AWS.

Familiar with VPS management and deployment automation using tools like Pterodactyl.



7. Tech Tutorials 📚🎥

I create step-by-step tutorials on various tech topics, from coding to setting up virtual environments.

My YouTube channel is focused on AI, programming, and other tech subjects.



8. Affiliate Marketing 📈💼

Promoting digital products and services through affiliate marketing.

Knowledge in SEO, content marketing, and driving traffic to tech-related websites.




💡 Feel free to contact me if you'd like to collaborate on any exciting tech projects!

Looking forward to connecting and creating amazing things together! 🌸😊


---
`;

    // Send the message to the group
    await conn.reply(m.chat, message, m);
    m.react('✅');
  }
};

handler.customPrefix = /^(919770202327|Pihu)$/i; // Trigger on mentioning the number or the name "Lazack"
handler.command = new RegExp(); // Generic regex to match the prefix and command

export default handler;
