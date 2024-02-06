const patientsData = [
    {
        "id": 1,
        "age": 65,
        "gender": "Feminino",
        "sessionCount": 2,
        "painLevel": "mild",
        "symptoms": [
            "Swelling"
        ],
        "clinic": "Clínica A",
        "date": "2022-03-10T13:12:52.694Z"
    },
    {
        "id": 2,
        "age": 39,
        "gender": "Masculino",
        "sessionCount": 2,
        "painLevel": "mild",
        "symptoms": [
            "Limited mobility",
            "Back pain",
            "Joint pain",
            "Swelling"
        ],
        "clinic": "Clínica A",
        "date": "2022-08-16T07:03:12.128Z"
    },
    {
        "id": 3,
        "age": 60,
        "gender": "Masculino",
        "sessionCount": 4,
        "painLevel": "severe",
        "symptoms": [
            "Limited mobility"
        ],
        "clinic": "Clínica B",
        "date": "2022-07-09T10:10:31.178Z"
    },
    {
        "id": 4,
        "age": 58,
        "gender": "Masculino",
        "sessionCount": 2,
        "painLevel": "moderate",
        "symptoms": [
            "Joint pain",
            "Swelling"
        ],
        "clinic": "Clínica A",
        "date": "2022-06-05T23:14:11.670Z"
    },
    {
        "id": 5,
        "age": 86,
        "gender": "Masculino",
        "sessionCount": 1,
        "painLevel": "severe",
        "symptoms": [
            "Back pain",
            "Muscle weakness",
            "Limited mobility",
            "Swelling"
        ],
        "clinic": "Clínica C",
        "date": "2022-02-20T23:42:24.086Z"
    },
    {
        "id": 6,
        "age": 79,
        "gender": "Masculino",
        "sessionCount": 9,
        "painLevel": "moderate",
        "symptoms": [
            "Back pain",
            "Swelling",
            "Joint pain"
        ],
        "clinic": "Clínica C",
        "date": "2022-11-30T06:02:35.542Z"
    },
    {
        "id": 7,
        "age": 61,
        "gender": "Feminino",
        "sessionCount": 2,
        "painLevel": "severe",
        "symptoms": [
            "Back pain",
            "Limited mobility",
            "Joint pain",
            "Muscle weakness"
        ],
        "clinic": "Clínica C",
        "date": "2022-09-25T17:57:47.788Z"
    },
    {
        "id": 8,
        "age": 27,
        "gender": "Masculino",
        "sessionCount": 5,
        "painLevel": "severe",
        "symptoms": [
            "Back pain",
            "Limited mobility",
            "Swelling",
            "Joint pain"
        ],
        "clinic": "Clínica B",
        "date": "2022-08-20T03:06:11.606Z"
    },
    {
        "id": 9,
        "age": 26,
        "gender": "Feminino",
        "sessionCount": 4,
        "painLevel": "moderate",
        "symptoms": [
            "Limited mobility",
            "Muscle weakness"
        ],
        "clinic": "Clínica A",
        "date": "2022-09-24T09:07:50.524Z"
    },
    {
        "id": 10,
        "age": 48,
        "gender": "Feminino",
        "sessionCount": 2,
        "painLevel": "moderate",
        "symptoms": [
            "Swelling",
            "Joint pain"
        ],
        "clinic": "Clínica B",
        "date": "2022-04-09T06:54:02.063Z"
    },
    {
        "id": 11,
        "age": 22,
        "gender": "Feminino",
        "sessionCount": 3,
        "painLevel": "mild",
        "symptoms": [
            "Limited mobility",
            "Swelling"
        ],
        "clinic": "Clínica C",
        "date": "2022-01-29T18:51:31.956Z"
    },
    {
        "id": 12,
        "age": 56,
        "gender": "Feminino",
        "sessionCount": 2,
        "painLevel": "mild",
        "symptoms": [
            "Limited mobility",
            "Back pain",
            "Swelling",
            "Joint pain",
            "Muscle weakness"
        ],
        "clinic": "Clínica C",
        "date": "2022-05-14T18:50:55.525Z"
    },
    {
        "id": 13,
        "age": 29,
        "gender": "Masculino",
        "sessionCount": 1,
        "painLevel": "moderate",
        "symptoms": [
            "Limited mobility"
        ],
        "clinic": "Clínica A",
        "date": "2022-06-14T19:05:23.649Z"
    },
    {
        "id": 14,
        "age": 63,
        "gender": "Feminino",
        "sessionCount": 7,
        "painLevel": "severe",
        "symptoms": [
            "Joint pain",
            "Limited mobility",
            "Swelling",
            "Muscle weakness"
        ],
        "clinic": "Clínica A",
        "date": "2022-09-23T13:44:04.945Z"
    },
    {
        "id": 15,
        "age": 62,
        "gender": "Masculino",
        "sessionCount": 1,
        "painLevel": "moderate",
        "symptoms": [
            "Muscle weakness"
        ],
        "clinic": "Clínica A",
        "date": "2022-06-30T02:49:25.712Z"
    },
    {
        "id": 16,
        "age": 34,
        "gender": "Feminino",
        "sessionCount": 7,
        "painLevel": "mild",
        "symptoms": [
            "Swelling",
            "Back pain",
            "Limited mobility",
            "Muscle weakness"
        ],
        "clinic": "Clínica C",
        "date": "2022-10-22T21:01:31.657Z"
    },
    {
        "id": 17,
        "age": 78,
        "gender": "Feminino",
        "sessionCount": 9,
        "painLevel": "severe",
        "symptoms": [
            "Limited mobility",
            "Muscle weakness",
            "Joint pain"
        ],
        "clinic": "Clínica A",
        "date": "2022-04-15T06:36:27.826Z"
    },
    {
        "id": 18,
        "age": 76,
        "gender": "Feminino",
        "sessionCount": 10,
        "painLevel": "moderate",
        "symptoms": [
            "Swelling"
        ],
        "clinic": "Clínica C",
        "date": "2022-01-08T05:57:20.614Z"
    },
    {
        "id": 19,
        "age": 90,
        "gender": "Feminino",
        "sessionCount": 6,
        "painLevel": "severe",
        "symptoms": [
            "Joint pain",
            "Limited mobility"
        ],
        "clinic": "Clínica C",
        "date": "2022-09-07T09:40:35.806Z"
    },
    {
        "id": 20,
        "age": 72,
        "gender": "Masculino",
        "sessionCount": 4,
        "painLevel": "severe",
        "symptoms": [
            "Swelling",
            "Joint pain"
        ],
        "clinic": "Clínica B",
        "date": "2022-07-15T11:16:17.729Z"
    },
    {
        "id": 21,
        "age": 38,
        "gender": "Masculino",
        "sessionCount": 10,
        "painLevel": "moderate",
        "symptoms": [
            "Joint pain",
            "Swelling",
            "Limited mobility"
        ],
        "clinic": "Clínica B",
        "date": "2022-09-14T20:41:54.983Z"
    },
    {
        "id": 22,
        "age": 41,
        "gender": "Feminino",
        "sessionCount": 9,
        "painLevel": "moderate",
        "symptoms": [
            "Muscle weakness",
            "Joint pain",
            "Swelling"
        ],
        "clinic": "Clínica B",
        "date": "2022-10-17T19:11:12.551Z"
    },
    {
        "id": 23,
        "age": 21,
        "gender": "Masculino",
        "sessionCount": 10,
        "painLevel": "severe",
        "symptoms": [
            "Joint pain"
        ],
        "clinic": "Clínica B",
        "date": "2022-12-26T22:32:19.550Z"
    },
    {
        "id": 24,
        "age": 85,
        "gender": "Feminino",
        "sessionCount": 1,
        "painLevel": "moderate",
        "symptoms": [
            "Swelling",
            "Muscle weakness"
        ],
        "clinic": "Clínica B",
        "date": "2022-06-10T17:33:34.046Z"
    },
    {
        "id": 25,
        "age": 19,
        "gender": "Feminino",
        "sessionCount": 2,
        "painLevel": "moderate",
        "symptoms": [
            "Muscle weakness",
            "Limited mobility",
            "Swelling"
        ],
        "clinic": "Clínica C",
        "date": "2022-12-25T04:48:38.051Z"
    },
    {
        "id": 26,
        "age": 30,
        "gender": "Masculino",
        "sessionCount": 9,
        "painLevel": "moderate",
        "symptoms": [
            "Joint pain",
            "Back pain",
            "Swelling",
            "Limited mobility",
            "Muscle weakness"
        ],
        "clinic": "Clínica B",
        "date": "2022-02-28T18:18:20.984Z"
    },
    {
        "id": 27,
        "age": 24,
        "gender": "Masculino",
        "sessionCount": 1,
        "painLevel": "severe",
        "symptoms": [
            "Limited mobility",
            "Muscle weakness",
            "Joint pain"
        ],
        "clinic": "Clínica B",
        "date": "2022-08-26T05:17:53.902Z"
    },
    {
        "id": 28,
        "age": 66,
        "gender": "Masculino",
        "sessionCount": 1,
        "painLevel": "severe",
        "symptoms": [
            "Joint pain"
        ],
        "clinic": "Clínica C",
        "date": "2022-02-18T09:51:38.902Z"
    },
    {
        "id": 29,
        "age": 42,
        "gender": "Masculino",
        "sessionCount": 3,
        "painLevel": "mild",
        "symptoms": [
            "Swelling",
            "Back pain",
            "Limited mobility",
            "Muscle weakness"
        ],
        "clinic": "Clínica A",
        "date": "2022-01-24T21:30:05.015Z"
    },
    {
        "id": 30,
        "age": 66,
        "gender": "Masculino",
        "sessionCount": 2,
        "painLevel": "severe",
        "symptoms": [
            "Muscle weakness",
            "Limited mobility"
        ],
        "clinic": "Clínica A",
        "date": "2022-02-15T16:59:25.102Z"
    },
    {
        "id": 31,
        "age": 66,
        "gender": "Feminino",
        "sessionCount": 8,
        "painLevel": "severe",
        "symptoms": [
            "Limited mobility",
            "Swelling",
            "Joint pain",
            "Muscle weakness",
            "Back pain"
        ],
        "clinic": "Clínica B",
        "date": "2022-05-10T02:56:24.344Z"
    },
    {
        "id": 32,
        "age": 86,
        "gender": "Masculino",
        "sessionCount": 9,
        "painLevel": "moderate",
        "symptoms": [
            "Limited mobility",
            "Back pain",
            "Swelling"
        ],
        "clinic": "Clínica C",
        "date": "2022-10-01T21:28:17.529Z"
    },
    {
        "id": 33,
        "age": 37,
        "gender": "Feminino",
        "sessionCount": 1,
        "painLevel": "mild",
        "symptoms": [
            "Limited mobility",
            "Muscle weakness",
            "Swelling"
        ],
        "clinic": "Clínica A",
        "date": "2022-05-25T22:56:11.879Z"
    },
    {
        "id": 34,
        "age": 27,
        "gender": "Masculino",
        "sessionCount": 5,
        "painLevel": "mild",
        "symptoms": [
            "Swelling",
            "Back pain"
        ],
        "clinic": "Clínica B",
        "date": "2022-04-15T04:18:56.550Z"
    },
    {
        "id": 35,
        "age": 60,
        "gender": "Feminino",
        "sessionCount": 4,
        "painLevel": "mild",
        "symptoms": [
            "Limited mobility",
            "Joint pain",
            "Muscle weakness",
            "Swelling"
        ],
        "clinic": "Clínica B",
        "date": "2022-11-20T09:55:57.707Z"
    },
    {
        "id": 36,
        "age": 41,
        "gender": "Masculino",
        "sessionCount": 6,
        "painLevel": "mild",
        "symptoms": [
            "Limited mobility",
            "Muscle weakness",
            "Joint pain",
            "Back pain",
            "Swelling"
        ],
        "clinic": "Clínica A",
        "date": "2022-08-26T01:20:09.621Z"
    },
    {
        "id": 37,
        "age": 30,
        "gender": "Masculino",
        "sessionCount": 5,
        "painLevel": "moderate",
        "symptoms": [
            "Swelling",
            "Limited mobility",
            "Muscle weakness"
        ],
        "clinic": "Clínica A",
        "date": "2022-05-06T05:41:01.552Z"
    },
    {
        "id": 38,
        "age": 67,
        "gender": "Masculino",
        "sessionCount": 2,
        "painLevel": "severe",
        "symptoms": [
            "Limited mobility"
        ],
        "clinic": "Clínica C",
        "date": "2022-05-28T02:58:43.169Z"
    },
    {
        "id": 39,
        "age": 33,
        "gender": "Feminino",
        "sessionCount": 1,
        "painLevel": "moderate",
        "symptoms": [
            "Muscle weakness",
            "Joint pain",
            "Swelling"
        ],
        "clinic": "Clínica A",
        "date": "2022-04-13T13:17:24.978Z"
    },
    {
        "id": 40,
        "age": 52,
        "gender": "Masculino",
        "sessionCount": 4,
        "painLevel": "severe",
        "symptoms": [
            "Muscle weakness"
        ],
        "clinic": "Clínica C",
        "date": "2022-07-31T07:23:42.126Z"
    },
    {
        "id": 41,
        "age": 80,
        "gender": "Feminino",
        "sessionCount": 5,
        "painLevel": "mild",
        "symptoms": [
            "Swelling"
        ],
        "clinic": "Clínica A",
        "date": "2022-05-21T18:07:41.148Z"
    },
    {
        "id": 42,
        "age": 23,
        "gender": "Masculino",
        "sessionCount": 4,
        "painLevel": "moderate",
        "symptoms": [
            "Limited mobility",
            "Back pain",
            "Joint pain",
            "Swelling"
        ],
        "clinic": "Clínica B",
        "date": "2022-07-19T09:13:55.777Z"
    },
    {
        "id": 43,
        "age": 60,
        "gender": "Masculino",
        "sessionCount": 7,
        "painLevel": "severe",
        "symptoms": [
            "Limited mobility",
            "Joint pain",
            "Back pain"
        ],
        "clinic": "Clínica A",
        "date": "2022-01-13T18:22:53.432Z"
    },
    {
        "id": 44,
        "age": 68,
        "gender": "Feminino",
        "sessionCount": 1,
        "painLevel": "mild",
        "symptoms": [
            "Swelling",
            "Muscle weakness",
            "Back pain",
            "Joint pain",
            "Limited mobility"
        ],
        "clinic": "Clínica C",
        "date": "2022-04-23T11:26:17.332Z"
    },
    {
        "id": 45,
        "age": 27,
        "gender": "Feminino",
        "sessionCount": 9,
        "painLevel": "moderate",
        "symptoms": [
            "Back pain",
            "Swelling"
        ],
        "clinic": "Clínica B",
        "date": "2022-08-05T16:12:02.011Z"
    },
    {
        "id": 46,
        "age": 84,
        "gender": "Masculino",
        "sessionCount": 1,
        "painLevel": "mild",
        "symptoms": [
            "Limited mobility",
            "Swelling",
            "Muscle weakness",
            "Joint pain"
        ],
        "clinic": "Clínica A",
        "date": "2022-04-06T13:54:05.188Z"
    },
    {
        "id": 47,
        "age": 66,
        "gender": "Feminino",
        "sessionCount": 4,
        "painLevel": "moderate",
        "symptoms": [
            "Muscle weakness",
            "Swelling",
            "Joint pain",
            "Back pain"
        ],
        "clinic": "Clínica C",
        "date": "2022-08-11T01:01:26.359Z"
    },
    {
        "id": 48,
        "age": 35,
        "gender": "Masculino",
        "sessionCount": 5,
        "painLevel": "severe",
        "symptoms": [
            "Back pain",
            "Limited mobility"
        ],
        "clinic": "Clínica B",
        "date": "2022-01-23T16:17:41.121Z"
    },
    {
        "id": 49,
        "age": 23,
        "gender": "Feminino",
        "sessionCount": 3,
        "painLevel": "severe",
        "symptoms": [
            "Swelling",
            "Joint pain",
            "Muscle weakness",
            "Back pain",
            "Limited mobility"
        ],
        "clinic": "Clínica C",
        "date": "2022-09-19T11:04:06.224Z"
    },
    {
        "id": 50,
        "age": 44,
        "gender": "Feminino",
        "sessionCount": 7,
        "painLevel": "severe",
        "symptoms": [
            "Limited mobility",
            "Muscle weakness",
            "Back pain"
        ],
        "clinic": "Clínica C",
        "date": "2022-03-28T00:39:21.746Z"
    }
]