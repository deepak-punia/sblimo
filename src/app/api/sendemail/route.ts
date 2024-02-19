import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';



const resend = new Resend("re_VEEi4keF_ERBeuXYC9P6LnYw6tHN2tTyL");

export async function POST(req: NextRequest) {
  const { name,
    phone,
    date,
    time,
    pickUp,
    dropOff,
    vehicle,
    message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: 'automatic@sblimoservices.com', // your verified domain
      to: `punia0481@gmail.com`, // the email address you want to send a message
      reply_to: 'sblimousine123@gmail.com',
      subject: `Contact form submited.`,
      html: `<html><head>
    <style>
    .body {
        width: 100%; 
      }
      .container {

      }
.align-content{
  max-width:600px;
  text-align: left;
  background-color: #f6f6f6;
  color:black;
  padding:20px !important;
}
    </style>
    </head><body>` +
      `<table  border=0 cellspacing=0 cellpadding=20 style='width:100%;background:#f6f6f6;border-collapse:collapse;border:none;'>
      <tr >
        <td>
          <h2>FreightComm </h2>
                <hr />
        
        
            
            ` +
           `This is to inform you that a new contact us form was submitted from website. Details: ` + name + " | " + phone + " | " + date + " | " + time + " | " + pickUp + " | " + dropOff + " | " + vehicle + " | " + message +
      `
            
      </td>
          
        </tr></table>` +
      `</body></html>`,
      
    });
    console.log(data)
    return new NextResponse("Email sent.", { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error });
  }
}