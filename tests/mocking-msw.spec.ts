import { expect, test } from '../test';

test.describe('moking msw', () => {
    test.only('msw mocking is working', async ({page}) => {
        // try {
        //     await page.evaluate(() => {
        //         return fetch('https://server-prod.pasv.us/course/top').then(response => response.json());
        //     });
        // } catch (error) {
        //     expect(error.message).toContain('Unexpected API call');
        // }
        await page.goto('https://coding.pasv.us/')
        await expect(page.locator('h1')).toBeVisible()
        await expect(page.getByText('MOCKING IS WORKING').first()).toBeVisible()
        await page.waitForTimeout(10000)
    })
})
