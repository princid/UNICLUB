import axios from "axios";

export const getAllClubs = () => {
  return new Promise((resolve, reject) => {
    axios
      .get("/api/club")
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
};

export const postEvent = (body) => {
  return new Promise((resolve, reject) => {
    axios
      .post("/api/event", body)
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
};

export const getAllClubEvents = (clubId) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`/api/club/${clubId}/event`)
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
};

export const loginAdmin = (body) => {
  return new Promise((resolve, reject) => {
    axios
      .post("/api/admin/login", body)
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
};

export const loginPresident = (body) => {
  return new Promise((resolve, reject) => {
    axios
      .post("/api/president/login", body)
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
};

export const logoutAdmin = (body) => {
  return new Promise((resolve, reject) => {
    axios
      .post("/api/admin/logout", body)
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
};

export const logoutPresident = (body) => {
  return new Promise((resolve, reject) => {
    axios
      .post("/api/president/logout", body)
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
};

export const assignPresident = (body) => {
  return new Promise((resolve, reject) => {
    axios
      .post("/api/president", body)
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
};

export const removePresident = (presidentId) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`/api/president/${presidentId}`)
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
};

export const getAllPresidents = () => {
  return new Promise((resolve, reject) => {
    axios
      .get("/api/president")
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
};

export const deleteEvent = (eventId) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`/api/event/${eventId}`)
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
};

export const fetUserData = () => {
  return new Promise((resolve, reject) => {
    axios
      .get("/api/user/self")
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
};