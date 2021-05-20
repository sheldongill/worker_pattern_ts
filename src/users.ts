const usersTable: { [index: string]: { webhook: string; email: string } } = {
  "1": { webhook: "http://localhost:8080/1", email: "sheldon@example.com" },
  "2": {
    webhook: "http://localhost:8080/2",
    email: "andre@example.com",
  },
  "3": { webhook: "http://localhost:8080/3", email: "josh@example.com" },
};

export const getUserById = async (userId: string) => usersTable[userId];
