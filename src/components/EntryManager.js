
export const getEntries = () => {
  return fetch("http://localhost:8088/journal_entries")
    .then(res => res.json())
};

export const searchEntries = (searchTerm) => {
  return fetch(`http://localhost:8088/journal_entries?q=${searchTerm}`)
    .then(res => res.json())
};

export const getEntryById = id => {
  return fetch(`http://localhost:8088/journal_entries/${id}`)
    .then(res => res.json())
};

export const addEntry = Entry => {
  return fetch("http://localhost:8088/journal_entries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(Entry)
  }).then(getEntries);
};

export const deleteEntry = entryId => {
  return fetch(`http://localhost:8088/journal_entries/${entryId}`, {
    method: "DELETE"
  })
};

export const updateEntry = entry => {
  return fetch(`http://localhost:8088/journal_entries/${entry.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(entry)
  })
};

