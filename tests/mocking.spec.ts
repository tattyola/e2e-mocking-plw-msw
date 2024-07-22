import {test, expect, type Page} from '@playwright/test';

test.describe('Abort', () => {
    test.beforeEach(async ({page, context}) => {
        await context.route(/.top/, (route) => route.abort()) // working
    });
    test('abort is working', async ({page}) => {
        await page.goto('https://coding.pasv.us/')
        await expect(page.locator('h1')).toBeVisible()
        await expect(page.locator('.checked-list').first()).not.toBeVisible()
        await page.waitForTimeout(10000)
    })
})

test.describe('Fulfill', () => {

    test('mocking is working', async ({page}) => {
        await page.route('https://server-prod.pasv.us/course/top', async (route) => {
            const json = {
                "message": "Courses get. Success",
                "success": true,
                "fail": false,
                "payload": [
                    {
                        "_id": "5ff2005cacc2d5003ae26bc7",
                        "description": "MOCKING IS WORKING",
                        "dependsOn": null,
                        "allowedForRoles": "",
                        "members": [],
                        "sections": [
                            {
                                "_id": "5ff20082acc2d5003ae26d93",
                                "lessons": [
                                    "5ff200c5acc2d5003ae26d9e",
                                    "5ff24c55acc2d5003ae48222",
                                    "5ff25767acc2d5003ae4f352",
                                    "5ff257e6acc2d5003ae4f6fb",
                                    "61d1f4127dd0734ac87fc18e",
                                    "6193f2ec680aff3c4b21b397"
                                ]
                            }
                        ],
                        "name": "MOCKING IS WORKING 100%",
                        "accessType": "all",
                        "owner": "5b7366b42ffb85d6053b8649",
                        "createdAt": "2021-01-03T17:35:24.102Z",
                        "updatedAt": "2024-06-04T23:36:12.093Z",
                        "image": "https://course-qa-basics.s3.us-west-1.amazonaws.com/qa-manual-team.jpg",
                        "order": 1,
                        "cta": "MOCKING IS WORKING I know",
                        "offers": [
                            "Learning the basics of manual testing.",
                            "Suitable for beginners.",
                            "The first step towards a career: QA Manual, QA Automation.",
                            "A lot of practice."
                        ],
                        "sellOptions": [
                            {
                                "name": "MOCKING IS WORKING I see",
                                "price": "$49",
                                "duration": "месяц",
                                "benefits": [
                                    "Подходит для начинающих – от простого к сложному",
                                    "Первая ступень для карьеры QA Manual, QA Automation",
                                    "Лекции и домашние задания",
                                    "Обратная связь по каждому домашнему заданию",
                                    "Очень много практики",
                                    "Персональный ментор"
                                ],
                                "priceId": {
                                    "prod": "price_1MvSc0KDKgEgFbgKm73rN1d9",
                                    "local": "price_1N0kYgKDKgEgFbgKj7QTMaer"
                                },
                                "type": "subscription",
                                "courseName": "QA Manual"
                            }
                        ],
                        "video": "https://youtu.be/UDAfnrbZJ1Y"
                    },
                    {
                        "_id": "635c05ba659f6d77abf1f4e7",
                        "accessType": "all",
                        "allowedForRoles": "",
                        "createdAt": "2022-10-29T17:21:46.775Z",
                        "dependsOn": null,
                        "description": "Learn JavaScript for work and interviews. Practical tasks with instant verification. Suitable for beginners. The first step towards the profession of Front-End and QA Automation.",
                        "image": "https://course-qa-basics.s3.us-west-1.amazonaws.com/js-syntax-thumb.jpg",
                        "members": [],
                        "name": "JavaScript Syntax",
                        "order": 2,
                        "owner": "5b7366b42ffb85d6053b8649",
                        "sections": [
                            {
                                "_id": "635c05ba659f6d77abf1f4e8",
                                "lessons": [
                                    "635c05ba659f6d77abf1f4e9",
                                    "635c05ba659f6d77abf1f4fe",
                                    "635f26d0cf4ae3cbc5e5666c"
                                ]
                            },

                            {
                                "_id": "6439601a98dfa6acc27fc3f7",
                                "lessons": [
                                    "6439601a98dfa6acc27fc3f8",
                                    "6439601a98dfa6acc27fc404",
                                    "6439601a98dfa6acc27fc410",
                                    "6439601a98dfa6acc27fc41c"
                                ]
                            }
                        ],
                        "updatedAt": "2024-06-11T04:12:09.515Z",
                        "sellOptions": [
                            {
                                "name": "MOCKING IS WORKING",
                                "price": "$49",
                                "duration": "месяц",
                                "benefits": [
                                    "Учим программирование с самого начала",
                                    "Подходит для начинающих – от простого к сложному",
                                    "Практические задания с моментальной проверкой",
                                    "Решаем алгоритмические задачи с собеседований",
                                    "Первая ступень для карьеры в IT: Frontend, QA Automation",
                                    "Очень много практики"
                                ],
                                "priceId": {
                                    "prod": "price_1MrQM6KDKgEgFbgKwKgmNdkj",
                                    "local": "price_1Mrj3SKDKgEgFbgKA547tttY"
                                },
                                "courseName": "MOCKING IS WORKING",
                                "type": "subscription"
                            }
                        ],
                        "cta": "MOCKING IS WORKING",
                        "offers": [
                            "First 8 lessons for free",
                            "Practical learning from scratch.",
                            "Suitable for beginners.",
                            "We solve algorithmic problems.",
                            "The first step towards a career: Frontend, QA Automation.",
                            "A lot of practice."
                        ],
                        "video": "https://youtu.be/h9dTAjc8-1s"
                    }
                ]
            }
            await route.fulfill({ json })
        });
        await page.goto('https://coding.pasv.us/')
        await expect(page.locator('h1')).toBeVisible()
        await expect(page.locator('.checked-list').first()).toBeVisible()
        await expect(page.getByText('MOCKING IS WORKING').first()).toBeVisible()
        await page.waitForTimeout(10000)
    })
})


