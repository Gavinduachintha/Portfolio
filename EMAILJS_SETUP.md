# EmailJS Setup Guide for Contact Form

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" (it's free!)
3. Verify your email

## Step 2: Add Email Service

1. Go to "Email Services" in dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the connection steps
5. **Save your Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

```
Subject: New Contact from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Sent from your portfolio contact form
```

4. **Save your Template ID** (e.g., `template_xyz789`)

## Step 4: Get Public Key

1. Go to "Account" → "General"
2. Find "Public Key"
3. **Copy it** (e.g., `abc123XYZ`)

## Step 5: Install EmailJS Package

```bash
npm install @emailjs/browser
```

## Step 6: Update ContactForm.jsx

Replace the handleSubmit function with this:

```javascript
import emailjs from "@emailjs/browser";

// At the top of your component, add these constants:
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID"; // From Step 2
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID"; // From Step 3
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY"; // From Step 4

// Replace the handleSubmit function:
const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validateForm()) {
    showError("Please fix the errors in the form");
    return;
  }

  setIsSubmitting(true);
  const toastId = showLoading("Sending your message...");

  try {
    // Send email using EmailJS
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: "gavindu.al@gmail.com", // Your email
      },
      EMAILJS_PUBLIC_KEY
    );

    dismissToast(toastId);
    showSuccess("Message sent successfully! I'll get back to you soon.");

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  } catch (error) {
    dismissToast(toastId);
    showError("Failed to send message. Please try again or email me directly.");
    console.error("EmailJS error:", error);
  } finally {
    setIsSubmitting(false);
  }
};
```

## Step 7: Test Your Form

1. Run your dev server: `npm run dev`
2. Fill out the contact form
3. Submit
4. Check your email inbox!

## Troubleshooting

### Not receiving emails?

- Check spam folder
- Verify Service ID, Template ID, and Public Key
- Check EmailJS dashboard for delivery logs
- Make sure email service is connected

### Getting CORS errors?

- Make sure you're using the PUBLIC key, not private
- Check EmailJS service is active
- Verify domain is allowed in EmailJS settings

### Form not submitting?

- Open browser console for errors
- Check network tab for failed requests
- Verify all IDs are correct

## Free Tier Limits

EmailJS free tier includes:

- ✅ 200 emails/month
- ✅ 2 email templates
- ✅ Unlimited forms
- ✅ Basic support

Perfect for a portfolio! 🎉

## Alternative: Environment Variables (Recommended)

For better security, use environment variables:

1. Create `.env` file in root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

2. Update ContactForm.jsx:

```javascript
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
```

3. Add to `.gitignore`:

```
.env
.env.local
```

This keeps your keys secure! 🔒
