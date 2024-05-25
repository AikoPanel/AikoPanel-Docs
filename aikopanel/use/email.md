# Mail

## Configure SMTP outgoing mail
System Configuration->Mail, you can configure the mail service. Before configuring, you need to understand what SMTP service is, which can be learned from Google.

## Customized mail template

In addition to the system's built-in templates, you can create your own templates for use.

First, you need to go to /resources/views/mail, where the mail template themes are stored. You can copy the default theme and rename it to your own theme name to modify the .blade.php file in the theme.

After the creation is complete, return to the System Configuration->Mail->Mail Template, and you can see the mail template you defined

## FAQ

Q: How to track error information?

A: There are detailed error information in the database email_log table. You can also perform a sending test in the backstage, and the error will be notified in the test results.
