import { Quote } from "../model";

export default function EmailTemplate(data: Quote) {
  let returnInfo = "";

  if (data.doReturn !== "one-way") {
    returnInfo = `
                <tr>
                    <td width="50%">
                        <strong>Return Date</strong><br />
                        ${data.returnDate}
                    </td>
                    <td width="50%">
                        <strong>Return Time</strong><br />
                        ${data.returnTime}
                    </td>
                </tr>
    `;
  }

  return `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!--[if !mso]><!-- --><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->

<style type="text/css">
html, body { min-width:260px; min-height:100%; padding:0; margin:0 auto; line-height: 1.4; }
a img { border:none; }
.ReadMsgBody { width:100%; }
.ExternalClass { width:100%; }
.ExternalClass * { line-height:100%; }
table, td { border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; }
.button { word-wrap: break-word; }

@media screen and (max-width:480px) {
    @-ms-viewport { width:320px; }
    @viewport { width:320px; }
}

ul { padding: 0 !important; Margin: 0 0 0 40px !important; }
li { Margin-bottom: 10px !important; }
sub, sup { font-size: 70%; line-height: 0; position: relative; }
sup { mso-text-raise:60%; vertical-align: super; }
sub { bottom: -0.25em; }a{color: #145c9e;}

@media screen and (max-width:480px) {
    .tolkien-column { width: 100% !important; max-width: 100% !important; min-width: auto !important; }
    .tolkien-column img.full { width: 100% !important; max-width: 100% !important; }
    .tolkien-column img[shrinktofit=true] { width: auto !important; max-width: 100% !important;}
}

.hide-in-desktop {  display: none;  max-height: 0px;}

.quote td { border-bottom: 1px dashed #888; }

</style>

<style id="media-query" type="text/css">
@media (max-width: 520px) {
    .hide-in-mobile {  min-height: 0px;  max-height: 0px;  max-width: 0px;  display: none;  overflow: hidden;  font-size: 0px;}
    .hide-in-desktop {  display: block !important;  max-height: none !important;}
}</style>

<!--[if (gte mso 9)|(IE)]>
    <style type="text/css">.tolkien-column { width: 100% !important }</style>
<![endif]-->

<!--[if gte mso 9]>
    <style> ul > li { text-indent: -1em; /* Normalise space between bullets and text */ } a { border: none !important; /* Turn off border for anchor tag */ } </style>
<![endif]-->

<style id="asset-specific-css">
table, .elq-text-cell {
    font-family: Noto Sans, Helvetica, Arial, Sans;
}
#rwFooter {width:600px !important}
/*.dark-bg table {width:auto !important}*/
[data-location-row-column-cell="0 0 1"]
td a img {width: 92px !important;height: 12px !important;}
</style>
</head>

<body style="min-width:260px; min-height:100%; padding:0; margin:0 auto; background-color:#d4d6d7;"><!--[if (gte mso 9)|(IE)]><center><table border="0" cellpadding="0" cellspacing="0" align="center"><tr><td width="600"><![endif]-->
<table class="color-wrap" width="100%" cellpadding="0" cellspacing="0" style="background:#d4d6d7;">
  <tbody>
    <tr>
      <td>

        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;min-width:300px;margin:40px auto;" class="row row-11">
          <tbody>
            <tr>
              <td style="background:#ffffff;">

                <!-- start table -->
                <table cellpadding="15" cellspacing="8" width="100%" class="quote">
                  <tr>
                      <td colspan="2">
                          <strong>Nature of Enquiry</strong><br />
                          ${data.doReturn === "one-way" ? "One Way" : "Return"}
                      </td>
                  </tr>
                  <tr>
                      <td width="50%">
                          <strong>Pickup Point</strong><br />
                          ${data.pickup}
                      </td>
                      <td width="50%">
                          <strong>Drop off point or destination</strong><br />
                          ${data.dropOff}
                      </td>
                  </tr>
                  <tr>
                      <td width="50%">
                          <strong>Departure Date</strong><br />
                          ${data.departureDate}
                      </td>
                      <td width="50%">
                          <strong>Departure Time</strong><br />
                          ${data.departureTime}
                      </td>
                  </tr>

                  ${returnInfo}

                  <tr>
                      <td colspan="2">
                          <strong>Name</strong><br />
                          ${data.name}
                      </td>
                  </tr>

                  <tr>
                      <td width="50%">
                          <strong>Email</strong><br />
                          ${data.email}
                      </td>
                      <td width="50%">
                          <strong>Phone</strong><br />
                          ${data.phone}
                      </td>
                  </tr>

                  <tr>
                      <td width="50%">
                          <strong>Number Of Passenger</strong><br />
                          ${data.numPassenger}
                      </td>
                      <td width="50%">
                          <strong>Luggage</strong><br />
                          ${data.luggage}
                      </td>
                  </tr>

                  <tr>
                      <td width="50%">
                          <strong>Reason for trip</strong><br />
                          ${data.reason}
                      </td>
                      <td width="50%">
                          <strong>How did you hear about us?</strong><br />
                          ${data.hearAboutUs}
                      </td>
                  </tr>
                </table>
                <!-- end table -->

              </td>
            </tr>
          </tbody>
        </table>

      </td>
    </tr>
  </tbody>
</table>
<!--[if (gte mso 9)|(IE)]></td></tr></table></center><![endif]-->
</body></html>

  `;
}
