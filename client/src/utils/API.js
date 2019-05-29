import axios from "axios";

export default {
  // Gets all characters
  getCharacters: function() {
    return axios.get("/api/characters");
  },
  // Gets the character with the given id
  getCharacter: function(id) {
    return axios.get("/api/characters/" + id);
  },
  // Deletes the character with the given id
  deleteCharacter: function(id) {
    return axios.delete("/api/characters/" + id);
  },
  // Update the character with the given id
  updateCharacter: function(id, characterData) {
    return axios.post("/api/characters/" + id, characterData);
  },
  // Saves a character to the database
  saveCharacter: function(characterData) {
    return axios.post("/api/characters", characterData);
  }
};
