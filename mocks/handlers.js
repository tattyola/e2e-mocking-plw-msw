import { http, HttpResponse } from 'msw';

export default [
    http.get('/course/top', () => {
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
                        "name": "MOCKING IS WORKING 100%",
                        "accessType": "all",
                        "owner": "5b7366b42ffb85d6053b8649",
                        "createdAt": "2021-01-03T17:35:24.102Z",
                        "updatedAt": "2024-06-04T23:36:12.093Z",
                        "image": "https://course-qa-basics.s3.us-west-1.amazonaws.com/qa-manual-team.jpg",
                        "order": 1,
                        "cta": "MOCKING IS WORKING_1",
                        "offers": [
                            "Learning the basics of manual testing.",
                            "Suitable for beginners.",
                            "The first step towards a career: QA Manual, QA Automation.",
                            "A lot of practice."
                        ],
                        "sellOptions": [
                            {
                                "name": "MOCKING IS WORKING_2",
                                "price": "$500",
                                "duration": "месяц",
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
                        "description": "MOCKING_3",
                        "image": "https://course-qa-basics.s3.us-west-1.amazonaws.com/js-syntax-thumb.jpg",
                        "members": [],
                        "name": "MOCKING_4",
                        "order": 2,
                        "owner": "5b7366b42ffb85d6053b8649",
                        "sections": [],
                        "updatedAt": "2024-06-11T04:12:09.515Z",
                        "cta": "MOCKING IS WORKING_5",
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
