import { createContext, useState } from "react";


export const TasksContext = createContext({
  notes: [],
  setNotes: () => null,
});

export const TasksContextProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const value = { notes, setNotes }
  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};
