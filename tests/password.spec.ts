import { test, expect } from '@playwright/test';
import MailosaurClient from 'mailosaur';
const apiKey: string= process.env.mailosaur || "defaultKey"
const mailosaur = new MailosaurClient(apiKey);

test('password reset', async ({ page })=> {
  const testEmail = "reset@if0fxgy2.mailosaur.net"
  const serverID = "if0fxgy2"
  await page.goto("https://example.mailosaur.com")
  await page.locator('#forgot-password').click()
  await page.locator('#email').fill(testEmail)
  await page.locator('button[type="submit"]').click()
  const email = await mailosaur.messages.get(serverID, {
    sentTo: testEmail
  })
  expect(email.subject).toContain('Set your new password');
})