const commentsDummyData = [
  {
    id: 1,
    username: "@john123",
    comment: "Great video!",
    likes: 3,
    replies: [
      {
        id: 11,
        username: "@jane456",
        comment: "Thanks! I enjoyed it too.",
        likes: 2,
        replies: [
          {
            id: 111,
            username: "@steve789",
            comment: "The content was amazing!",
            likes: 1,
            replies: [
              {
                id: 1111,
                username: "@alice012",
                comment: "I agree! The presenter was fantastic.",
                likes: 3,
                replies: [],
              },
              {
                id: 1112,
                username: "@bob345",
                comment: "Looking forward to more videos like this.",
                likes: 2,
                replies: [],
              },
            ],
          },
          {
            id: 12,
            username: "@kate678",
            comment: "Keep up the good work!",
            likes: 1,
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    username: "@david890",
    comment: "Interesting topic!",
    likes: 5,
    replies: [
      {
        id: 21,
        username: "@emily123",
        comment: "I learned a lot from this video.",
        likes: 4,
        replies: [
          {
            id: 211,
            username: "@oliver456",
            comment: "Me too! The explanations were clear.",
            likes: 2,
            replies: [],
          },
          {
            id: 212,
            username: "@sophia789",
            comment: "The visuals helped a lot in understanding.",
            likes: 3,
            replies: [],
          },
        ],
      },
      {
        id: 22,
        username: "@charlotte012",
        comment: "Can you cover more advanced topics?",
        likes: 7,
        replies: [],
      },
    ],
  },
  {
    id: 3,
    username: "@ben345",
    comment: "I enjoyed every minute of it!",
    likes: 8,
    replies: [
      {
        id: 31,
        username: "@emma678",
        comment: "The examples were really helpful.",
        likes: 5,
        replies: [],
      },
      {
        id: 32,
        username: "@liam890",
        comment: "Great job explaining complex concepts.",
        likes: 6,
        replies: [],
      },
    ],
  },
];

export default commentsDummyData;
