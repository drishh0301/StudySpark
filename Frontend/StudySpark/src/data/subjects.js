const subjects = {
  machinelearning: {
    fileName: "MachineLearning.pdf",

    summary:
      "Machine Learning is a branch of Artificial Intelligence that enables computers to learn from data and make predictions without being explicitly programmed.",

    flashcards: [
      "Supervised Learning",
      "Unsupervised Learning",
      "Regression"
    ],

    questions: [
      {
        question: "What is supervised learning?",
        options: [
          "Learning with labelled data",
          "Learning without data",
          "Compiler",
          "Database"
        ],
        answer: "Learning with labelled data"
      },
      {
        question: "Which algorithm is used for classification?",
        options: [
          "Decision Tree",
          "Bubble Sort",
          "Binary Search",
          "DFS"
        ],
        answer: "Decision Tree"
      }
    ]
  },

  dbms: {
    fileName: "DBMS.pdf",

    summary:
      "DBMS is software used to create, manage and retrieve data from databases efficiently.",

    flashcards: [
      "Primary Key",
      "Foreign Key",
      "Normalization"
    ],

    questions: [
      {
        question: "What is a Primary Key?",
        options: [
          "Unique Identifier",
          "Duplicate Value",
          "Foreign Table",
          "Constraint"
        ],
        answer: "Unique Identifier"
      },
      {
        question: "Normalization helps to...",
        options: [
          "Reduce redundancy",
          "Increase redundancy",
          "Delete tables",
          "Create passwords"
        ],
        answer: "Reduce redundancy"
      }
    ]
  },

  java: {
    fileName: "Java.pdf",

    summary:
      "Java is an object-oriented programming language used to build desktop, web and mobile applications.",

    flashcards: [
      "Class",
      "Object",
      "Inheritance"
    ],

    questions: [
      {
        question: "Java is a ____ language.",
        options: [
          "Programming",
          "Database",
          "Operating System",
          "Markup"
        ],
        answer: "Programming"
      }
    ]
  },

  os: {
    fileName: "OperatingSystem.pdf",

    summary:
      "An Operating System manages computer hardware, software resources and provides services for applications.",

    flashcards: [
      "Process",
      "Thread",
      "Memory Management"
    ],

    questions: [
      {
        question: "What is an Operating System?",
        options: [
          "System Software",
          "Database",
          "Browser",
          "Compiler"
        ],
        answer: "System Software"
      }
    ]
  }
};

export default subjects;