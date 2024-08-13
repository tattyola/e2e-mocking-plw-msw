import { expect, checkHandlerPresence, test } from '../test';
import { HttpResponse, passthrough } from 'msw';
import handlers from '../mocks/handlers';

test.describe('mocking msw', () => {
    const mockEndpoint = '/course/top';
// test.beforeEach(async ({worker, http}, testInfo) => {
//     // await worker.resetHandlers()
//     if (testInfo.title.includes('@mocked')) {
//         await worker.use(
//             http.all('*', async () => {
//                 console.log('ERROR')
//                 // return passthrough()
//                 // return new HttpResponse(null, {
//                 //     status: 403,
//                 // });
//             }),
//         );
//     }
// })
    test.only('msw mocking is working @mocking', async ({page, worker, http}) => {
        // await worker.use(
        //     http.get(mockEndpoint, async () => {
        //         // return new HttpResponse(null, {
        //         //     status: 403,
        //         // });
        //     }),
        // );
        // await worker.use(
        //     ...handlers
        // );


        await page.goto('https://coding.pasv.us/')
        await expect(page.locator('h1')).toBeVisible()
        await expect(page.getByText('MOCKING IS WORKING').first()).toBeVisible()
        await page.waitForTimeout(10000)
    })
})
