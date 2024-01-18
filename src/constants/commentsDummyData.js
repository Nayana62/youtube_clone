const commentsDummyData = [
  {
    username: "@user1",
    comment: "Great video!",
    likes: 3,
    replies: [
      {
        username: "@user11",
        comment: "Thanks! I enjoyed it too.",
        likes: 2,
        replies: [
          {
            username: "@user111",
            comment: "The content was amazing!",
            likes: 1,
            replies: [
              {
                username: "@user1111",
                comment: "I agree! The presenter was fantastic.",
                likes: 3,
                replies: [],
              },
              {
                username: "@user1112",
                comment: "Looking forward to more videos like this.",
                likes: 2,
                replies: [],
              },
            ],
          },
          {
            username: "@user12",
            comment: "Keep up the good work!",
            likes: 1,
            replies: [],
          },
        ],
      },
    ],
  },
  {
    username: "@user2",
    comment: "Interesting topic!",
    likes: 5,
    replies: [
      {
        username: "@user21",
        comment: "I learned a lot from this video.",
        likes: 4,
        replies: [
          {
            username: "@user211",
            comment: "Me too! The explanations were clear.",
            likes: 2,
            replies: [],
          },
          {
            username: "@user212",
            comment: "The visuals helped a lot in understanding.",
            likes: 3,
            replies: [],
          },
        ],
      },
      {
        username: "@user22",
        comment: "Can you cover more advanced topics?",
        likes: 7,
        replies: [],
      },
    ],
  },
  {
    username: "@user3",
    comment: "I enjoyed every minute of it!",
    likes: 8,
    replies: [
      {
        username: "@user31",
        comment: "The examples were really helpful.",
        likes: 5,
        replies: [],
      },
      {
        username: "@user32",
        comment: "Great job explaining complex concepts.",
        likes: 6,
        replies: [],
      },
    ],
  },
];

export default commentsDummyData;
