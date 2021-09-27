module.exports = {
  types: [
    { value: "feat", name: "feat:     A new feature" },
    { value: "fix", name: "fix:      A bug fix" },
    {
      value: "refactor",
      name: "refactor: Refactor existing code",
    },
    {
      value: "perf",
      name: "perf:     A code change that improves performance",
    },
    {
      value: "chore",
      name: "chore:    Other changes that don't modify src or test files",
    },
    {
      value: "ci",
      name: "ci:       Changes to our CI configuration files and scripts (example Circle)",
    },
    {
      value: "test",
      name: "test:     Adding missing tests or correcting existing tests",
    },
    { value: "docs", name: "docs:     Documentation only changes" },
    {
      value: "style",
      name: "style:    Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)",
    },
    { value: "revert", name: "revert:   Reverts a previous commit" },
    { value: "WIP", name: "WIP:      Work in progress" },
  ],
  allowTicketNumber: true,
  isTicketNumberRequired: true,
  isSubjectRequired: true,
  ticketNumberPrefix: "BOB-",
  ticketNumberRegExp: "\\d{1,4}",
  messages: {
    type: "Select the type of change that you're committing:",
    ticketNumber: "Enter the task number:",
    subject: "Write a short description of the change:\n",
    body: 'Write a longer description of the change (optional). Use "|" to break new line:\n',
    confirmCommit: "Are you sure you want to proceed with the commit above?",
  },
  skipQuestions: ["scope", "footer", "breaking"],
  subjectLimit: 100,
  breaklineChar: "|",
};
