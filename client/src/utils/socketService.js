import { io } from "socket.io-client";

let socket;

export const initiateSocketConnection = () => {
  socket = io("http://localhost:3000");
  console.log("Socket connected!");
};

export const disconnectSocket = () => {
  if (socket) socket.disconnect();
  console.log("Socket disconnected!");
};

export const updateCart = (callback) => {
  if (socket) {
    socket.on("cartUpdated", (data) => {
      callback(data.user.cart);
    });
  }
};
