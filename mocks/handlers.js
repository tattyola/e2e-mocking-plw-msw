import {http, HttpResponse} from 'msw';

export default [
    http.get('https://server-prod.pasv.us/course/top', (info) => {
        return HttpResponse.json({
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
                                "price": "$500",
                                "duration": "месяц",
                                "benefits": [
                                    "MOCKING",
                                    "Первая ступень для карьеры QA Manual, QA Automation",
                                    "Лекции и домашние задания",
                                    "Обратная связь по каждому домашнему заданию",
                                    "Очень много практики",
                                    "Персональный ментор"
                                ],
                                "type": "subscription",
                                "courseName": "MOCKING"
                            }
                        ],
                    },
                    {
                        "_id": "635c05ba659f6d77abf1f4e7",
                        "accessType": "all",
                        "allowedForRoles": "",
                        "createdAt": "2022-10-29T17:21:46.775Z",
                        "dependsOn": null,
                        "description": "MOCKING",
                        "image": "https://course-qa-basics.s3.us-west-1.amazonaws.com/js-syntax-thumb.jpg",
                        "members": [],
                        "name": "MOCKING",
                        "order": 2,
                        "owner": "5b7366b42ffb85d6053b8649",
                        "sections": [],
                        "updatedAt": "2024-06-11T04:12:09.515Z",
                        "sellOptions": [
                            {
                                "name": "MOCKING IS WORKING",
                                "price": "$1000",
                                "duration": "месяц",
                                "benefits": [
                                    "Учим программирование с самого начала",
                                    "Подходит для начинающих – от простого к сложному",
                                    "Практические задания с моментальной проверкой",
                                    "Решаем алгоритмические задачи с собеседований",
                                    "Первая ступень для карьеры в IT: Frontend, QA Automation",
                                    "MOCKING"
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
                    }
                ]
            }
        )
    }),
]
